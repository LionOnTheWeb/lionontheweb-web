<script lang="ts">
	import Posts from './Posts-Carousel.svelte'
	import PostItem from './Posts-Item.svelte'
	import type { PostData } from '$lib/utils/types'

	export let data: PostData[];
	export let postType: string = 'post';
</script>

<style lang="scss">
	div {
		:global(strong) {
			font-weight: bold;
		}
	}
</style>

<div>
	<Posts>
		{#each data as post}
			<PostItem class={postType} postData={post} />
		{/each}
	</Posts>
</div>