<script lang="ts">

type Tech = { 
	name?: string, 
	imgUrl?: string, 
	imgAlt?: string 
}

type Image = {
	imgUrl: string,
	altText?: string
}

// export let hasTech: boolean = false;

export let tech: Tech[] = [];
export let postImage: Image = {
	imgUrl: 'https://via.placeholder.com/300x150'
}

</script>

<style lang="scss">
	.post {
		display: inline-block;
		list-style: none;
		font-family: $font-primary;
		max-width: 300px;
		width: 100%;
		margin-right: 50%;
	
		&:last-child {
			margin-right: 8%;
		}
		
		padding: 40px 20px 70px;
		background-color: $primary-black;
		position: relative;
		height: 390px;
		
		@include breakpoint('tablet-portrait-up') {
			display: block;
			margin-left: 10%;
			margin-right: 20%;
			// margin-right: 0px;
		}

		&__container {
			position: absolute;
			top: 10%;
			left: 10%;
			width: 340px;
		}

		&__title, &__subtitle {
			white-space: break-spaces;
		}
	
		&__title {
			@extend %post-title;
			color: $primary-white;
		}
	
		&__subtitle {
			@extend %post-subtitle;
			color: $primary-gray;
			margin-top: 22px;
		}

		&__tech {
			margin: 22px auto;
	
			&__item {
				max-width: 30px;
				width: 100%;
				display: inline-block;
				margin: 0 5px;
			}
		}

		&__image {
			filter: drop-shadow(10px 20px 16px rgba($primary-black, 0.25));
		}

		img {
			max-width: 100%;
			width: 100%;
		}
	}
	



</style>

<li class="post">
	<div class="post__container">
		<h3 class="post__title"><slot name="title"></slot></h3>
		<h4 class="post__subtitle"><slot name="subtitle"></slot></h4>
		{#if tech}
			<ul class="post__tech">
				{#each tech as techItem}
				<li class="post__tech__item">
					<img src={techItem.imgUrl} alt={techItem.imgAlt}>
				</li>
				{/each}
			</ul>
		{/if}
		{#if postImage}
			<div class="post__image">
				<slot name="image">
					<img src={postImage.imgUrl} alt={postImage?.altText}>
				</slot>
			</div>
		{/if}
	</div>
</li>
