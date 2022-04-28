<style lang="scss">
	h2 {
		@extend %section-header;
		color: $primary-white;
		background-color: $primary-black;
		text-align: right;
		padding-top: 50px;
	}
</style>

<h2>
	<slot/>
</h2>