<script lang="ts">
	import type { PostData } from '$lib/utils/types'

	export let postData: PostData;

	let postBackgroundURL = postData?.image?.imgUrl ? `--post-background-url: url("${postData?.image?.imgUrl}")` : '';
</script>

<style lang="scss">
	@use 'base/colors' as colors;
	@use 'base/variables' as var;
	@use 'base/typography';

.post, .blurbs {
	position: relative;
	display: flex;
	flex: 1 100%;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
	min-width: calc(100vw - var.$mobile-post-padding);
}

.post {
	&__content {
		display: flex;
		flex-direction: column;
		min-height: 25rem;
		margin-right: 4rem;
		padding-left: .5rem;
		padding-top: var.$mobile-post-padding;
		background: var(--post-background-url, colors.$primary-black);
		background: {
			repeat: no-repeat;
			position: center;
		}
		color: colors.$primary-white;
	}

	&__title {
		@extend %post-title;
		color: colors.$primary-white;
	}

	&__subtitle {
		@extend %post-subtitle;
		color: colors.$primary-gray;
	}

	&__summary {
		@extend %post-copy;
		margin-bottom: 1rem;
	}
}

.blurbs {
	&__title {
		@extend %blurb-title;
	}

	&__date {
		@extend %blurb-date;
		color: colors.$primary-gray;
	}
}

.tech {
	position: absolute;
	display: flex;
	flex-flow: column wrap;
	gap: .2rem;
	margin: .5rem auto;
	right: var.$mobile-post-padding;

	&__img {
		max-width: 1.875rem;
		width: 100%;
	}
}
</style>

<div class="{$$props.class}">
	<div class="{$$props.class}__content" style="{postBackgroundURL}">
		<h3 class="{$$props.class}__title">{ postData.title }</h3>
		<h4 class="{$$props.class}{postData.date ? '__date' : '__subtitle'}">{ postData?.subtitle || postData?.date }</h4>
	
		{#if postData.tech}
			<ul class="tech">
				{#each postData.tech as tech}
					<li class="tech__item">
						<img class="tech__img" src={tech.imgUrl} alt={tech?.imgAlt}>
					</li>
				{/each}
			</ul>
		{/if}

		{#if postData.summary}
			<p class="{$$props.class}__summary">{@html postData.summary}</p>
		{/if}
	
		<!-- {#if postData.image}
			<img class="{$$props.class}__image" src={postData.image.imgUrl} alt={postData.image?.altText}>
		{/if} -->
	</div>
</div>