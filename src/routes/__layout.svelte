<style lang="scss">
	@import '../styles/global.css';
	
	div {
		overflow-x: hidden;
	}
</style>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
	<!-- <link href="../styles/global.css" rel="stylesheet"> -->
</svelte:head>

<div>
	<slot/>
</div>