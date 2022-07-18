<script lang="ts">
	import SocialBar from '$lib/components/SocialBar.svelte';
</script>

<style lang="scss">
	@use 'base/colors' as colors;
	@use 'base/breakpoints' as breakpoint;
	@use 'base/typography';
	
	footer {
		position: relative;
		margin: 2rem auto 3rem;
		padding-top: 4rem;
		text-align: center;

		&:after {
			content: '';
			position: absolute;
			height: .1rem;
			width: 80vw;
			top: 1rem;
			left: 10%;
			background-color: colors.$primary-gray;
			color: colors.$primary-gray;
		}
	}

	p {
		@extend %post-title;
		text-align: center;
		margin-bottom: 3rem;

		@media (min-width: breakpoint.$small-devices) {
			padding: 0 30%;
		}
	}
</style>

<footer>
	<p>If you see something, say something</p>
	<SocialBar/>
</footer>