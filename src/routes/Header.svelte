<script>

	let isDark = false;
	const toggle = () => {
		window.document.body.classList.toggle('dark');
		document.documentElement.dataset.theme = 'dark';
		isDark=!isDark;
  }
</script>

<header class="flex w-screen justify-center max-[375px]:px-0 border-x-0 border-t-0 border-slate-100 shadow-md dark:border-dark-mode-elements dark:transition-[background-color] dark:bg-dark-mode-elements">
	<nav class="flex justify-between  w-full py-5 items-center mx-5">
		<h1 class=" font-primary  text-2xl  font-extrabold dark:text-white max-[375px]:text-md dark:transition-[color]">
			Where in the world?
		</h1>
		<div class=" ">
			<button class="flex items-center justify-around  w-28 font-light font-primary dark:text-white dark:transition-[color] " on:click={()=> toggle()}>
				<ion-icon name={isDark ? "moon-sharp":"moon-outline"} class="max-[375px]:text-md  font-light dark:text-white"></ion-icon> Dark mode
			</button>
		</div>
	</nav>
</header>


<style>
	  @media (max-width: 375px) {
			h1{
		font-size: 1.2rem;
	}
  }

</style>