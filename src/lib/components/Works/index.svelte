<script lang="ts">
	// import type { WorksData } from '$lib/utils/types'
	import worksData from '$lib/data/worksData.json'

	import WorksItem from './Works-Item.svelte'
	import CarouselNav from '$lib/components/Nav.Carousel.svelte'

	let worksCarouselEl
</script>

<style lang="scss">
	@use 'base/variables' as var;

	div {
		display: flex;
		flex-direction: row;
		overflow: auto;
		margin-bottom: 3rem;
		width: 100%;
		text-align: left;
	}
</style>

<div bind:this={worksCarouselEl}>
	{#each worksData as workItem}
		<WorksItem worksData={workItem} />
	{/each}
</div>

<CarouselNav aria-label="Portfolio Carousel Pagination" number={worksData.length} carouselEl={worksCarouselEl}/>