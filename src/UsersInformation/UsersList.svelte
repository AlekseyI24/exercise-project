<h1>Users information</h1>

<ul class="users">
	{#if errorMessage}
		<ErrorState {errorMessage} />
	{:else if users.length > 0}
		{#each users as user (user.userId)}
			<User {...user} />
		{/each}
	{/if}
	{#if isLoading}
		<LoadingState/>
	{/if}
</ul>
{#if canLoadMore && !isLoading}
	<Button on:click={loadMoreUsers} text="Load more" />
{/if}

<script>
	import { onMount } from 'svelte';
	import { loadUsers } from '../Api/UsersInformationApi.js';
	import LoadingState from  '../Controls/LoadingState.svelte';
	import ErrorState from  '../Controls/ErrorState.svelte';
	import Button from  '../Controls/Button.svelte';
	import User from  './User.svelte';

	let users = [];
	let isLoading = true;
	let errorMessage = "";
	let usersLimit = 20;
	let nextPage = 0;
	let loadUrl = `https://hr.oat.taocloud.org/v1/users`;
	let canLoadMore = true;

	onMount(async () => {
		handleLoad();
	});

	function loadMoreUsers() {
		isLoading = true;
		handleLoad();
	}

	function handleLoad() {
		let usersPromise = loadUsers(`${loadUrl}?offset=${ nextPage * usersLimit }`);
		usersPromise.then(result => {
			users = [...users, ...result];
			if(result.length < usersLimit)
			{
				canLoadMore = false;
			}
			nextPage += 1;
			isLoading = false;
		})
		.catch(result => {
			errorMessage = result;
			isLoading = false;
			canLoadMore = false;
		});
	}
</script>

<style>
	.users {
		width: 100%;
		display: list-item;
	}
</style>