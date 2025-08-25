import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = 'public';
const outputDir = 'public/optimized';
const targetWidth = 800;

const imagePaths = [
  'geometric-mandala-tattoo-black-and-white-intricate.png',
  'realistic-portrait-tattoo-black-and-grey-photoreal.png',
  'traditional-rose-tattoo-bold-lines-classic-style.png',
  'biomechanical-tattoo-arm-sleeve-futuristic-mechani.png',
  'watercolor-phoenix-tattoo-vibrant-colors-artistic-.png',
  'minimalist-line-art-tattoo-simple-elegant-design.png',
  'japanese-dragon-tattoo-traditional-irezumi-style.png',
  'dotwork-skull-tattoo-stippling-technique-detailed.png',
];

async function optimizeImages() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Created directory: ${outputDir}`);

    for (const imagePath of imagePaths) {
      const inputFile = path.join(inputDir, imagePath);
      const outputFileName = `${path.parse(imagePath).name}.webp`;
      const outputFile = path.join(outputDir, outputFileName);

      console.log(`Processing ${inputFile}...`);

      await sharp(inputFile)
        .resize(targetWidth)
        .webp({ quality: 80 })
        .toFile(outputFile);

      console.log(`Successfully optimized ${inputFile} -> ${outputFile}`);
    }

    console.log('\nImage optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
  }
}

optimizeImages();
