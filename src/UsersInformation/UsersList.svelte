<div id="main" role="main">
	<h1>Users information</h1>

	<LoadableList 
		dataShowComponent={User} 
		{loadUrl}
		dataLimit={usersLimit}
		bind:isLoading
		bind:this={loadableListComponent}
	/>

	{#if !isLoading}
		<Button on:click={loadMoreUsers} text="Load more" />
	{/if}
</div>

<script>
	import Button from  '../Controls/Button.svelte';
	import LoadableList, { loadMore } from  '../Controls/List/LoadableList.svelte';
	import User from  './User.svelte';

	let isLoading = true;
	let usersLimit = 20;
	let loadUrl = `https://hr.oat.taocloud.org/v1/users`;
	let loadableListComponent;

	function loadMoreUsers() {
		loadableListComponent.loadMore();
	}
</script>