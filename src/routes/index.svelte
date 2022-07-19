<script>
	import Intro from '$lib/components/Intro.svelte'
	import Header from '$lib/components/SectionHeader.svelte'
	import Footer from '$lib/components/Footer.svelte'

	import About from '$lib/components/About.svelte'
	import Works from '$lib/components/Works/index.svelte'
	import Blurbs from '$lib/components/Blurbs/index.svelte'
</script>

<style lang="scss">
	@use 'base/colors' as colors;
	@use 'base/breakpoints' as breakpoint;

	main {
		background-color: colors.$primary-white;
	}

	div {
		position: relative;
		background-color: colors.$primary-white;
		overflow: hidden;
		padding-top: 4rem;
		padding-bottom: 8rem;
		text-align: center;
	}
</style>

<Intro /> 

<main>
	<Header>About</Header>
	<About/>

	<Header alignment="left">Works</Header>
	<div>
		<Works/>
	</div>

	<Header>Blurbs</Header>
	<div>
		<Blurbs/>
	</div>
</main>

<Footer />