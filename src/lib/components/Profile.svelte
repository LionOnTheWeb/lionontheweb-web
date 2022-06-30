<style lang="scss">
	@use 'base/colors' as colors;
	@use 'base/breakpoints' as breakpoint;
	@use 'base/variables' as var;
	@use 'base/typography';


	div {
		padding: var.$mobile-padding;
		text-align: center;

		@media (min-width: breakpoint.$small-devices) {
			text-align: right;
		}
	}

	h1 {
		@extend %intro-name;
		padding-top: 150px;
		padding-bottom: 75px;
		color: colors.$primary-white;

		@media (min-width: breakpoint.$small-devices) {
			padding-top: 5rem;
			padding-bottom: 30px;
			color: colors.$primary-black;
		}
	}

	img {
		max-height: 100%;
		max-width: 80%;
		width: auto;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 14px;
	}

	ul {
		list-style: none;
		@extend %intro-roles;
		color: colors.$primary-gray;

		li {
			margin-top: 14px;

			@media (min-width: breakpoint.$small-devices) {
				text-align: right;
			}
		}
	}
</style>

<div>
	<h1>Asad Richardson</h1>
	<img src="https://via.placeholder.com/600x400
	" alt="Headshot of Asad">
	<ul>
		<li>full-stack engineer</li>
		<li>ux/ui designer</li>
		<li>aspiring ukulelist</li>
	</ul>
</div>