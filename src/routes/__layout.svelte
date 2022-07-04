<style lang="scss">
	@use 'base/colors' as colors;

	div {
		overflow-x: hidden;
	}

	:global(strong) {
		color: colors.$subway-line__red;
		font-weight: 800;
	}
</style>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
</svelte:head>

<div>
	<slot/>
</div>