const DEFAULT_QUALITY = 0.8;

type ImageUploadOptions = {
	maxWidth: number;
	maxHeight: number;
	quality?: number;
};

function loadImage(file: File): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const objectUrl = URL.createObjectURL(file);
		const img = new Image();
		img.onload = () => {
			URL.revokeObjectURL(objectUrl);
			resolve(img);
		};
		img.onerror = () => {
			URL.revokeObjectURL(objectUrl);
			reject(new Error('Could not load image'));
		};
		img.src = objectUrl;
	});
}

function fitSize(width: number, height: number, maxWidth: number, maxHeight: number) {
	const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
	return {
		width: Math.max(1, Math.round(width * ratio)),
		height: Math.max(1, Math.round(height * ratio))
	};
}

function hasAlpha(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
	const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
	for (let i = 3; i < data.length; i += 4) {
		if (data[i] < 255) return true;
	}
	return false;
}

export async function compressImageForSignature(
	file: File,
	options: ImageUploadOptions
): Promise<string> {
	const image = await loadImage(file);
	const { width, height } = fitSize(
		image.naturalWidth,
		image.naturalHeight,
		options.maxWidth,
		options.maxHeight
	);

	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext('2d');
	if (!ctx) throw new Error('Could not create canvas context');

	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = 'high';
	ctx.drawImage(image, 0, 0, width, height);

	const transparent = hasAlpha(canvas, ctx);
	const outputType = transparent ? 'image/png' : 'image/jpeg';
	const quality = options.quality ?? DEFAULT_QUALITY;
	const result = canvas.toDataURL(outputType, quality);

	if (result.length > file.size * 1.37 && file.type.startsWith('image/')) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = () => reject(new Error('Could not read source image'));
			reader.readAsDataURL(file);
		});
	}

	return result;
}
