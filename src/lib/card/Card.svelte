<script>
    export let item;
</script>

<div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-md">
  <a href={item.flag}>
      <img class="rounded-t-lg" src={item.flags.svg} alt="" />
  </a>
  <div class="p-5">
      <a href={`/${item.numericCode}`} data-sveltekit-preload-data> 
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
      </a>
      <p class="font-normal text-gray-700 dark:text-white"><span class="font-bold dark:text-white">Population</span>: {item.population.toLocaleString()}</p>
      <p class="font-normal text-gray-700 dark:text-white"><span class="font-bold dark:text-white">Region</span>: {item.region}</p>
      <p class="font-normal text-gray-700 dark:text-white"><span class="font-bold dark:text-white">Capital</span>: {item.capital}</p>
  </div>
</div>
