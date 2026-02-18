/**
 * exportPNG.ts
 * Captures the live preview DOM element and downloads it as a PNG.
 * Uses html-to-image for high-fidelity text rendering.
 */

import { toPng } from 'html-to-image';

/**
 * Takes a DOM element (the preview container) and downloads it as PNG.
 * @param element - The HTML element to capture
 * @param filename - The output filename (default: signature.png)
 */
export async function exportAsPNG(element: HTMLElement, filename = 'signature.png'): Promise<void> {
	// Wait for webfonts so tiny glyphs (dots, punctuation) render correctly in the capture.
	if ('fonts' in document) {
		await (document as Document & { fonts: FontFaceSet }).fonts.ready;
	}

	const captureScale = 2;
	const bounds = element.getBoundingClientRect();
	const captureWidth = Math.ceil(Math.max(element.scrollWidth, element.clientWidth, bounds.width));
	const captureHeight = Math.ceil(Math.max(element.scrollHeight, element.clientHeight, bounds.height));

	const downloadDataUrl = (dataUrl: string) => {
		const link = document.createElement('a');
		link.download = filename;
		link.href = dataUrl;
		link.click();
	};

	const dataUrl = await toPng(element, {
		pixelRatio: captureScale,
		cacheBust: true,
		backgroundColor: '#ffffff',
		width: captureWidth,
		height: captureHeight,
		canvasWidth: captureWidth * captureScale,
		canvasHeight: captureHeight * captureScale,
		skipAutoScale: true,
		style: {
			margin: '0',
			transform: 'none'
		}
	});

	downloadDataUrl(dataUrl);
}
