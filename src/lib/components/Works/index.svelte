<script lang="ts">
	// import type { WorksData } from '$lib/utils/types'
	import { scrollTracker } from '$lib/utils/functions/carousel'
	import { onMount } from 'svelte'
	import worksData from '$lib/data/worksData.json'

	import WorksItem from './Works-Item.svelte'
	import CarouselNav from '$lib/components/Nav.Carousel.svelte'

	let worksCarouselEl

	onMount(() => {
		worksCarouselEl.addEventListener('scroll', (e) => scrollTracker(e));
	})
</script>

<style lang="scss">
	@use 'base/variables' as var;

	div {
		display: flex;
		flex-direction: row;
		margin-bottom: 3rem;
		width: 100%;
		text-align: left;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}
</style>

<div bind:this={worksCarouselEl}>
	{#each worksData as workItem}
		<WorksItem worksData={workItem} />
	{/each}
</div>

<CarouselNav aria-label="Portfolio Carousel Pagination" number={worksData.length} carouselEl={worksCarouselEl}/>