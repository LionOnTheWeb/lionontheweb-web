import { activeWorksItem } from "$lib/utils/stores";

export class Carousel {
	carouselEl;

	constructor (carouselEl: HTMLElement) {
		this.carouselEl = carouselEl;
	}

	#navigateToEl(carouselTarget: HTMLElement) {
		this.carouselEl.scrollTo({
			left: carouselTarget.offsetLeft,
			behavior: 'smooth'
		});
	}

	jumpTo(linkIndex = 1) {
		// e.preventDefault();

		console.log('jump triggered:', this.carouselEl)

		const carouselTarget = this.carouselEl.children[linkIndex] as HTMLElement;

		/**
		 * Return if already on current carousel item
		 * Else navigate to carousel item
		 */
		if (this.carouselEl.scrollLeft == carouselTarget.offsetLeft) return
		else this.#navigateToEl(carouselTarget)
	}
}

/**
 * Jumplink function for carousel
 * @description Scrolls to item selected from carousel navigation
 * @param {MouseEvent} e 
 * @param {number} linkIndex - Carousel item index number to jump to
 * @param {HTMLElement} CarouselEl - Containing carousel element
 * @returns {void}
 */
 export const jumpTo = (e: MouseEvent, linkIndex: number, carouselEl: HTMLElement): void => {
	 e.preventDefault();
	
	const carouselTarget = carouselEl.children[linkIndex] as HTMLElement

	const scrollToEl = () => {
		carouselEl.scrollTo({
			left: carouselTarget.offsetLeft,
			behavior: 'smooth'
		});
	
		activeWorksItem.set(linkIndex);
	}

	if (carouselEl.scrollLeft == carouselTarget.offsetLeft) return
	else { scrollToEl() }
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

