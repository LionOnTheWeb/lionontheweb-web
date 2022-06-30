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
		display: block;
		margin: 0 auto;
		$height: 50px;
		height: $height;
		// width: 95%;
		background-color: darkorange;
		$borderRadius: calc($height/2);
		border-radius: $borderRadius $borderRadius $borderRadius $borderRadius;
		border: 3px solid colors.$primary-white;

		ul {
			height: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-content: center;
			align-items: center;
			gap: 10px;

			li {
				position: relative;
				width: calc($height - 20px);
				height: calc($height - 20px);
				background-color: rgb(83, 83, 83);
				border-radius: 50%;
				border: 4px solid darken(rgb(83, 83, 83), 40%);

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