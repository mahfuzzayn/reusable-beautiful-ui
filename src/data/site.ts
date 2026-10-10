const CDN = "https://nittonova.com";

export type Product = {
  name: string;
  slug: string;
  price: number;
  previousPrice: number | null;
  image: string;
  stock: number;
  avgRating: number;
  reviewsCount: number;
  remarks: string | null;
};

export type Category = {
  name: string;
  slug: string;
  image: string | null;
};

export type ProductGroup = {
  name: string;
  slug: string;
  products: Product[];
};

export const site = {
  name: "NittoNova",
  logo: `${CDN}/storage/media/1781268613_6a2c00853a089.webp`,
  hotline: "09644553309",
  whatsapp: "+8801631520033",
  email: "nittonova@gmail.com",
  address: "Diabari Circle, Sector 15, Uttara, Dhaka",
  footerText:
    "Nitto Nova is your trusted destination for innovative gadgets and smart home essentials. We are committed to delivering quality products, affordable prices, and reliable customer service to make everyday life easier and smarter.",
  slider: {
    desktop: `${CDN}/storage/sliders/1789398038_6aa80c1631004.webp`,
    mobile: `${CDN}/storage/sliders/1789398038_6aa80c164de3c.webp`,
  },
  headerMenu: [
    { title: "Home", url: "/" },
    { title: "Massager", url: "/category/massager" },
    { title: "Kithcen Accessories", url: "/category/kithcen-accessories" },
    { title: "Gadget", url: "/category/gadget" },
    { title: "Return & Refund policy", url: "/return-refund-policy" },
  ],
  footerCategories: [
    { title: "Massager", url: "/category/massager" },
    { title: "Rechargeable Fan", url: "/category/rechargeable-fan" },
    { title: "Kithcen Accessories", url: "/category/kithcen-accessories" },
    { title: "Gadget", url: "/category/gadget" },
  ],
  footerLinks: [
    { title: "Home", url: "/" },
    { title: "All Products", url: "/products" },
    { title: "Track Order", url: "/order/track" },
    { title: "Return & Refund policy", url: "/return-refund-policy" },
  ],
};

function product(
  name: string,
  slug: string,
  price: number,
  previousPrice: number | null,
  imageId: string,
  stock: number,
  avgRating: number,
  reviewsCount: number,
  remarks: string | null
): Product {
  return {
    name,
    slug,
    price,
    previousPrice,
    image: `${CDN}/storage/products/${imageId}`,
    stock,
    avgRating,
    reviewsCount,
    remarks,
  };
}

export const categories: Category[] = [
  { name: "Massager", slug: "massager", image: `${CDN}/storage/categories/1783842371_6a534643ce3cb.webp` },
  { name: "Kithcen Accessories", slug: "kithcen-accessories", image: `${CDN}/storage/categories/1783841991_6a5344c752bde.webp` },
  { name: "Gadget", slug: "gadget", image: `${CDN}/storage/categories/1788453188_6a99a1447768a.webp` },
  { name: "Speakers", slug: "speakers", image: `${CDN}/storage/categories/1783782272_6a525b80bb237.webp` },
  { name: "TWS & Headphones", slug: "tws-headphones", image: `${CDN}/storage/categories/1783841691_6a53439b77435.webp` },
  { name: "Smart Watch", slug: "smart-watch", image: `${CDN}/storage/categories/1783840934_6a5340a684517.webp` },
  { name: "Oral Care", slug: "oral-care", image: `${CDN}/storage/categories/1784319451_6a5a8ddbdf540.webp` },
  { name: "Rechargeable Fan", slug: "rechargeable-fan", image: `${CDN}/storage/categories/1783842117_6a5345453fb9e.webp` },
  { name: "Trimmer", slug: "trimmer", image: null },
  { name: "Women’s Care", slug: "womens-care", image: null },
];

export const trending: ProductGroup = {
  name: "Trending",
  slug: "trending",
  products: [
    product(
      "Fascia Massage Gun LM-130 With 9 Multi-Head Attachment",
      "fascia-massage-gun-lm-130-with-9-multi-head-attachment",
      999, 1500, "1782840955_6a43fe7b96daf.webp", 504, 5, 11, "Popular"
    ),
    product(
      "5 Head Massage Gun with 9 Multi-Head Attachment",
      "5-head-massage-gun-with-9-multi-head-attachment",
      1190, 1800, "1789908075_6aafd46b41fe3.webp", 109, 0, 0, null
    ),
    product(
      "Prestige Stainless Steel Electric Cooker-6.5L",
      "prestige-stainless-steel-electric-cooker-65l",
      1790, 2300, "1790161615_6ab3b2cf76ee0.webp", 4, 5, 3, "Trending"
    ),
    product(
      "Calf & Leg Massager with Heat & Air Compression",
      "calf-leg-massager-with-heat-air-compression",
      1490, 1990, "1789927932_6ab021fc93855.webp", 0, 0, 0, null
    ),
    product(
      "BAJAJ HB-27 Electric Grinder 1.0L 3250W with Free Masala Box",
      "bajaj-hb-27-electric-grinder-10l-3250w-with-free-masala-box",
      1490, 2000, "1786822848_6a80c0c08d376.webp", 1, 5, 1, "Special"
    ),
    product(
      "Portable Mini Sewing Machine with Foot Pedal",
      "portable-mini-sewing-machine-with-foot-pedal",
      980, 1500, "1790005449_6ab150c961680.webp", 0, 0, 0, null
    ),
    product(
      "JBL XTREME P192",
      "jbl-xtreme-p192",
      1399, 2599, "1783778173_6a524b7d187b2.webp", 64, 4.8571, 8, "Trending"
    ),
  ],
};

