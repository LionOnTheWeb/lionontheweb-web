<script lang="ts">
	import type { WorksData } from '$lib/utils/types'

	export let worksData: WorksData;

	let workBackgroundURL = worksData?.image?.imgUrl ? `--post-background-url: url("${worksData?.image?.imgUrl}")` : '';
</script>

<style lang="scss">
	@use 'base/colors' as colors;
	@use 'base/variables' as var;
	@use 'base/typography';

.work {
	position: relative;
	display: flex;
	flex: 1 0 100vw;
	flex-direction: column;

	&__content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		min-height: 25rem;
		margin: 0 2rem;
		padding-left: .5rem;
		padding-top: var.$mobile-work-padding;
		color: colors.$primary-white;
		background: var(--post-background-url, colors.$primary-black);
		background: {
			repeat: no-repeat;
			position: center;
			size: cover;
		}

		&.has-bg:after {
			content: '';
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(320deg, transparent -20%, colors.$primary-black 100%);
		}
	}

	&__title {
		@extend %post-title;
		color: colors.$primary-white;
		text-shadow: 0.2rem 0.2rem 0.4rem lighten(colors.$primary-black, 10%);
		margin-left: -1.5rem;
		padding-right: 1.5rem;
		z-index: 2;
	}

	&__subtitle {
		@extend %post-subtitle;
		color: colors.$primary-gray;
		z-index: 2;
	}

	&__summary {
		@extend %post-copy;
		margin-bottom: 1rem;
		padding-right: 2rem;
		z-index: 2;
	}
}

.tech {
	$tech-item-size: 1.875rem;

	position: absolute;
	z-index: 2;
	display: flex;
	flex-flow: column wrap;
	gap: .2rem;
	right: -1rem;
	top: 3rem;

	&__item {
		max-width: $tech-item-size;
		max-height: $tech-item-size;
		box-shadow: -0.2rem 0.2rem 0.5rem  lighten(colors.$primary-black, 20%);
	}

	&__img {
		max-width: $tech-item-size;
		width: 100%;
		object-fit: cover;
	}
}
</style>

<div class="work">
	<div class="work__content {workBackgroundURL ? 'has-bg' : ''}" style="{workBackgroundURL}">
		<h3 class="work__title">{worksData.title}</h3>
		<h4 class="work__subtitle">{worksData.subtitle}</h4>
	
		{#if worksData.tech}
			<ul class="tech">
				{#each worksData.tech as tech}
					<li class="tech__item">
						<img class="tech__img" src={tech.imgUrl} alt={tech?.imgAlt}>
					</li>
				{/each}
			</ul>
		{/if}

		{#if worksData.summary}
			<p class="work__summary">{@html worksData.summary}</p>
		{/if}
	
	</div>
</div>