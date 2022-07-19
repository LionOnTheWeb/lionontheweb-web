<script lang="ts">
	import BlurbsItem from './Blurbs-Item.svelte'
	import Pagination from '$lib/components/Nav.Carousel.svelte'

	import blurbsData from '$lib/data/blurbsData.json'

	let blurbsContainer;
</script>

<style lang="scss">
	@use 'base/variables' as var;

	div {
		display: flex;
		flex-direction: column;
		gap: 3.125rem;
		padding: 0 1rem;
		margin-bottom: 3rem;
	}
</style>

<div bind:this={blurbsContainer}>
	{#each blurbsData as blurbsItem}
		<BlurbsItem blurbsData={blurbsItem} />
	{/each}
</div>

<!-- <Pagination aria-label="Blog Post Pagination" number={blurbsData.length} carouselEl={blurbsContainer}/> -->