
<script>
	import { createEventDispatcher } from "svelte";

  export let items;
  let regions = new Set(items.map(item => item.region));
  // console.log(regions)
  let selected;
  let selecteedItems;
  const dispatch = createEventDispatcher();

  const filterBySelection =()=>{
    selecteedItems=items.filter((item) => item.region ===selected );
    sayHello();
    console.log(selecteedItems)
  }

  function sayHello() {
		dispatch('sortItems', {
			items: selecteedItems,
		});
	}


</script>

<select  bind:value={selected} on:change={filterBySelection} id="countries" class=" drop-shadow-md my-5 py-3 px-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-mode-elements dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Filter by Region</option>
  {#each regions as region}
    <option value={region}>{region}</option>
  {/each}

</select>
