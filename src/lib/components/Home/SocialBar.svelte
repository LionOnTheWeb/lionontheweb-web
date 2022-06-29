<script>
	import Stop from '$lib/components/SocialStopIconsSVG.svelte'

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
	div, ul, li {
		display: inline-block;
	}

	div {
		border: 2px solid var(--primary-gray);
		padding: 16px 8px 8px;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			height: 6px;
			width: 100%;
			background-color: var(--primary-black);
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
		<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M39 0H0.77789V10.75H39V0Z" fill="black"/>
			<path d="M39 38.2221V0H28.25V38.2221H39Z" fill="black"/>
			<path d="M31.3986 0L0.837612 30.561L8.43899 38.1624L39 7.60138L31.3986 0Z" fill="black"/>
		</svg>
	</span>
	
	{#if socials}
	<ul>
		{#each socials as social}
		<li>
			<a href={social.url}>
				<Stop name={social.name} height='40px' width='40'/>
			</a>
		</li>
		{/each}
	</ul>
	{/if}
</div>