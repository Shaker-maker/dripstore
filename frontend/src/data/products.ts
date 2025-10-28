export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Oversized Black Hoodie",
    slug: "oversized-black-hoodie",
    price: 89.99,
    category: "Tops",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699416503_d4ce1baf.webp",
    description: "Premium heavyweight cotton hoodie with oversized fit",
    stock: 45,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Minimal White Tee",
    slug: "minimal-white-tee",
    price: 39.99,
    category: "Tops",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699423247_a77ff586.webp",
    description: "Essential cotton t-shirt with subtle branding",
    stock: 120,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Raw Selvedge Denim",
    slug: "raw-selvedge-denim",
    price: 149.99,
    category: "Bottoms",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699428944_f38a1644.webp",
    description: "Japanese selvedge denim with tapered fit",
    stock: 32,
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 4,
    name: "Black Bomber Jacket",
    slug: "black-bomber-jacket",
    price: 199.99,
    category: "Outerwear",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699432980_04d056d0.webp",
    description: "Classic bomber with premium nylon shell",
    stock: 28,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Premium Sweatpants",
    slug: "premium-sweatpants",
    price: 79.99,
    category: "Bottoms",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699437187_f34beafc.webp",
    description: "Heavyweight cotton joggers with tapered leg",
    stock: 67,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Tactical Cargo Pants",
    slug: "tactical-cargo-pants",
    price: 119.99,
    category: "Bottoms",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699442077_1c45aa11.webp",
    description: "Military-inspired cargo pants with utility pockets",
    stock: 41,
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 7,
    name: "Minimalist Trench Coat",
    slug: "minimalist-trench-coat",
    price: 249.99,
    category: "Outerwear",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699446965_aa413486.webp",
    description: "Classic trench coat with modern silhouette",
    stock: 19,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Red Crewneck Sweatshirt",
    slug: "red-crewneck-sweatshirt",
    price: 69.99,
    category: "Tops",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699451974_d40f378e.webp",
    description: "Vintage-inspired heavyweight crewneck",
    stock: 53,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 9,
    name: "Navy Windbreaker",
    slug: "navy-windbreaker",
    price: 129.99,
    category: "Outerwear",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699456583_64a9a0b3.webp",
    description: "Lightweight packable windbreaker jacket",
    stock: 38,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Classic Baseball Cap",
    slug: "classic-baseball-cap",
    price: 34.99,
    category: "Accessories",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699461059_e5a42fe9.webp",
    description: "Unstructured 6-panel cap with adjustable strap",
    stock: 95,
    sizes: ["One Size"]
  },
  {
    id: 11,
    name: "Minimalist Sneakers",
    slug: "minimalist-sneakers",
    price: 159.99,
    category: "Accessories",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699465202_fb3e3576.webp",
    description: "Premium leather low-top sneakers",
    stock: 72,
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 12,
    name: "Leather Backpack",
    slug: "leather-backpack",
    price: 189.99,
    category: "Accessories",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699472328_70ddc027.webp",
    description: "Full-grain leather backpack with laptop sleeve",
    stock: 24,
    sizes: ["One Size"]
  },
  {
    id: 13,
    name: "Italian Leather Belt",
    slug: "italian-leather-belt",
    price: 59.99,
    category: "Accessories",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699476820_3ec9f387.webp",
    description: "Vegetable-tanned leather belt with brass buckle",
    stock: 88,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 14,
    name: "Merino Wool Beanie",
    slug: "merino-wool-beanie",
    price: 44.99,
    category: "Accessories",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699481028_2e982023.webp",
    description: "Soft merino wool beanie with ribbed knit",
    stock: 110,
    sizes: ["One Size"]
  },
  {
    id: 15,
    name: "Aviator Sunglasses",
    slug: "aviator-sunglasses",
    price: 179.99,
    category: "Accessories",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699486622_3941f836.webp",
    description: "Polarized lenses with titanium frame",
    stock: 46,
    sizes: ["One Size"]
  },
  {
    id: 16,
    name: "Tech Zip Hoodie",
    slug: "tech-zip-hoodie",
    price: 109.99,
    category: "Tops",
    image: "https://d64gsuwffb70l.cloudfront.net/68f223b7f86654a7c95ea120_1760699491762_d0e17db6.webp",
    description: "Performance fabric zip-up with moisture wicking",
    stock: 58,
    sizes: ["S", "M", "L", "XL", "XXL"]
  }
];
