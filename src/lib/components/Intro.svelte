<script lang="ts">
	import Headline from '$lib/components/Headline.svelte'
	import Profile from '$lib/components/Profile.svelte'
</script>


<style lang="scss">
	header {
		color: $primary-white;
		background-color: $primary-black;
		padding-top: 5rem;
		padding-bottom: calc(2rem * 9);
	}
</style>


<header>
	<Headline/>
	<Profile/>
</header>