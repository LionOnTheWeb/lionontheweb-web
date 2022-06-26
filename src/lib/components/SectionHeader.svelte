<script>
	export let alignment = 'right'
</script>

<style lang="scss">
	div {
		background-color: $primary-black;
	}

	h2 {
		@extend %section-header;
		color: $primary-white;
		padding-top: 50px;

		&.left {
			text-align: left;
			transform: translateX(-1.2rem);
		}
		
		&.right {
			text-align: right;
			transform: translateX(1.2rem);
		}
		// text-align: {alignment}
	}
</style>

<div class="sectionHeader">
	<h2 class={alignment}>
		<slot/>
	</h2>
</div>