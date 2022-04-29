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
		background-color: $primary-white;
	}
</style>

<Intro /> 

<main>
	<Header>About</Header>
	<About/>

	<Header alignment="left">Works</Header>
	<Works/>

	<Blurbs/>
	<Header>Blurbs</Header>

</main>

<Footer />