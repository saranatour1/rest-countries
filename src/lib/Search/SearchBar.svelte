<script>
	import { createEventDispatcher } from "svelte";

  export let items;
  let searchValue='';
  let inputValue;
  $:console.log(searchValue);
  let filteredCountries=[];
  // filter countries based on search input
  const filterCountries = () => {
		let storageArr = [];
		if (searchValue) {
			items.forEach(country => {
				if (country.name.toLowerCase().includes(searchValue.toLowerCase())) {
					storageArr = [...storageArr, country];
				}
			});
		}	
		filteredCountries = storageArr;
    sayHello();
	}	

  $:console.log(filteredCountries)

  $: if (!searchValue) {
		filteredCountries = [];
	}

  const dispatch = createEventDispatcher();

  function sayHello() {
		dispatch('searchItems', {
			items: filteredCountries,
		});
	}

</script>

<form on:submit|preventDefault={()=> inputValue=''} class=" max-[375]:w-screen ">   
  <label for="default-search" class="text-sm  font-light text-gray-900 sr-only dark:text-white ">Search</label>
  <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <ion-icon name="search-outline" class="w-4 h-4 text-gray-500 dark:text-white"></ion-icon>
      </div>
      <input type="search" bind:value={searchValue} bind:this={inputValue}  on:input={filterCountries}   id="default-search" class=" drop-shadow-md  shadow-slate-300 dark:shadow-dark-mode-elements pr-24 max-[375px]:w-full   p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-mode-elements dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a country" required>
  </div>
</form>


<style>
  @media (max-width: 600px){
    input[type='search'] {
      padding-right: 0;
    }
  }

</style>
