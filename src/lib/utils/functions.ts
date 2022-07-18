import { activeWorksItem } from "./stores";

export const jumplink = (e: any): void => {

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

export const carouselJumplink = (e: MouseEvent, linkIndex: number, CarouselEl: HTMLElement): void => {

	const carouselTarget = CarouselEl.children[linkIndex] as HTMLElement

	// Prevent default click functionality
	e.preventDefault();

	// return if already on first item
	if (CarouselEl.scrollLeft == 0 && carouselTarget.offsetLeft == 0) return

	else if (CarouselEl.scrollLeft !== 0 && carouselTarget.offsetLeft == 0) {

		// Scroll to first item
		CarouselEl.scrollTo({
			left: carouselTarget.offsetLeft,
			behavior: 'smooth'
		})

		activeWorksItem.set(linkIndex)

	} else if (CarouselEl.scrollWidth % carouselTarget.offsetLeft == 0) {

		// Scroll to any non-first item
		CarouselEl.scrollTo({
			left: carouselTarget.offsetLeft,
			behavior: 'smooth'
		})

		activeWorksItem.set(linkIndex)
	}
}

export const carouselItemTracker = () => {
	// If scrolled to a section
	// if (target.scrollLeft % carouselItem.width == 0) {
	// 	const currIndex = target.scrollLeft / carouselItem.width;
	// 	// 	currSection = sections[currIndex];

	// 	// $home = { 
	// 	// 	currentSectionName : currSection.name,
	// 	// 	currentIndex : currIndex
	// 	// }
	// }
}