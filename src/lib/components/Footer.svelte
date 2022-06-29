<script lang="ts">
	import SocialBar from '$lib/components/Home/SocialBar.svelte';
</script>

<style lang="scss">
	footer {
		margin: 6rem auto 3rem;
		text-align: center;
	}

	p {
		@extend %post-title;
		text-align: center;
		margin-bottom: 3rem;

		@media (min-width: $breakpoint-sm) {
			padding: 0 30%;
		}
	}
</style>

<footer>
	<p>If you see something, say something</p>
	<SocialBar/>
</footer>