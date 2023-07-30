<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '$lib/app.css'
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>


</div>

<style>

</style>
