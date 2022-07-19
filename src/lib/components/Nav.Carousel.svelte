<script lang="ts">
import { carouselJumplink } from '$lib/utils/functions'
import { activeWorksItem } from '$lib/utils/stores'

import Icon from '$lib/components/Icons.svelte'

export let number: number;
export let carouselEl: HTMLElement;
</script>

<style lang="scss">
	@use 'base/colors' as colors;
	
	nav {
		$height: 3.125rem;
		$borderRadius: calc($height/2);

		display: inline-block;
		position: relative;
		height: $height;
		margin: 0 auto;
		padding: 0 4rem;
		background-color: colors.$subway-line__orange;
		border-radius: $borderRadius;
	}

	ul {
		display: flex;
		position: relative;
		flex-flow: row nowrap;
		justify-content: center;
		align-content: center;
		align-items: center;
		height: 100%;
		gap: 1rem;

	}

	$control-padding: .8rem;
	$control-size: 1rem;

	button.carousel-control-left--btn, button.carousel-control-right--btn {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		width: calc(#{$control-size} * 2rem);
		height: 2rem;
		background: none;
		outline: none;
		border: 0;
	}

	:global(svg.carousel-control-left--svg), :global(svg.carousel-control-right--svg) {

		// Custom variable set with color black fallback defined in Icons.svelte --> 'arrow' path elements
		--arrow-color: #{lighten(colors.$subway-nav__stop, 10%)};

		width: $control-size;
		height: $control-size;
	}
	
	button.carousel-control-left--btn {
		left: $control-padding;
		transform: rotate(225deg);
	}
	
	button.carousel-control-right--btn {
		right: $control-padding;
		transform: rotate(45deg);
	}

	button.carousel-indicator {
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
	<button class="carousel-control-left--btn">
		<Icon class="carousel-control-left--svg" name={'arrow'}/>
	</button>
	<ul>
		{#each Array(number) as item, index}
		<li>
			<button class="carousel-indicator" class:active={$activeWorksItem == index} on:click={(e) => carouselJumplink(e, index, carouselEl)}></button>
		</li>
		{/each}
	</ul>
	<button class="carousel-control-right--btn">
		<Icon class="carousel-control-right--svg" name={'arrow'}/>
	</button>
</nav>