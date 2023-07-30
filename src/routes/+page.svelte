<script>
	import Search from "$lib/Search/Search.svelte";
	import Countries from "$lib/card/Countries.svelte";
	import items from '$lib/data.json';
	let filteredBySearch = [];
	let filteredBySort =[];
	// handle accepting search results 
	const handleSearch =(event) =>{	
		filteredBySearch = event.detail.searchItems;
	}

	const handleSort =(event) =>{
		filteredBySort = event.detail.items;
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Countries app" />
</svelte:head>

<section class="w-screen mx-5 h-full">
	<Search items={items}  on:searchItems={handleSearch} on:sortItems={handleSort}/>
	
	{#if filteredBySearch.length >0}
			<Countries items={filteredBySearch}/>
			{:else if filteredBySort.length > 0}
			<Countries items={filteredBySort}/>
			{:else}
			<Countries items={items}/>
	{/if}



</section>

<style>

</style>
