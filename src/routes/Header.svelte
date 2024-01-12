<script>
	let isDark = false;
	const toggle = () => {
		window.document.body.classList.toggle('dark');
		document.documentElement.dataset.theme = 'dark';
		isDark=!isDark;
  }
</script>

<header class="flex h-16 w-screen justify-center items-center max-[375px]:px-0 border-x-0 border-t-0 border-slate-100 shadow-md
 dark:border-dark-mode-elements 
 dark:transition-[background-color] dark:bg-dark-mode-elements">
	<nav class="flex justify-between  w-11/12  items-center">
		<h1 class=" font-primary  text-2xl  font-extrabold dark:text-white max-sm:text-[1.2rem] dark:transition-[color]">
			Where in the world?
		</h1>
			<button class="flex items-center justify-around  w-28 font-light font-primary dark:text-white dark:transition-[color] " on:click={()=> toggle()}>
				<ion-icon name={isDark ? "moon-sharp":"moon-outline"} class="max-[375px]:text-md  font-light dark:text-white"></ion-icon> {isDark ? 'Dark':'Light'} mode
			</button>
	</nav>
</header>
