<script lang="ts">
	import Headline from '$lib/components/Headline.svelte'
	import Profile from '$lib/components/Profile.svelte'
</script>


<style lang="scss">
	header {
		position: relative;
		color: var(--primary-white);
		background-color: var(--primary-black);

		@media (min-width: $breakpoint-sm) {
			display: flex;
			flex-flow: row nowrap;
		}
	}

	.headline {
		padding-top: 5rem;
		height: 100vh;
		
		@media (min-width: $breakpoint-sm) {
			padding-bottom: calc(2rem * 9);
			flex: 1 1 50%;
		}
	}

	.profile {
		// padding-top: 5rem;
		padding-bottom: calc(2rem * 4);

		@media (min-width: $breakpoint-sm) {
			color: var(--primary-black);
			background-color: var(--primary-white);
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