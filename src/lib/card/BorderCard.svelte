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

</script>


<a href={`/${border[0].numericCode}`} class="font-primary border dark:border-gray-400 drop-shadow-md px-2 py-2 my-5 bg-light-mode-background  dark:text-white dark:bg-dark-mode-elements align-middle">  
  {border[0].name}
</a>
