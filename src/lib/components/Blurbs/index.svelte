<script lang="ts">
	import BlurbsItem from './Blurbs-Item.svelte'
	import type { BlurbsData } from '$lib/utils/types'

	export let data: BlurbsData[];
</script>

<style lang="scss">
	@use 'base/variables' as var;

	.container {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		gap: 3.125rem;
		padding: 0 1rem;
		margin-bottom: 3rem;
	}
</style>

<div class="container">
	{#each data as blurb}
		<BlurbsItem blurbsData={blurb} />
	{/each}
</div>