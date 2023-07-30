<script>
	import Card from "./Card.svelte";
  export let items;
  // console.log(items)
  // let test= ['1','2','3','4','5','6','7','8']
</script>

<div class="flex items-center justify-center w-full">
<div class="my-5 grid grid-cols-4 gap-4 max-w-screen-xl max-[800px]:grid-cols-2  max-[375px]:grid-cols-1 px-8">
  {#each items as item }
    <Card item={item}/>
  {/each}
</div>
</div>
<style>
  @media (max-width: 800px) {
    div{
      grid-template-columns: 1fr 1fr;
    }
  }


  @media (max-width: 500px) {
    div{
      grid-template-columns: 1fr;
    }
  }


</style>