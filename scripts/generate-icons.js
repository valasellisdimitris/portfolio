/**
 * Icon Generation Script
 * 
 * This script generates placeholder icons for your portfolio.
 * 
 * OPTION 1: Use online tool (Recommended - Easiest)
 * ------------------------------------------------
 * 1. Visit: https://realfavicongenerator.net/
 * 2. Upload the icon-template.svg from /public
 * 3. Download the generated package
 * 4. Extract all files to /public directory
 * 
 * OPTION 2: Use this Node.js script (Requires sharp)
 * ------------------------------------------------
 * Install: npm install sharp
 * Run: node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.log('\n❌ Sharp is not installed.');
  console.log('\nPlease choose one of these options:\n');
  console.log('OPTION 1 (Easiest): Use online favicon generator');
  console.log('  1. Visit: https://realfavicongenerator.net/');
  console.log('  2. Upload: /public/icon-template.svg');
  console.log('  3. Download and extract to /public\n');
  console.log('OPTION 2: Install sharp and run this script');
  console.log('  Run: npm install sharp');
  console.log('  Then: node scripts/generate-icons.js\n');
  process.exit(1);
}

const svgPath = path.join(__dirname, '../public/icon-template.svg');
const outputDir = path.join(__dirname, '../public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateIcons() {
  console.log('🎨 Generating icons...\n');
  
  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`✅ Generated: ${name} (${size}x${size})`);
  }
  
  console.log('\n✨ All icons generated successfully!');
  console.log('\n📝 Next step: Create og-image.jpg (1200x630px)');
  console.log('   Use Canva, Figma, or Photoshop to create a custom Open Graph image.\n');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
