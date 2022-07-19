<script>
	import Icon from '$lib/components/Icons.svelte'

	export let socials = [
		{
			url: 'https://www.github.com/lionontheweb',
			type: '',
			name: 'Github'
		},
		{
			url: 'https://codepen.io/Aricha03',
			type: '',
			name: 'codepen'
		},
		{
			url: 'https://www.linkedin.com/in/asadrichardson/',
			type: '',
			name: 'linkedin'
		},
		{
			url: 'https://twitter.com/lionontheweb',
			type: '',
			name: 'Twitter'
		},
		{
			url: 'https://www.behance.net',
			type: '',
			name: 'Behance'
		}
	]
</script>

<style lang="scss">
	@use 'base/colors' as colors;

	div, ul, li {
		display: inline-block;
	}

	div {
		border: 2px solid colors.$primary-gray;
		padding: 16px 8px 8px;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			height: 6px;
			width: 100%;
			background-color: colors.$primary-black;
			top: 2px;
			left: 0;
		}
	}

	span {
		margin-right: 6px;
	}

	ul {
		display: inline-flex;
		flex-flow: row wrap;
		gap: 10px;
	}
</style>

<div>
	<span>
		<Icon name={'arrow'} height='2.438rem' width='2.438rem'/>
	</span>
	
	{#if socials}
	<ul>
		{#each socials as social}
		<li>
			<a href={social.url}>
				<Icon name={social.name} height='40px' width='40'/>
			</a>
		</li>
		{/each}
	</ul>
	{/if}
</div>