export const productGroups: ProductGroup[] = [
  {
    name: "Massager",
    slug: "massager",
    products: [
      product("Fascia Massage Gun LM-130 With 9 Multi-Head Attachment", "fascia-massage-gun-lm-130-with-9-multi-head-attachment", 999, 1500, "1782840955_6a43fe7b96daf.webp", 504, 5, 11, "Popular"),
      product("5 Head Massage Gun with 9 Multi-Head Attachment", "5-head-massage-gun-with-9-multi-head-attachment", 1190, 1800, "1789908075_6aafd46b41fe3.webp", 109, 0, 0, null),
      product("Calf & Leg Massager with Heat & Air Compression", "calf-leg-massager-with-heat-air-compression", 1490, 1990, "1789927932_6ab021fc93855.webp", 0, 0, 0, null),
      product("Smart Scalp Massager wtih Red Light", "smart-scalp-massager-wtih-red-light", 740, 1200, "1782841284_6a43ffc4efd47.webp", 21, 5, 1, "Hot"),
      product("Bionic Neck & Shoulder Massager with Fingers", "bionic-neck-shoulder-massager-with-fingers", 2450, 2700, "1782816809_6a43a029ddd8e.webp", 2, 0, 0, null),
      product("Fascial Massage Gun 3 Head With 9 Attachment S100T", "fascial-massage-gun-3-head-with-9-attachment-s100t", 999, 1500, "1784913943_6a63a01769af9.webp", 0, 5, 4, "Trending"),
      product("Electric Octopus Head Massager", "electric-octopus-head-massager-1", 990, 1680, "1782816327_6a439e4747d36.webp", 0, 0, 0, null),
      product("Massage Fascial Gun LM-810T with Five Multi-Head Attachment", "massage-fascial-gun-lm-810t-with-five-multi-head-attachment-1", 890, 1200, "1782841406_6a44003e36e46.webp", 0, 0, 0, null),
    ],
  },
  {
    name: "Kithcen Accessories",
    slug: "kithcen-accessories",
    products: [
      product("BAJAJ HB-27 Electric Grinder 1.0L 3250W with Free Masala Box", "bajaj-hb-27-electric-grinder-10l-3250w-with-free-masala-box", 1490, 2000, "1786822848_6a80c0c08d376.webp", 1, 5, 1, "Special"),
      product("Premium Multipurpose Masala Box with 4 Spoons | Spice Storage Container", "premium-multipurpose-masala-box-with-4-spoons-spice-storage-container", 130, null, "1786957031_6a82cce72b49e.webp", 44, 0, 0, null),
      product("Prestige Elactric Coocking Pot 7.8L", "prestige-elactric-coocking-pot-78l", 1890, 2490, "1785233777_6a688171688d9.webp", 21, 4.8571, 7, "Trending"),
      product("Prestige Stainless Steel Electric Cooker-6.5L", "prestige-stainless-steel-electric-cooker-65l", 1790, 2300, "1790161615_6ab3b2cf76ee0.webp", 4, 5, 3, "Trending"),
      product("Prestige Mini Cooking Pot 2 Liter", "prestige-mini-cooking-pot-2-liter", 999, 1200, "1782813300_6a439274ef46c.webp", 0, 0, 0, null),
      product("Electric Multi-Functional Cooking Pot", "electric-multi-functional-cooking-pot", 760, 1400, "1782751468_6a42a0ec76225.webp", 3, 0, 0, "Hot"),
    ],
  },
  {
    name: "Gadget",
    slug: "gadget",
    products: [
      product("Portable Mini Sewing Machine with Foot Pedal", "portable-mini-sewing-machine-with-foot-pedal", 980, 1500, "1790005449_6ab150c961680.webp", 0, 0, 0, null),
      product("Multi-Purpose Travel Portable Stand", "multi-purpose-travel-portable-stand", 899, 1199, "1788452744_6a999f88b6f2a.webp", 0, 0, 0, null),
    ],
  },
  {
    name: "Speakers",
    slug: "speakers",
    products: [
      product("JBL XTREME P192", "jbl-xtreme-p192", 1399, 2599, "1783778173_6a524b7d187b2.webp", 64, 4.8571, 8, "Trending"),
      product("Boombox 4 Mini LED Portable Bluetooth Speaker", "boombox-4-mini-led-portable-bluetooth-speaker", 1790, 2590, "1783777765_6a5249e51dad5.webp", 1, 0, 0, null),
      product("JBL Flip 7", "jbl-flip-7", 2799, 3000, "1784451545_6a5c91d9e90e4.webp", 0, 0, 0, null),
    ],
  },
  {
    name: "TWS & Headphones",
    slug: "tws-headphones",
    products: [
      product("2 in 1 ANCO Buds 8 Pro Gaming TWS Earbuds", "2-in-1-anco-buds-8-pro-gaming-tws-earbuds", 1299, 2000, "1783357740_6a4be12c02c55.webp", 1, 0, 0, "Trending"),
      product("Apple AirPods Pro 3 Premium Clone", "apple-airpods-pro-3-premium-clone", 1990, 2400, "1783771370_6a5230eaba8fa.webp", 2, 0, 0, null),
      product("Apple AirPods Max Pemium Clone", "apple-airpods-max-pemium-clone", 2200, 2980, "1783771644_6a5231fc2b6ab.webp", 1, 0, 0, "New"),
    ],
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
    products: [
      product("H10 Pro Smart Watch", "h10-pro-smart-watch", 1990, 2190, "1783775533_6a52412d8976d.webp", 1, 0, 0, "New"),
      product("Saiya SY11 Pro Smart Watch", "saiya-sy11-pro-smart-watch", 3999, 4800, "1783772788_6a5236748362c.webp", 1, 0, 0, "Special"),
      product("S23 Max AMOLED Smart Watch", "s23-max-amoled-smart-watch", 1890, 2300, "1783774865_6a523e9121e8b.webp", 1, 0, 0, "New"),
      product("S12 Max Smart Watch", "s12-max-smart-watch", 990, 1200, "1783774269_6a523c3ddbac4.webp", 1, 0, 0, "Popular"),
      product("Apple Watch Series 11 (Premium Clone)", "apple-watch-series-11-premium-clone", 2690, 3000, "1783768247_6a5224b712414.webp", 1, 0, 0, null),
    ],
  },
  {
    name: "Oral Care",
    slug: "oral-care",
    products: [
      product("Portable Rechargeable Dental Water Flosser – 220ml", "portable-rechargeable-dental-water-flosser-220ml", 1590, 2000, "1784719358_6a60a7fe30281.webp", 10, 5, 2, null),
    ],
  },
  {
    name: "Rechargeable Fan",
    slug: "rechargeable-fan",
    products: [
      product("Premium Hanging Neck Fan", "premium-hanging-neck-fan", 790, 1480, "1782810483_6a438773d177a.webp", 39, 0, 0, null),
      product("Portable Handheld Mini Turbo Fan", "portable-handheld-mini-turbo-fan-1", 490, 1200, "1782809583_6a4383efa5c8c.webp", 82, 0, 0, null),
      product("Cute Portable Rechargeable Mini Outdoor Fan", "cute-portable-rechargeable-mini-outdoor-fan", 350, 800, "1782810771_6a438893f2ee2.webp", 102, 0, 0, null),
    ],
  },
  {
    name: "Trimmer",
    slug: "trimmer",
    products: [
      product("HL-999 Hair Clipper", "hl-999-hair-clipper", 799, 1499, "1790616120_6abaa2383bd67.webp", 6, 0, 0, "Hot"),
      product("VGR V-991 Professional Hair And Beard Trimmer", "vgr-v-991-professional-hair-and-beard-trimmer", 1920, 2550, "1790618250_6abaaa8adf8c4.webp", 2, 0, 0, "Hot"),
    ],
  },
  {
    name: "Women’s Care",
    slug: "womens-care",
    products: [
      product("Portable Period Heating Pad with 3-Level Heating & Vibration Massage", "portable-period-heating-pad-with-3-level-heating-vibration-massage", 690, 990, "1790591143_6aba40a75279d.webp", 3, 0, 0, "Popular"),
      product("Dual Head 2-in-1 Waterproof Electric Shaver & Bikini Trimmer", "dual-head-2-in-1-waterproof-electric-shaver-bikini-trimmer", 1249, 1550, "1790593393_6aba49716e3f8.webp", 6, 0, 0, "Popular"),
      product("Pretty Gril Flawless Pedi Electronic Pedicure Tool", "pretty-gril-flawless-pedi-electronic-pedicure-tool", 699, 999, "1790613454_6aba97ce0fca2.webp", 10, 0, 0, null),
      product("Hair Oil Applicator Comb", "hair-oil-applicator-comb", 260, null, "1790614641_6aba9c711a0e3.webp", 4, 0, 0, "Popular"),
    ],
  },
];
