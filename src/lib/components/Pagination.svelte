<script lang="ts">
export let number: number;
export let carouselEl: HTMLElement;
let active = false;

import { carouselJumplink } from '$lib/utils/functions'
import { activeWorksItem } from '$lib/utils/stores'
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
	}

	ul {
		height: 100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-content: center;
		align-items: center;
		gap: 1rem;
	}

	button {
		width: 2.2rem;
		height: 2.2rem;
		background-color: colors.$subway-nav__stop;
		border-radius: 50%;
		border: .25rem solid darken(colors.$subway-nav__stop, 40%);
		font-size: 0;
		transition: all .3s ease-in-out;

		&:active, &.active {
			background-color: colors.$subway-nav__stop--active;
		}
	}
</style>

<nav {...$$props}>
	<ul>
		{#each Array(number) as item, index}
		<li>
			<button class:active={$activeWorksItem == index} on:click={(e) => carouselJumplink(e, index, carouselEl)}></button>
		</li>
		{/each}
	</ul>
</nav>