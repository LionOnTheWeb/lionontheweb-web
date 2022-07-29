import { activeWorksItem } from "$lib/utils/stores";

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

	const _scrollToEl = () => {
		carouselEl.scrollTo({
			left: carouselTarget.offsetLeft,
			behavior: 'smooth'
		});
	
		activeWorksItem.set(linkIndex); // Set active work item index on nav
	}

	if (carouselEl.scrollLeft == carouselTarget.offsetLeft) return
	else { _scrollToEl() }
}

/** 
 * Scroll Tracker function for carousel
 * @description Tracks scroll position in carousel and sets active work item
 * @param {Event} e - Scroll event
 * @returns {void} 
 */
export const scrollTracker = (e: Event): void => {
	const targetEl = e.target as HTMLDivElement;
	const targetElChild = targetEl.children[0] as HTMLDivElement;

	if (targetEl.scrollLeft % targetElChild.scrollWidth == 0) {
		const currIndex = targetEl.scrollLeft / targetElChild.scrollWidth;

		activeWorksItem.set(currIndex); // Set active work item index on nav
	}
}

