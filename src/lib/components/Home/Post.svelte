<script lang="ts">
type Tech = { 
	name?: string, 
	imgUrl?: string, 
	imgAlt?: string 
}

// export let hasTech: boolean = false;

export let tech: Tech[] = [];

</script>

<style lang="scss">
	h3, h4 {
		white-space: break-spaces;
	}

	h3 {
		@extend %post-title;
	}

	h4 {
		@extend %post-subtitle;
		color: $primary-gray;
		margin-top: 22px;
	}

	ul {
		margin: 22px auto;

		li {
			max-width: 30px;
			width: 100%;
			display: inline-block;
			margin: 0 5px;
		}
	}

	div {
		filter: drop-shadow(10px 20px 16px rgba($primary-black, 0.25));
	}

	img {
		max-width: 100%;
		width: 100%;
	}
</style>

<h3><slot name="title"></slot></h3>
<h4><slot name="subtitle"></slot></h4>
{#if tech}
	<ul>
		{#each tech as techItem}
		<li>
			<img src={techItem.imgUrl} alt={techItem.imgAlt}>
		</li>
		{/each}
	</ul>
{/if}
<div>
	<slot name="image">
		<img src="https://via.placeholder.com/300x150" alt="">
	</slot>
</div>
