<script lang="ts">
	import type { PostData } from '$lib/utils/types'

	export let postData: PostData;
</script>

<style lang="scss">
.tech {
	display: flex;
	gap: 10px;
	flex-direction: row;
	margin: .5rem auto;

	&__img {
		max-width: 30px;
		width: 100%;
	}
}

.post, .blurbs {
	display: flex;
	flex: 1 100%;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
	min-width: 80vw;
}

.post {
	&__title {
		@extend %post-title;
	}

	&__subtitle {
		@extend %post-subtitle;
		color: var(--primary-gray);
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
		color: var(--primary-gray);
	}
}
</style>

<div class="{$$props.class}">
	<div class="{$$props.class}__content">
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
	
		{#if postData.image}
			<img class="{$$props.class}__image" src={postData.image.imgUrl} alt={postData.image?.altText}>
		{/if}
	</div>
</div>