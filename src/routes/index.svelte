<script>
	import Intro from '$lib/components/Intro.svelte'
	import Header from '$lib/components/SectionHeader.svelte'
	import Footer from '$lib/components/Footer.svelte'

	import About from '$lib/components/Home/About.svelte'
	import Works from '$lib/components/Home/Works.svelte'
	import Blurbs from '$lib/components/Home/Blurbs.svelte'
</script>

<style lang="scss">
	main {
		background-color: var(--primary-white);
	}

	div {
		position: relative;
		background-color: var(--primary-white);
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