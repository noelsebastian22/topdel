// Optional per-photo metadata for the work gallery, keyed by
// "<category-folder>/<filename>" (matches the path under src/assets/gallery/).
//
// Adding a photo: drop the file into src/assets/gallery/<category>/ — it is
// picked up automatically (see gallery.ts) using a title-cased filename as
// the caption and a generic alt text. Add an entry here whenever you want a
// better caption or (strongly recommended) a real, descriptive alt text.
//
// New category: create the folder, then add its slug -> display name below
// (and to categoryOrder if you care about its position in the filter chips).

export interface GalleryMeta {
  /** Shown under the photo and in the lightbox. Defaults to the filename, upper-cased. */
  caption?: string;
  /** Real accessibility description. Defaults to a generic "<category> — TopDel Renovation" string — replace this. */
  alt?: string;
  /** Use this photo as the category's cover tile on the homepage. First photo in the folder wins if none is flagged. */
  cover?: boolean;
  /** Lower sorts first. Photos without an order come after ordered ones, alphabetically by filename. */
  order?: number;
}

export const categoryNames: Record<string, string> = {
  wardrobes: 'Wardrobes',
  kitchens: 'Kitchens',
  'entertainment-unit': 'Entertainment units',
  'office-display': 'Office & display',
  'prayer-cabinets': 'Prayer cabinets',
  'face-plates': 'Address face plates',
  laundry: 'Laundry',
};

// Homepage/gallery-chip display order. Any category folder not listed here
// still works — it's just appended after these, alphabetically.
export const categoryOrder = [
  'wardrobes',
  'kitchens',
  'entertainment-unit',
  'office-display',
  'prayer-cabinets',
  'face-plates',
  'laundry',
];

export const galleryMeta: Record<string, GalleryMeta> = {
  'wardrobes/walkin-oak-full.jpg': {
    order: 1,
    cover: true,
    caption: 'WALK-IN ROBE · OAK · FULL U-FIT',
    alt: 'U-shaped walk-in wardrobe in oak-look board with double hanging rails, open shelving and drawer banks on three walls',
  },
  'kitchens/kitchen-white-stone.jpg': {
    order: 2,
    cover: true,
    caption: 'KITCHEN · GLOSS WHITE · FULL STONE SPLASHBACK',
    alt: 'Galley kitchen with gloss white cabinets floor to ceiling, marble-look stone benchtop and full-height matching splashback, gas cooktop and wall oven',
  },
  'office-display/study-bar-oak.jpg': {
    order: 3,
    caption: 'STUDY / BAR NOOK · OAK · GLASS RACKS',
    alt: 'Recessed oak wall unit with three long shelves, hanging wine glass racks, stone benchtop and cupboards below',
  },
  'wardrobes/robe-white-gloss.jpg': {
    order: 4,
    caption: 'BUILT-IN ROBE · GLOSS WHITE · WALL TO WALL',
    alt: 'Full-wall built-in wardrobe with gloss white doors, matte black handles and drawer banks, fitted floor to ceiling',
  },
  'kitchens/kitchen-island-stone.jpg': {
    order: 5,
    caption: 'KITCHEN · WATERFALL ISLAND · MID-INSTALL',
    alt: 'Kitchen mid-install with a long marble-look stone island with waterfall ends, white cabinetry and drawer banks, splashback still under protective film',
  },
  'prayer-cabinets/shrine-cabinet-lit.jpg': {
    order: 6,
    cover: true,
    caption: 'PRAYER CABINET · LED SURROUND',
    alt: 'Custom timber prayer cabinet with floating display shelves and an LED-lit surround, over a three-drawer cupboard base',
  },
  'entertainment-unit/tv-wall-grey.jpg': {
    order: 7,
    cover: true,
    caption: 'TV WALL · GREY · FLOATING UNIT + TOWERS',
    alt: 'Floating dark grey entertainment unit spanning a living room wall, with open shelf towers at each end and a long bank of push-open cupboards',
  },
  'face-plates/address-plate-serif.jpg': {
    order: 8,
    cover: true,
    caption: 'FACE PLATE · SERIF NUMERAL · LETTERBOX MOUNT',
    alt: 'White address face plate with serif house number and street name, mounted on a grey rendered letterbox in front of a new home',
  },
  'wardrobes/dressing-room-white.jpg': {
    order: 9,
    caption: 'DRESSING ROOM · WHITE · DRAWER BANKS',
    alt: 'White walk-in dressing room with open shelving bays above banks of soft-close drawers with black handles',
  },
  'kitchens/kitchen-white-ushape.jpg': {
    order: 10,
    caption: 'KITCHEN · U-SHAPE · GAS + DOUBLE SINK',
    alt: 'Compact U-shaped kitchen in white with overhead cupboards, stone benchtops, gas cooktop and a black double sink under the window',
  },
  'office-display/display-unit-lit.jpg': {
    order: 11,
    cover: true,
    caption: 'DISPLAY UNIT · OAK + STONE · LED SHELVES',
    alt: 'Oak display and bar unit at night with LED strip lighting under each shelf and a stone benchtop',
  },
  'wardrobes/walkin-oak-corner.jpg': {
    order: 12,
    caption: 'WALK-IN ROBE · OAK · DOUBLE HANG + DRAWERS',
    alt: 'Corner of an oak walk-in wardrobe showing adjustable shelving, double hanging space and three-drawer banks',
  },
  'laundry/laundry-white-overheads.jpg': {
    order: 13,
    cover: true,
    caption: 'LAUNDRY · FULL-HEIGHT · BENCH + OVERHEADS',
    alt: 'White laundry cabinetry with overhead cupboards, stone benchtop over the washing machine, inset stainless sink and grey splashback',
  },
  'prayer-cabinets/prayer-unit-grey.jpg': {
    order: 14,
    caption: 'PRAYER UNIT · FULL HEIGHT · FLOATING SHELVES',
    alt: 'Full-height grey woodgrain prayer unit with floating display shelves for statues and a two-door cupboard base',
  },
  'wardrobes/robe-white-internal.jpg': {
    order: 15,
    caption: 'BUILT-IN ROBE · INTERNALS · SHELF + HANG',
    alt: 'Built-in wardrobe internals in white with hanging rails, shelving towers and drawers, fitted into a wall recess',
  },
  'kitchens/kitchen-alfresco-dark.jpg': {
    order: 16,
    caption: 'ALFRESCO KITCHEN · DARK STONE · OUTDOOR-RATED',
    alt: 'Outdoor alfresco kitchen with white cabinetry, dark stone waterfall benchtop, inset sink and gas cooktop under a covered patio',
  },
  'entertainment-unit/tv-unit-oak.jpg': {
    order: 17,
    caption: 'TV WALL · FLOATING UNIT + SLAT PANEL',
    alt: 'Floating oak and white entertainment unit with wall-mounted TV, timber slat feature panel and open shelf tower',
  },
  'face-plates/address-plate-block.jpg': {
    order: 18,
    caption: 'FACE PLATE · BLOCK NUMERAL · RENDERED PLINTH',
    alt: 'White address face plate with a large block house number, fixed to a dark rendered front fence plinth',
  },
  'prayer-cabinets/shrine-cabinet-oak.jpg': {
    order: 19,
    caption: 'PRAYER CABINET · WALNUT-TONE',
    alt: 'Custom walnut-tone prayer cabinet in daylight with three floating shelves and a cupboard and drawer base',
  },
};
