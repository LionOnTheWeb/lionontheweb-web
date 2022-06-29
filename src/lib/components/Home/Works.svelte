<script lang="ts">
	// import Post from './Post.svelte'
	import Pagination from './Scroller.svelte'
	import Posts from '../Posts/index.svelte'

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

	const image = {
		imgUrl: 'https://via.placeholder.com/300x150'
	}

	const posts = [
		{
			title: 'Dotdash Meredith',
			subtitle: 'Software Engineer',
			summary: `Spent a majority of the <strong>first</strong> quarter investigating an 80% decline in new subscriptions.`,
			tech: tech,
			image: image
		},
		{
			title: 'Merriam-Webster',
			subtitle: 'Software Engineer',
			summary: `Responsible for 80% of frontend code for landing page.`,
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
	// ul {
	// 	@include breakpoint('mobile-only') {
	// 		padding: 3rem 0.8rem 3rem;
	// 	}
	// 	background-color: $primary-white;
	// 	white-space: nowrap;
	// 	width: auto;
	// 	overflow: scroll hidden;

	//  @media (min-width: var(--breakpoint-sm)) {
	// 		// transform: rotateX(30deg) rotateY(-15deg) rotateZ(42deg);
	// 		display: flex;

	// 	}
	// }
</style>

<!-- <div bind:clientWidth={postItemWidth}> -->
	<!-- <ul bind:this={posts} on:scroll={()=>sleft=posts.scrollLeft}> -->

{#if posts}
	<Posts data={posts} />
{/if}
	<!-- <p>UL scroll left: {sleft ? sleft: 0}</p>
	<p>Div client width: {postItemWidth}</p> -->
<Pagination aria-label="Work Portfolio Pagination" number={posts.length}/>