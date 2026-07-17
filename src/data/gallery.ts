// Single source of truth for the work gallery — consumed by the homepage
// category tiles and the /gallery page.
//
// Adding a photo: drop the file into src/assets/gallery/<category>/ — that's
// it, it appears in the gallery on the next build/dev-server refresh with an
// auto-generated caption and a generic alt text. No imports, no array edits.
// For a better caption or (recommended) a real descriptive alt text, add an
// entry to gallery-meta.ts keyed by "<category>/<filename>".
//
// New category: create the folder under src/assets/gallery/ and register its
// display name in categoryNames (gallery-meta.ts).

import type { ImageMetadata } from 'astro';
import { categoryNames, categoryOrder, galleryMeta } from './gallery-meta';

export interface GalleryCategory {
  slug: string;
  name: string;
  cover: ImageMetadata;
  coverAlt: string;
}

export interface GalleryItem {
  img: ImageMetadata;
  category: string; // GalleryCategory slug
  caption: string;
  alt: string;
}

// Eagerly globs every image in every category subfolder at build time.
// Keys look like "../assets/gallery/wardrobes/walkin-oak-full.jpg".
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/*/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const titleCaseFromFilename = (filename: string): string =>
  filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').toUpperCase();

const fallbackAlt = (category: string): string =>
  `${categoryNames[category] ?? titleCaseFromFilename(category)} — custom joinery by TopDel Renovation`;

interface DiscoveredPhoto {
  key: string; // "<category>/<filename>"
  category: string;
  filename: string;
  img: ImageMetadata;
}

const discovered: DiscoveredPhoto[] = Object.entries(modules).map(([path, mod]) => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  const category = parts[parts.length - 2];
  return { key: `${category}/${filename}`, category, filename, img: mod.default };
});

// Deterministic order: explicit `order` in gallery-meta first, then
// alphabetically by filename within each category.
discovered.sort((a, b) => {
  const orderA = galleryMeta[a.key]?.order ?? Number.MAX_SAFE_INTEGER;
  const orderB = galleryMeta[b.key]?.order ?? Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) return orderA - orderB;
  return a.filename.localeCompare(b.filename);
});

export const galleryItems: GalleryItem[] = discovered.map(({ key, category, filename, img }) => {
  const meta = galleryMeta[key];
  return {
    img,
    category,
    caption: meta?.caption ?? titleCaseFromFilename(filename),
    alt: meta?.alt ?? fallbackAlt(category),
  };
});

const presentSlugs = [...new Set(discovered.map((p) => p.category))];
const orderedSlugs = [
  ...categoryOrder.filter((slug) => presentSlugs.includes(slug)),
  ...presentSlugs.filter((slug) => !categoryOrder.includes(slug)).sort(),
];

export const categories: GalleryCategory[] = orderedSlugs.map((slug) => {
  const photosInSlug = discovered
    .map((p, i) => ({ ...p, i }))
    .filter((p) => p.category === slug);
  const coverPhoto = photosInSlug.find((p) => galleryMeta[p.key]?.cover) ?? photosInSlug[0];
  const coverItem = galleryItems[coverPhoto.i];
  return {
    slug,
    name: categoryNames[slug] ?? titleCaseFromFilename(slug),
    cover: coverItem.img,
    coverAlt: coverItem.alt,
  };
});

export const countFor = (slug: string): number =>
  galleryItems.filter((item) => item.category === slug).length;
