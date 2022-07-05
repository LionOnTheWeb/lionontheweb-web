<script lang="ts">
export let number

const jumpLink = (e) => {
	// Prevent default click functionality
	e.preventDefault();

	let hash = e.target.getAttribute('href');
	let target = document.querySelector(hash);
	let targetPos = target.offsetLeft;

	parent.scrollTo({
		left: targetPos,
		behavior: "smooth"
	});
}
</script>

<style lang="scss">
	@use 'base/colors' as colors;
	
	nav {
		$height: 3.125rem;
		$borderRadius: calc($height/2);

		display: block;
		margin: 0 auto;
		height: $height;
		width: 85%;
		background-color: colors.$subway-line__orange;
		border-radius: $borderRadius;

		ul {
			height: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-content: center;
			align-items: center;
			gap: 1rem;

			li {
				position: relative;
				width: 1.8rem;
				height: 1.8rem;
				background-color: colors.$subway-nav__stop;
				border-radius: 50%;
				border: .25rem solid darken(colors.$subway-nav__stop, 40%);

				a {
					font-size: 0;
					transition: all .3s ease-in-out;
				}
			}
		}
	}
</style>

<nav {...$$props}>
	<ul>
		{#each Array(number) as item}
		<li>
			<a on:click={jumpLink} href="http://www.google.com">{item}</a>
		</li>
		{/each}
	</ul>
</nav>