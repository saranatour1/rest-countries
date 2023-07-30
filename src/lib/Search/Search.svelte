<script>
	import { createEventDispatcher } from "svelte";
	import SearchBar from "./SearchBar.svelte";
	import Sort from "./Sort.svelte";
  export let items;
	const dispatch = createEventDispatcher();

  const handleSearch =(event) =>{
	  dispatch('searchItems', {
			searchItems: event.detail.items,
		});
	}

  
  const handleSort =(event) =>{
	  dispatch('sortItems', {
			items: event.detail.items,
		});
	}

</script>
<!-- Fix media Query at 375px, align items is not working -->

<div class="w-screen flex items-center justify-between gap-10 my-5 px-8 mx-auto  sm:gap-0">
  <SearchBar items={items} on:searchItems={handleSearch} />
  <Sort items={items} on:sortItems={handleSort} />
</div>

<style>
    @media (max-width: 375px) {
    div {
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
      padding: 8px;
    }
  }
</style>