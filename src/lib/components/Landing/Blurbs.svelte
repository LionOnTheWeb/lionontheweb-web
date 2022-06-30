<script lang="ts">
	// import Post from './Post.svelte'
	import Pagination from './Scroller.svelte'
	import Posts from '../Posts/index.svelte'

	// let posts, sleft, postItemWidth;
	const image = {
		imgUrl: 'https://via.placeholder.com/300x150'
	}

	const blurbs = [
		{
			title: 'Why I love svelte, and where it fits in web 3',
			date: 'Monday, 4 May 2022',
		},
		{
			title: 'What\'s love got to do with it',
			date: 'Tuesday, 14 March 2022',
			image: image,
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

<!-- <div bind:clientWidth={postItemWidth}> -->
	<!-- <ul bind:this={posts} on:scroll={()=>sleft=posts.scrollLeft}> -->

{#if blurbs}
	<Posts postType="blurbs" data={blurbs} />
{/if}
	<!-- <p>UL scroll left: {sleft ? sleft: 0}</p>
	<p>Div client width: {postItemWidth}</p> -->
<Pagination aria-label="Blog Post Pagination" number={blurbs.length}/>
