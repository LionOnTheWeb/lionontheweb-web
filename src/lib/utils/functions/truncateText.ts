/**
 * Class to process text truncation or text line-break
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
 * @see https://blog.bitsrc.io/doing-it-right-private-class-properties-in-javascript-cc74ef88682e
*/
export class TruncateText {
	#text: string;
	#textLimit: number;
	#evalText: string;
	#textContainer: HTMLElement;
	#canvasEl: HTMLCanvasElement;

	/**
	* Text and text container  
	* @constructor
	* @param {string} text - Text to be truncated if first word exceeds container width
	* @param {HTMLElement} textContainer - Text container to compare width against
	*/
	constructor(text: string, textContainer: HTMLElement, textLimit = 9) {
		this.#text = text;
		this.#evalText = text.split(' ')[0];
		this.#textContainer = textContainer;
		this.#textLimit = textLimit;
		this.evaluate;
	}

	/**
	 * @private
	 * @property {Function} - Retrieves css style for provided style property value
	 * @param {string} prop 
	 * @returns {string}
	 */
	#cssStyle(prop: string): string {
		const style = window.getComputedStyle(this.#textContainer, null).getPropertyValue(prop);
		return style;
	}

	/**
	 * @private
	 * @property {Function} - Truncates text and returns with appended ellipsis
	 */
	get #truncateText(): string {
		return this.#evalText.substring(0, this.#textLimit) + '...'
	}
	
	/**
	 * @private
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
	 * @private
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
	 * Evaluates text for truncation
	 * @public 
	 * @summary - If text exceeds container boundaries, it's text is truncated
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