/**
 * exportPNG.ts
 * Captures the live preview DOM element and downloads it as a PNG.
 * Uses html2canvas — optimized for mobile email client dimensions.
 */

import html2canvas from 'html2canvas';

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

	const captureScale = Math.max(2, Math.min(4, window.devicePixelRatio || 1));
	const captureWidth = Math.ceil(element.scrollWidth || element.clientWidth);
	const captureHeight = Math.ceil(element.scrollHeight || element.clientHeight);

	let canvas: HTMLCanvasElement;
	try {
		canvas = await html2canvas(element, {
			scale: captureScale,
			useCORS: true,
			backgroundColor: '#ffffff',
			width: captureWidth,
			height: captureHeight,
			foreignObjectRendering: false,
			logging: false
		});
	} catch {
		// Fallback for environments where canvas rendering is not reliable.
		canvas = await html2canvas(element, {
			scale: captureScale,
			useCORS: true,
			backgroundColor: '#ffffff',
			width: captureWidth,
			height: captureHeight,
			foreignObjectRendering: true,
			logging: false
		});
	}

	const link = document.createElement('a');
	link.download = filename;
	link.href = canvas.toDataURL('image/png');
	link.click();
}
