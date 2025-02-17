<script>
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import { isDrawerOpen } from '$lib/store';
	import Radar from '$lib/components/Radar.svelte';
	import List from '$lib/components/List.svelte';
	import BarGraph from '$lib/components/BarGraph.svelte';
	import List2 from '$lib/components/List2.svelte';
	import List3 from '$lib/components/List3.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="min-h-screen overdflow-hidden">
	<Header />
	<section class={`content mt-10 px-2 sm:px-8 flex flex-col flex-wrap gap-8 sm:gap-14 ${$isDrawerOpen ? 'md:ml-64' : 'md:ml-30'} `}>
	  <div class="sm:ml-16 space-y-4 sm:space-y-6 w-full px-2 ">
		<h2 class="sm:text-2xl text-xl font-medium text-gray-100">The Stats Component of Daisy UI</h2>
		<div class="w-full"><Stats /></div>
	  </div>
	  <div class="sm:ml-14 w-full sm:w-[90%] sm:space-y-1 ">
		<h2 class="sm:text-2xl ml-2 text-xl font-medium text-gray-100">The Chart Component of Chart.js</h2>
		<div class="flex sm:flex-row flex-col gap-4 sm:gap-16 ">
		  <Radar />
		  <BarGraph />
		</div>
	  </div>
	  <div class="mb-10 sm:ml-16 sm:w-[90%] flex flex-col gap-16 px-2 ">
		<h2 class="sm:text-2xl text-xl -mb-10 font-medium text-gray-100">The List Component of Daisy UI</h2>
		<div class="flex flex-col sm:flex-row gap-6 sm:gap-40">
		  <List2 />
		  <List3 />
		</div>
		<List />
	  </div>
	</section>
	<Footer />
  </main>
  
<style>
	.content {
		transition: margin-left 0.3s ease-in-out; /* Smooth transition */
	}
</style>
