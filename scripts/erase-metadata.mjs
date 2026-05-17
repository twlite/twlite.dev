import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const photographsDirectory = path.join(process.cwd(), "public/photographs");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff"]);

async function getImageFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function stripMetadata(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const temporaryPath = `${filePath}.metadata-stripped.tmp`;
  let pipeline = sharp(filePath, { failOn: "none" }).rotate();

  if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: 92, mozjpeg: true });
  } else if (extension === ".png") {
    pipeline = pipeline.png();
  } else if (extension === ".webp") {
    pipeline = pipeline.webp({ quality: 92 });
  } else if (extension === ".avif") {
    pipeline = pipeline.avif({ quality: 85 });
  } else if (extension === ".tif" || extension === ".tiff") {
    pipeline = pipeline.tiff();
  }

  await pipeline.toFile(temporaryPath);
  await fs.unlink(filePath);
  await fs.rename(temporaryPath, filePath);
}

const files = await getImageFiles(photographsDirectory);

for (const file of files) {
  await stripMetadata(file);
  console.log(`Stripped metadata: ${path.relative(process.cwd(), file)}`);
}

console.log(`Processed ${files.length} image${files.length === 1 ? "" : "s"}.`);
