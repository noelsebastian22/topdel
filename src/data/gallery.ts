// Single source of truth for the work gallery — consumed by the homepage
// category tiles and the /gallery page.
//
// Adding a photo: drop the curated image into src/assets/gallery/, import it
// below, and add one entry to galleryItems with a category slug, caption and
// detailed alt text. Counts and tiles update automatically.

import type { ImageMetadata } from 'astro';

import walkinOakFull from '../assets/gallery/walkin-oak-full.jpg';
import walkinOakCorner from '../assets/gallery/walkin-oak-corner.jpg';
import robeWhiteGloss from '../assets/gallery/robe-white-gloss.jpg';
import robeWhiteInternal from '../assets/gallery/robe-white-internal.jpg';
import dressingRoomWhite from '../assets/gallery/dressing-room-white.jpg';
import kitchenWhiteStone from '../assets/gallery/kitchen-white-stone.jpg';
import kitchenIslandStone from '../assets/gallery/kitchen-island-stone.jpg';
import kitchenWhiteUshape from '../assets/gallery/kitchen-white-ushape.jpg';
import kitchenAlfrescoDark from '../assets/gallery/kitchen-alfresco-dark.jpg';
import studyBarOak from '../assets/gallery/study-bar-oak.jpg';
import displayUnitLit from '../assets/gallery/display-unit-lit.jpg';
import tvUnitOak from '../assets/gallery/tv-unit-oak.jpg';
import tvWallGrey from '../assets/gallery/tv-wall-grey.jpg';
import shrineCabinetLit from '../assets/gallery/shrine-cabinet-lit.jpg';
import shrineCabinetOak from '../assets/gallery/shrine-cabinet-oak.jpg';
import prayerUnitGrey from '../assets/gallery/prayer-unit-grey.jpg';
import addressPlateBlock from '../assets/gallery/address-plate-block.jpg';
import addressPlateSerif from '../assets/gallery/address-plate-serif.jpg';
import laundryWhiteOverheads from '../assets/gallery/laundry-white-overheads.jpg';

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

