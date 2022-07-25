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

/**
 * Class to process either text truncation or text line-break
*/
export class TruncateText {
	#text: string;
	#evalText: string;
	#textContainer: HTMLElement;
	#canvasEl: HTMLCanvasElement;

	/**
	* Text and text container  
	* @constructor
	* @param {string} text - Text to be truncated if first word exceeds container width
	* @param {HTMLElement} textContainer - Text container to compare width against
	*/
	constructor(text: string, textContainer: HTMLElement) {
		this.#text = text;
		this.#evalText = text.split(' ')[0];
		this.#textContainer = textContainer;	
	}

	/**
	 * @property {Function} - Retrieves css style for provided style property value
	 * @param {string} prop 
	 * @returns {string}
	 */
	#cssStyle(prop: string): string {
		const style = window.getComputedStyle(this.#textContainer, null).getPropertyValue(prop);
		return style;
	}

	/**
	 * @property {Function} - Truncates text and returns with appended ellipsis
	 */
	get #truncateText(): string {
		return this.#evalText.substring(0, 9) + '...'
	}
	
	/**
	 * @property {Function} - Gets font styles for text container
	 * @returns {...}
	 */
	get #canvasFont(): `${string} ${string} ${string}` {
		const fontWeight: string = this.#cssStyle('font-weight') || 'normal';
		const fontSize: string = this.#cssStyle('font-size') || '16px';
		const fontFamily: string = this.#cssStyle('font-family') || 'Times New Roman';
		
		return `${fontWeight} ${fontSize} ${fontFamily}`;
	}

	/**
	 * @property {Function} - Retrieves text width value of phantom canvas element
	 * @return {number}
	 */
	get #textWidth(): number {
		const context: CanvasRenderingContext2D = this.#canvasEl ? this.#canvasEl.getContext("2d") : document.createElement("canvas").getContext("2d");
		context.font = this.#canvasFont;
		const metrics: TextMetrics = context.measureText(this.#evalText);
		return metrics.width;
	}

	/**
	 * Evaluates text for truncation; if text exceeds container boundaries, it's text is truncated
	 * @property {Function} - Evaluates text for truncation
	 * @returns {string}
	 */
	get evaluate(): string {
		const textWidth = this.#textWidth;
		const containerWidth = this.#textContainer.clientWidth;
		
		if (textWidth < containerWidth) return this.#text
		else if (textWidth > containerWidth) {
			return this.#truncateText
		}
	}
}