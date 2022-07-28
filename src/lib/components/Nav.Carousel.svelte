<script lang="ts">
import { jumpTo, Carousel } from '$lib/utils/functions/carousel'
import { activeWorksItem } from '$lib/utils/stores'

import Icon from '$lib/components/Icons.svelte'
import { onMount } from 'svelte';

export let number: number;
export let carouselEl: HTMLElement;

// onMount(() => {
// 	carouselControl.jumpTo();
// })
// let carouselControl = new Carousel(carouselEl);
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

	$control-size: 1rem;

	.btn {
		$control-padding: .8rem;

		&__carousel-control-left, &__carousel-control-right {
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

		&__carousel-control-left {
			left: $control-padding;
			transform: rotate(225deg);
		}

		&__carousel-control-right {
			right: $control-padding;
			transform: rotate(45deg);
		}

		&__carousel-indicator {
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
	}

	:global(.svg__carousel-control-left, .svg__carousel-control-right) {
		// Custom variable set with color black fallback defined in Icons.svelte --> 'arrow' path elements
		--arrow-color: #{lighten(colors.$subway-nav__stop, 10%)};

		width: $control-size;
		height: $control-size;
	}
</style>

<nav {...$$props}>
	<button class="btn__carousel-control-left">
		<Icon class="svg__carousel-control-left" name={'arrow'}/>
	</button>
	<ul>
		{#each Array(number) as item, index}
		<li>
			<button class="btn__carousel-indicator" class:active={$activeWorksItem == index} on:click={(e) => jumpTo(e, index, carouselEl)}></button>
		</li>
		{/each}
	</ul>
	<button class="btn__carousel-control-right">
		<Icon class="svg__carousel-control-right" name={'arrow'}/>
	</button>
</nav>