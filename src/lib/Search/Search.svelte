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


<div class="w-11/12 flex items-center justify-between mx-auto gap-1 my-5 max-sm:flex-col max-sm:mt-3   max-sm:gap-0 ">
  <SearchBar items={items} on:searchItems={handleSearch} />
  <Sort items={items} on:sortItems={handleSort} />
</div>

<style>

@media (max-width: 600px){
    div {
      width: 95%;
    }
  }

  @media (max-width: 500px){
    div {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: 455px){
    div {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media (max-width: 415px){
    div {
      width: 70%;
      /* margin: 0 auto; */
    }
  }
    @media (max-width: 375px) {
    div {
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
      padding: 8px;
    }
  }
</style>