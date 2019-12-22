<ul class="list {listClass}">
	{#if errorMessage}
		<ErrorState {errorMessage} />
	{:else if data.length > 0}
		{#each data as item}
			<ListItem {itemClass}>
                <svelte:component this={dataShowComponent} {...item} />
            </ListItem>
		{/each}
	{/if}
	{#if isLoading}
		<LoadingState/>
	{/if}
</ul>

<script>
	import { onMount } from 'svelte';
	import { loadData } from '../../Api/ApiHelper.js';
	import LoadingState from  '../LoadingState.svelte';
	import ErrorState from  '../ErrorState.svelte';
    import ListItem from  './ListItem.svelte';
    
    export let itemClass = "";
    export let listClass = "";
	export let dataLimit = 20;
    export let loadUrl = `https://hr.oat.taocloud.org/v1/users`;
    export let dataShowComponent;
    export let isLoading = true;

    let data = [];
    let nextPage = 0;
	let errorMessage = "";

	onMount(async () => {
		handleLoad();
    });
    
    export function loadMore() {
		handleLoad();
	}

	function handleLoad() {
        isLoading = true;
		let usersPromise = loadData(`${loadUrl}?offset=${ nextPage * dataLimit }`);
		usersPromise.then(result => {
			data = [...data, ...result];
			nextPage += 1;
			isLoading = false;
		})
		.catch(error => {
            errorMessage = error;
            isLoading = false;
		});
	}
</script>

<style>
	.list {
		width: 100%;
	}
</style>