<script lang="ts">
	import Post from './Post.svelte'
	import Pagination from './Scroller.svelte'

	// let posts, sleft, postItemWidth;

	const tech = [
		{
			name: 'Javascript',
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
			imgAlt: 'Javscript Logo'
		},
		{
			name: 'Typescript',
			imgUrl: 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
			imgAlt: 'Typescript Logo'
		},
	]

	const posts = [
		{
			title: 'Dotdash Meredith',
			subtitle: 'Software Engineer',
			tech: tech
		},
		{
			title: 'Merriam-Webster',
			subtitle: 'Software Engineer',
			tech: tech
		}
	]

	// const sectionTracker = ({target}) => {
	// 	// If scrolled to a section
	// 	if (target.scrollLeft % postItemWidth == 0) {
	// 		let currIndex = target.scrollLeft / postItemWidth,
	// 			currSection = sections[currIndex];

	// 		$home = { 
	// 			currentSectionName : currSection.name,
	// 			currentIndex : currIndex
	// 		}
	// 	}
	// }
</script>

<style lang="scss">
	div {
		position: relative;
		background-color: $primary-white;
		perspective: 800px;
	}
	
	ul {
		padding: 3rem 0.8rem 3rem;
		background-color: $primary-white;
		white-space: nowrap;
		width: auto;
		overflow: scroll hidden;
		transform: rotateX(30deg) rotateY(-15deg) rotateZ(42deg);

		li {
			display: inline-block;
			list-style: none;
			font-family: $font-primary;
			max-width: 300px;
			width: 100%;
			margin-right: 20px;
			padding: 0 20px 70px;

			@include breakpoint('tablet-portrait-up') {
				display: block;
			}
		}
	}
</style>

<div>
<!-- <div bind:clientWidth={postItemWidth}> -->
	<!-- <ul bind:this={posts} on:scroll={()=>sleft=posts.scrollLeft}> -->
	{#if posts}
	<ul>
		{#each posts as post}
		<li>
			<Post tech={post?.tech}>
				<svelte:fragment slot="title">{post.title}</svelte:fragment>
				<svelte:fragment slot="subtitle">{post.subtitle}</svelte:fragment>
			</Post>
		</li>
		{/each}
	</ul>
	{/if}
	<!-- <p>UL scroll left: {sleft ? sleft: 0}</p>
	<p>Div client width: {postItemWidth}</p> -->
</div>
<Pagination aria-label="Work Portfolio Pagination" number={posts.length}/>