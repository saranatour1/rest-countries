<script>

  import { page } from '$app/stores';
  import items from '$lib/data.json';
  import { browser } from '$app/environment'
	import BorderCard from '$lib/card/BorderCard.svelte';

  let url= ``;
  let country;
  let currencyName;
  if(browser){
    url= window.location.pathname.substring(1);
  }

  const findCountry =()=>{
    return country = items.filter((item)=>  url === item.numericCode );
  }
  findCountry();

  $:console.log(url ,country[0])
  // $:{
  //   if()
  // }

  const formatCurencyName =(currencyCode) =>{
    currencyName = new Intl.DisplayNames(['en'], { type: 'currency' }).of(currencyCode);
    return currencyName;
  }


  // console.log(getCountryName('AF'))

console.log(country[0]?.borders)

</script>
<!-- <svelte:window on:hashchange={findCountry} /> -->
<section class="w-screen mx-5 h-screen">
<div class="w-80 flex items-center justify-between  my-5  mx-auto  sm:gap-0">
  <a href="/" class=" font-primary border  dark:border-gray-400 drop-shadow-md  px-2 py-2 my-5 bg-light-mode-background align-baseline dark:text-white dark:bg-dark-mode-elements"> <ion-icon name="arrow-back-outline mr-1"></ion-icon> Back</a>
</div>

<div class=" w-80 mx-auto my-1">
  {#each country as item}
    <img src={item?.flags?.svg} alt={`flag of ${item?.name}`} class="">
    <h2 class="my-3 font-extrabold dark:text-white text-2xl ">{item.name}</h2>
    <p class="dark:text-white">
      <span class="font-semibold">Native name</span> : {item.nativeName}
    </p>
    <p class="dark:text-white">
      <span class="font-semibold">Population</span> : {item.population.toLocaleString()}
    </p>
    <p class="dark:text-white">
      <span class="font-semibold">Region</span> : {item.region}
    </p>
    <p class="dark:text-white">
      <span class="font-semibold">Sub Region</span> : {item.subregion}
    </p>
    <p class="dark:text-white">
      <span class="font-semibold">Capital</span> : {item.capital}
    </p>

    <p class="dark:text-white mt-3">
      <span class="font-semibold">Top Level Domin</span> : {item.topLevelDomain}
    </p>

    <p class="dark:text-white ">
      <span class="font-semibold">Currencies </span> : {formatCurencyName(item.currencies[0].code)} 
    </p>

    <p class="dark:text-white ">
      <span class="font-semibold">Languages </span> : {#each item.languages  as language }
        {language.name}, 
      {/each} 
    </p>

    <div>

        {#if "borders" in item}
        <h4 class="dark:text-white text-lg font-extrabold mt-5 "> 
          Border Countries :
        </h4>
        <div class="grid grid-cols-3 sm:grid-cols-3 gap-1">
        {#each item.borders as border }
      
          <BorderCard item={border}/>

   
        {/each}
      </div>
      {/if}
      


    </div>
    

  {/each}

</div>






</section>