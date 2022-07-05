export const jumplink = (e, parent) => {
	// Prevent default click functionality
	e.preventDefault();
	const hash = e.target.getAttribute('href');
	const target = document.querySelector(hash);
	const targetPos = target.offsetLeft;

	parent.scrollTo({
		left: targetPos,
		behavior: "smooth"
	});
}