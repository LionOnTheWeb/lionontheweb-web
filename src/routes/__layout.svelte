<style lang="scss">
	@use 'base/colors' as colors;
	@use 'base/breakpoints' as breakpoint;

	div {
		overflow-x: hidden;
	}

	:global(strong) {
		color: colors.$subway-line__red;
		font-weight: 800;
	}

	:global(.container) {
		@media (min-width: breakpoint.$medium-devices) {
			padding-left: 20%;
			padding-right: 20%;
		}
		
	}
</style>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
</svelte:head>

<div>
	<slot/>
</div>