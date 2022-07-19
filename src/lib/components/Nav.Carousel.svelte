<script lang="ts">
import { carouselJumplink } from '$lib/utils/functions'
import { activeWorksItem } from '$lib/utils/stores'
import { onMount } from 'svelte'

import Icon from '$lib/components/Icons.svelte'

export let number: number;
export let carouselEl: HTMLElement;

let carouselControlLeft: any;
let carouselControlRight: any;

onMount(async () => {
	console.log(carouselControlLeft);
	// carouselControlLeft.querySelectorAll('path').forEach(path => {
	// 	// path.style.setProperty('--arrow-color', 'darkgray')
	// 	console.log(path);
	// });
});

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

	:global(.carousel-control-left), :global(.carousel-control-right) {
		--arrow-color: #{lighten(colors.$subway-nav__stop, 10%)};

		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		width: 1rem;
		height: 1rem;
	}
	
	$control-padding: .8rem;
	
	:global(.carousel-control-left) {
		left: $control-padding;
		transform: rotate(225deg);
	}
	
	:global(.carousel-control-right) {
		right: $control-padding;
		transform: rotate(45deg);
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
	<Icon class="carousel-control-left" name={'arrow'}/>
	<ul>
		{#each Array(number) as item, index}
		<li>
			<button class:active={$activeWorksItem == index} on:click={(e) => carouselJumplink(e, index, carouselEl)}></button>
		</li>
		{/each}
	</ul>
	<Icon class="carousel-control-right" name={'arrow'}/>
</nav>