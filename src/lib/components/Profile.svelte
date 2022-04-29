<style lang="scss">
	div {
		padding: $mobile-padding;
		text-align: center;

		@include breakpoint('tablet-portrait-up') {
			text-align: right;
		}
	}

	h1 {
		@extend %intro-name;
		padding-top: 150px;
		padding-bottom: 75px;

		@include breakpoint('tablet-portrait-up') {
			padding-top: 5rem;
			padding-bottom: 30px;
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
		color: $primary-gray;

		li {
			margin-top: 14px;

			@include breakpoint('tablet-portrait-up') {
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