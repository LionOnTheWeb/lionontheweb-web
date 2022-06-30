<style lang="scss">
	@use 'base/variables' as var;
	@use 'base/colors' as colors;
	@use 'base/typography';
	div {
		padding: var.$mobile-padding;
	}

	span {
		display: block;
		height: 0.188rem;
		max-width: 100%;
		width: 100%;
		margin-bottom: 1.125rem;
		background-color: colors.$primary-white;
	}

	h1 {
		@extend %intro-headline;
		color: colors.$primary-white;
	}

	h3 {
		@extend %intro-byline;
		color: colors.$primary-gray;
		padding-top: 1.25rem;
		padding-left: 1.2rem;
		text-indent: -1.2rem;
	}
</style>

<span></span>
<div>
	<h1>With great engineering, comes great usability</h1>
	<h3> &#8212; your friendly neighborhood web developer</h3>
</div>