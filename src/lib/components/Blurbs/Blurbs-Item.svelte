

<script lang="ts">
	import type { BlurbsData } from '$lib/utils/types'

	export let blurbsData: BlurbsData;

	
</script>

<style lang=scss>
	@use 'base/colors' as colors;
	@use 'base/variables' as var;
	@use 'base/typography';
	
	.blurb {
		&__content {
			position: relative;
		}

		&__title {
			@extend %blurb-title;
			background-color: colors.$primary-white;
			padding: 1rem 1rem 0 0;
			margin-bottom: .5rem;

			.featured & {
				width: 75%;
			}
		}
		
		&__date {
			@extend %blurb-date;
			color: colors.$primary-gray;
		}
		
		&__featured-image {
			transform: translateY(2rem);
			width: 100%;
			z-index: 1;
		}

		&__tags {
			list-style: none;
			display: flex;
			flex-flow: row wrap;
			gap: 1rem;
		}

		&__tag {
			@extend %blurb-tag;

			a {
				color: colors.$link;
				text-decoration: none;
			}
		}
	}
</style>


<div class="blurb {blurbsData.featured ? 'featured' : ''}">
	{#if blurbsData.featured && blurbsData.image}
	<img class="blurb__featured-image" src={blurbsData.image.imgUrl} alt={blurbsData.image?.altText}/>
	{/if}
	<div class="blurb__content">
		<h3 class="blurb__title">{blurbsData.title}</h3>
		<span class="blurb__date">{blurbsData.date}</span>
		<ul class="blurb__tags">
			<li class="blurb__tag"><a href="#">#podcast</a></li>
			<li class="blurb__tag"><a href="#">#technology</a></li>
			<li class="blurb__tag"><a href="#">#personal</a></li>
		</ul>
	</div>
</div>