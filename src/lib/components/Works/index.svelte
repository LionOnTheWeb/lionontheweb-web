<script lang="ts">
	import WorksItem from './Works-Item.svelte'
	import type { WorksData } from '$lib/utils/types'

	export let data: WorksData[];
</script>

<style lang="scss">
	@use 'base/variables' as var;

	.carousel {
		display: flex;
		flex-direction: row;
		overflow: auto;
		gap: 3.125rem;
		padding-left: var.$mobile-work-padding;

		&__container {
			width: auto;
			margin-bottom: 3rem;
		}
	}
</style>

<div>
	<div class="carousel__container">
		<div class="carousel">
			{#each data as work}
				<WorksItem worksData={work} />
			{/each}
		</div>
	</div>
</div>