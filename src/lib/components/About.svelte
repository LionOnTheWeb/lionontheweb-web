<style lang="scss">
	@use 'base/typography';
	@use 'base/colors' as colors;
	@use 'base/breakpoints' as breakpoint;
	@use 'base/variables' as var;

	div {
		padding: var.$mobile-padding;
		background-color: colors.$primary-white;
		padding-top: 80px;
		padding-bottom: 100px;
		position: relative;
		
		@media (min-width: breakpoint.$small-devices) {
			padding-top: 300px;
		}
	}

	img {
		max-width: 400px;
		max-height: 100%;
		width: 100%;
		height: auto;
	}

	p {
		@extend %copy;
		margin: 0 30px 0 30px;
		margin-top: -2.5rem;
		padding: 15px;
		padding-top: 5px;
		display: inline-block;
		background-color: colors.$primary-white;

		@media (min-width: breakpoint.$small-devices) {
			position: absolute;
			right: 25px;
			// bottom: -25px;
			top: 50px;
			max-width: 400px;
			width: 100%;
			margin: 0;
		}
	}
</style>

<div>
	<img src="https://via.placeholder.com/600x550
	" alt="Bodega Bacon, Egg and Cheese">
	<p>I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Just go back and put one little more happy tree in there. Everybody's different. Trees are different. Let them all be individuals. We'll put some happy little leaves here and there. These things happen automatically. All you have to do is just let them happen. Everyone wants to enjoy the good parts - but you have to build the framework first. Let's do that again. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. </p>
</div>