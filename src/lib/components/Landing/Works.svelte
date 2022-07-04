<script lang="ts">
	// import Post from './Post.svelte'
	import Pagination from './Scroller.svelte'
	import Works from '$lib/components/Works/index.svelte'

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
		imgUrl: 'https://via.placeholder.com/375x500'
	}

	const works = [
		{
			title: 'Dotdash Meredith',
			subtitle: 'Software Engineer',
			summary: `Spent a majority of the <strong>first</strong> quarter investigating an 80% decline in new subscriptions.`,
			tech: tech,
			image: image,
			featured: false,
		},
		{
			title: 'Merriam-Webster',
			subtitle: 'Software Engineer',
			summary: `Responsible for 80% of frontend code for landing page.`,
			tech: tech,
			featured: false,
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

{#if works}
	<Works data={works} />
{/if}
	<!-- <p>UL scroll left: {sleft ? sleft: 0}</p>
	<p>Div client width: {postItemWidth}</p> -->
<Pagination aria-label="Portfolio Pagination" number={works.length}/>