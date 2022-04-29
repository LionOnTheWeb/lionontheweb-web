<script lang="ts">
	import Headline from '$lib/components/Headline.svelte'
	import Profile from '$lib/components/Profile.svelte'
</script>


<style lang="scss">
	header {
		position: relative;
		color: $primary-white;
		background-color: $primary-black;

		@include breakpoint('tablet-portrait-up') {
			display: flex;
			flex-flow: row nowrap;
		}
	}

	.headline {
		padding-top: 5rem;
		
		@include breakpoint('tablet-portrait-up') {
			padding-bottom: calc(2rem * 9);
			flex: 1 1 50%;
		}
	}

	.profile {
		// padding-top: 5rem;
		padding-bottom: calc(2rem * 4);

		@include breakpoint('tablet-portrait-up') {
			color: $primary-black;
			background-color: $primary-white;
			flex: 1 1 50%;
		}
	}
</style>


<header>
	<div class="headline">
		<Headline/>
	</div>
	<div class="profile">
		<Profile/>
	</div>
</header>