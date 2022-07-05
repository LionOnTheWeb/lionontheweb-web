<script lang="ts">
	import type { Profile } from '$lib/utils/types';
	// export const ProfileData
	const tags: Array<string> = [ 'full-stack engineer', 'ux/ui designer', 'aspiring ukulelist' ];

	const image = {
		imgUrl: 'https://via.placeholder.com/375x500',
		altText: 'Asad Richardson Profile Pic'
	}

	const profileData: Profile = {
		name: 'Asad Richardson',
		image: image,
		tags: tags
	}
</script>

<style lang="scss">
	@use 'base/colors' as colors;
	@use 'base/breakpoints' as breakpoint;
	@use 'base/variables' as var;
	@use 'base/typography';

	div {
		padding: var.$mobile-padding;
		text-align: center;

		@media (min-width: breakpoint.$small-devices) {
			text-align: right;
		}
	}

	h1 {
		@extend %intro-name;
		padding-top: 9.375rem;
		padding-bottom: 4.688rem;
		color: colors.$primary-white;

		@media (min-width: breakpoint.$small-devices) {
			padding-top: 5rem;
			padding-bottom: 1.875rem;
			color: colors.$primary-black;
		}
	}

	img {
		max-height: 100%;
		max-width: 100%;
		width: auto;
		height: auto;
		object-fit: cover;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1rem;
	}

	ul {
		@extend %intro-roles;
		list-style: none;
		color: colors.$primary-gray;

		li {
			margin-top: 0.875rem;

			@media (min-width: breakpoint.$small-devices) {
				text-align: right;
			}
		}
	}
</style>

<div>
	<h1>{profileData.name}</h1>
	<img src={profileData.image.imgUrl} alt={profileData.image.altText}>
	<ul>
		{#each profileData.tags as tag}
			<li>{tag}</li>
		{/each}
	</ul>
</div>