export const categories: GalleryCategory[] = [
  {
    slug: 'wardrobes',
    name: 'Wardrobes',
    cover: walkinOakFull,
    coverAlt: 'U-shaped oak walk-in wardrobe with hanging rails, shelving and drawers',
  },
  {
    slug: 'kitchens',
    name: 'Kitchens',
    cover: kitchenWhiteStone,
    coverAlt: 'Gloss white kitchen cabinetry with a marble-look stone benchtop and splashback',
  },
  {
    slug: 'office-display',
    name: 'Office & display',
    cover: displayUnitLit,
    coverAlt: 'Oak display and bar unit with LED-lit shelves and a stone benchtop',
  },
  {
    slug: 'prayer-cabinets',
    name: 'Prayer cabinets',
    cover: shrineCabinetLit,
    coverAlt: 'Custom timber prayer cabinet with floating shelves and an LED-lit surround',
  },
  {
    slug: 'face-plates',
    name: 'Address face plates',
    cover: addressPlateSerif,
    coverAlt: 'Custom address face plate mounted on a rendered letterbox',
  },
  {
    slug: 'laundry',
    name: 'Laundry',
    cover: laundryWhiteOverheads,
    coverAlt: 'White laundry cabinetry with overhead cupboards, stone benchtop and inset sink',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    img: walkinOakFull,
    category: 'wardrobes',
    caption: 'WALK-IN ROBE · OAK · FULL U-FIT',
    alt: 'U-shaped walk-in wardrobe in oak-look board with double hanging rails, open shelving and drawer banks on three walls',
  },
  {
    img: kitchenWhiteStone,
    category: 'kitchens',
    caption: 'KITCHEN · GLOSS WHITE · FULL STONE SPLASHBACK',
    alt: 'Galley kitchen with gloss white cabinets floor to ceiling, marble-look stone benchtop and full-height matching splashback, gas cooktop and wall oven',
  },
  {
    img: studyBarOak,
    category: 'office-display',
    caption: 'STUDY / BAR NOOK · OAK · GLASS RACKS',
    alt: 'Recessed oak wall unit with three long shelves, hanging wine glass racks, stone benchtop and cupboards below',
  },
  {
    img: robeWhiteGloss,
    category: 'wardrobes',
    caption: 'BUILT-IN ROBE · GLOSS WHITE · WALL TO WALL',
    alt: 'Full-wall built-in wardrobe with gloss white doors, matte black handles and drawer banks, fitted floor to ceiling',
  },
  {
    img: kitchenIslandStone,
    category: 'kitchens',
    caption: 'KITCHEN · WATERFALL ISLAND · MID-INSTALL',
    alt: 'Kitchen mid-install with a long marble-look stone island with waterfall ends, white cabinetry and drawer banks, splashback still under protective film',
  },
  {
    img: shrineCabinetLit,
    category: 'prayer-cabinets',
    caption: 'PRAYER CABINET · LED SURROUND',
    alt: 'Custom timber prayer cabinet with floating display shelves and an LED-lit surround, over a three-drawer cupboard base',
  },
  {
    img: tvWallGrey,
    category: 'office-display',
    caption: 'TV WALL · GREY · FLOATING UNIT + TOWERS',
    alt: 'Floating dark grey entertainment unit spanning a living room wall, with open shelf towers at each end and a long bank of push-open cupboards',
  },
  {
    img: addressPlateSerif,
    category: 'face-plates',
    caption: 'FACE PLATE · SERIF NUMERAL · LETTERBOX MOUNT',
    alt: 'White address face plate with serif house number and street name, mounted on a grey rendered letterbox in front of a new home',
  },
  {
    img: dressingRoomWhite,
    category: 'wardrobes',
    caption: 'DRESSING ROOM · WHITE · DRAWER BANKS',
    alt: 'White walk-in dressing room with open shelving bays above banks of soft-close drawers with black handles',
  },
  {
    img: kitchenWhiteUshape,
    category: 'kitchens',
    caption: 'KITCHEN · U-SHAPE · GAS + DOUBLE SINK',
    alt: 'Compact U-shaped kitchen in white with overhead cupboards, stone benchtops, gas cooktop and a black double sink under the window',
  },
  {
    img: displayUnitLit,
    category: 'office-display',
    caption: 'DISPLAY UNIT · OAK + STONE · LED SHELVES',
    alt: 'Oak display and bar unit at night with LED strip lighting under each shelf and a stone benchtop',
  },
  {
    img: walkinOakCorner,
    category: 'wardrobes',
    caption: 'WALK-IN ROBE · OAK · DOUBLE HANG + DRAWERS',
    alt: 'Corner of an oak walk-in wardrobe showing adjustable shelving, double hanging space and three-drawer banks',
  },
  {
    img: laundryWhiteOverheads,
    category: 'laundry',
    caption: 'LAUNDRY · FULL-HEIGHT · BENCH + OVERHEADS',
    alt: 'White laundry cabinetry with overhead cupboards, stone benchtop over the washing machine, inset stainless sink and grey splashback',
  },
  {
    img: prayerUnitGrey,
    category: 'prayer-cabinets',
    caption: 'PRAYER UNIT · FULL HEIGHT · FLOATING SHELVES',
    alt: 'Full-height grey woodgrain prayer unit with floating display shelves for statues and a two-door cupboard base',
  },
  {
    img: robeWhiteInternal,
    category: 'wardrobes',
    caption: 'BUILT-IN ROBE · INTERNALS · SHELF + HANG',
    alt: 'Built-in wardrobe internals in white with hanging rails, shelving towers and drawers, fitted into a wall recess',
  },
  {
    img: kitchenAlfrescoDark,
    category: 'kitchens',
    caption: 'ALFRESCO KITCHEN · DARK STONE · OUTDOOR-RATED',
    alt: 'Outdoor alfresco kitchen with white cabinetry, dark stone waterfall benchtop, inset sink and gas cooktop under a covered patio',
  },
  {
    img: tvUnitOak,
    category: 'office-display',
    caption: 'TV WALL · FLOATING UNIT + SLAT PANEL',
    alt: 'Floating oak and white entertainment unit with wall-mounted TV, timber slat feature panel and open shelf tower',
  },
  {
    img: addressPlateBlock,
    category: 'face-plates',
    caption: 'FACE PLATE · BLOCK NUMERAL · RENDERED PLINTH',
    alt: 'White address face plate with a large block house number, fixed to a dark rendered front fence plinth',
  },
  {
    img: shrineCabinetOak,
    category: 'prayer-cabinets',
    caption: 'PRAYER CABINET · WALNUT-TONE',
    alt: 'Custom walnut-tone prayer cabinet in daylight with three floating shelves and a cupboard and drawer base',
  },
];

export const countFor = (slug: string): number =>
  galleryItems.filter((item) => item.category === slug).length;
