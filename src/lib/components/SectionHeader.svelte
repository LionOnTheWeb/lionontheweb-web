<script>
	export let alignment = 'right'
</script>

<style lang="scss">
	h2 {
		@extend %section-header;
		color: $primary-white;
		background-color: $primary-black;
		padding-top: 50px;
		// text-align: right;
	}
</style>

<h2 style="text-align: {alignment};">
	<slot/>
</h2>