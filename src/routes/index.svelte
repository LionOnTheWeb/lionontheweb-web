<script>
	import Intro from '$lib/components/Intro.svelte'
	import Header from '$lib/components/SectionHeader.svelte'
	import Footer from '$lib/components/Footer.svelte'

	import About from '$lib/components/Landing/About.svelte'
	import Works from '$lib/components/Landing/Works.svelte'
	import Blurbs from '$lib/components/Landing/Blurbs.svelte'
</script>

<style lang="scss">
	@use 'base/colors' as colors;

	main {
		background-color: colors.$primary-white;
	}

	div {
		position: relative;
		background-color: colors.$primary-white;
		overflow: hidden;
		padding-top: 8em;
		padding-bottom: 3em;
	}

	:global(.container) {
		padding-left: 20%;
		padding-right: 20%;
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