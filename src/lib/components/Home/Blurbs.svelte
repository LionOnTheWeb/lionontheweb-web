<script lang="ts">
	import Post from './Post.svelte'
	import Pagination from './Scroller.svelte'

	const posts = [
		{
			title: 'Why I love svelte, and where it fits in web 3',
			date: 'Monday, 4 May 2022',
			
		},
		{
			title: 'What\'s love got to do with it',
			date: 'Tuesday, 14 March 2022',
		}
	]
</script>

<style lang="scss">
	div {
		position: relative;
		background-color: $primary-white;
	}
	
	ul {
		padding: 3rem 0.8rem 3rem;
		background-color: $primary-white;
		white-space: nowrap;
		width: auto;
		overflow: scroll hidden;

		li {
			display: inline-block;
			list-style: none;
			font-family: $font-primary;
			max-width: 300px;
			width: 100%;
			margin-right: 20px;
			padding: 0 20px 70px;
		}
	}
</style>

<Pagination aria-label="Blog Post Pagination" number={posts.length}/>
<div>
	{#if posts}
	<ul>
		{#each posts as post}
		<li>
			<Post>
				<svelte:fragment slot="title">{post.title}</svelte:fragment>
				<svelte:fragment slot="subtitle">{post.date}</svelte:fragment>
			</Post>
		</li>
		{/each}
	</ul>
	{/if}
</div>
