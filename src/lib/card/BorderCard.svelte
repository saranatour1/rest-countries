<script>
  import items from '$lib/data.json';

  export let item;
  let borderName;
  let borderCode;
  let border;

  const getCountryName =(code)=>{
    return border= items.filter((something) => code ===something.alpha3Code)
  }
  getCountryName(item); 

console.log(border)
</script>


<a href={`/${border[0].numericCode}`} data-sveltekit-reload
  class="font-primary border dark:border-gray-400 drop-shadow-md px-2 py-2 my-5 bg-light-mode-background  dark:text-white dark:bg-dark-mode-elements align-middle" data-sveltekit-preload-data>  
  {border[0].name}

</a>
