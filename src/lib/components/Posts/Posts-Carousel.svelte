<script lang="ts">

</script>


<style lang="scss">
	/* your styles go here */
	.post-carousel {
		display: flex;
		flex-direction: row;
		overflow: auto;
		gap: 3.125rem;

		&__container {
			width: auto;
			padding: $mobile-padding;
			margin-bottom: 3rem;
		}
	}
</style>

<div class="post-carousel__container">
	<div class="post-carousel">
		<slot></slot>
	</div>
</div>