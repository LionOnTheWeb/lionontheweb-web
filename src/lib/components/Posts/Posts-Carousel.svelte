<style lang="scss">
	@use 'base/variables' as var;

	.post-carousel {
		display: flex;
		flex-direction: row;
		overflow: auto;
		gap: 3.125rem;
		padding-left: var.$mobile-post-padding;

		&__container {
			width: auto;
			margin-bottom: 3rem;
		}
	}
</style>

<div class="post-carousel__container">
	<div class="post-carousel">
		<slot></slot>
	</div>
</div>