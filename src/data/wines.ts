export interface Wine {
  id: number;
  name: string;
  winery: string;
  region: string;
  country: string;
  year: number;
  type: 'red' | 'white' | 'rosé' | 'sparkling' | 'dessert';
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  alcohol: number;
  varietal: string[];
  foodPairing: string[];
  isOnSale?: boolean;
  isFeatured?: boolean;
}

export const wines: Wine[] = [
  {
    id: 1,
    name: "Château Margaux",
    winery: "Château Margaux",
    region: "Margaux",
    country: "France",
    year: 2018,
    type: "red",
    price: 899.99,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400&h=600&fit=crop",
    description: "An exceptional Bordeaux wine with complex aromas of dark fruit, cedar, and subtle spices. Full-bodied with elegant tannins and a long, sophisticated finish.",
    alcohol: 13.5,
    varietal: ["Cabernet Sauvignon", "Merlot", "Petit Verdot", "Cabernet Franc"],
    foodPairing: ["Red meat", "Game", "Aged cheese"],
    isFeatured: true
  },
  {
    id: 2,
    name: "Dom Pérignon Vintage",
    winery: "Dom Pérignon",
    region: "Champagne",
    country: "France",
    year: 2013,
    type: "sparkling",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
    description: "The pinnacle of champagne craftsmanship. Fine bubbles, complex aromatics with notes of citrus, white flowers, and brioche.",
    alcohol: 12.5,
    varietal: ["Chardonnay", "Pinot Noir"],
    foodPairing: ["Oysters", "Caviar", "Sushi"],
    isOnSale: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "Opus One",
    winery: "Opus One Winery",
    region: "Napa Valley",
    country: "USA",
    year: 2019,
    type: "red",
    price: 429.99,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=600&fit=crop",
    description: "A Bordeaux-style blend from Napa Valley. Rich and powerful with layers of dark fruit, chocolate, and oak spices.",
    alcohol: 14.5,
    varietal: ["Cabernet Sauvignon", "Petit Verdot", "Merlot", "Cabernet Franc", "Malbec"],
    foodPairing: ["Grilled steak", "Lamb", "Dark chocolate"],
    isFeatured: true
  },
  {
    id: 4,
    name: "Cloudy Bay Sauvignon Blanc",
    winery: "Cloudy Bay",
    region: "Marlborough",
    country: "New Zealand",
    year: 2022,
    type: "white",
    price: 29.99,
    rating: 4.4,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=600&fit=crop",
    description: "Crisp and vibrant with tropical fruit flavors, citrus notes, and a distinctive mineral finish.",
    alcohol: 13.0,
    varietal: ["Sauvignon Blanc"],
    foodPairing: ["Seafood", "Goat cheese", "Asian cuisine"]
  },
  {
    id: 5,
    name: "Barolo Brunate",
    winery: "Giuseppe Rinaldi",
    region: "Piedmont",
    country: "Italy",
    year: 2017,
    type: "red",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.6,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400&h=600&fit=crop",
    description: "A traditional Barolo with remarkable depth. Notes of cherry, rose petals, tar, and earth with firm tannins.",
    alcohol: 14.0,
    varietal: ["Nebbiolo"],
    foodPairing: ["Truffle dishes", "Braised meats", "Hard cheeses"],
    isOnSale: true
  },
  {
    id: 6,
    name: "Whispering Angel Rosé",
    winery: "Château d'Esclans",
    region: "Provence",
    country: "France",
    year: 2022,
    type: "rosé",
    price: 19.99,
    rating: 4.3,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&h=600&fit=crop",
    description: "Elegant pale pink color with delicate flavors of red berries, citrus, and a crisp, refreshing finish.",
    alcohol: 13.0,
    varietal: ["Grenache", "Cinsault", "Rolle"],
    foodPairing: ["Mediterranean cuisine", "Grilled fish", "Summer salads"]
  },
  {
    id: 7,
    name: "Caymus Cabernet Sauvignon",
    winery: "Caymus Vineyards",
    region: "Napa Valley",
    country: "USA",
    year: 2020,
    type: "red",
    price: 79.99,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1566754895090-f6a18ac4b0e3?w=400&h=600&fit=crop",
    description: "Rich and full-bodied with dark fruit flavors, hints of vanilla, and smooth tannins. A classic Napa Valley expression.",
    alcohol: 14.8,
    varietal: ["Cabernet Sauvignon"],
    foodPairing: ["Ribeye steak", "BBQ ribs", "Blue cheese"],
    isFeatured: true
  },
  {
    id: 8,
    name: "Chablis Premier Cru",
    winery: "William Fèvre",
    region: "Burgundy",
    country: "France",
    year: 2021,
    type: "white",
    price: 45.99,
    rating: 4.4,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1566754895090-f6a18ac4b0e3?w=400&h=600&fit=crop",
    description: "Mineral-driven white wine with crisp acidity, citrus notes, and a distinctive chalky terroir character.",
    alcohol: 12.5,
    varietal: ["Chardonnay"],
    foodPairing: ["Oysters", "Grilled fish", "Goat cheese"]
  },
  {
    id: 9,
    name: "Moët & Chandon Impérial",
    winery: "Moët & Chandon",
    region: "Champagne",
    country: "France",
    year: 2018,
    type: "sparkling",
    price: 59.99,
    originalPrice: 69.99,
    rating: 4.2,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
    description: "The world's most beloved champagne with vibrant intensity and elegant maturity. Perfect balance of Pinot Noir, Chardonnay, and Pinot Meunier.",
    alcohol: 12.0,
    varietal: ["Pinot Noir", "Chardonnay", "Pinot Meunier"],
    foodPairing: ["Appetizers", "Seafood", "Celebration meals"],
    isOnSale: true
  },
  {
    id: 10,
    name: "Penfolds Grange",
    winery: "Penfolds",
    region: "South Australia",
    country: "Australia",
    year: 2016,
    type: "red",
    price: 649.99,
    rating: 4.8,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=600&fit=crop",
    description: "Australia's most celebrated wine. A powerful Shiraz with intense fruit flavors, spice, and remarkable aging potential.",
    alcohol: 14.5,
    varietal: ["Shiraz", "Cabernet Sauvignon"],
    foodPairing: ["Kangaroo", "Lamb", "Strong cheeses"],
    isFeatured: true
  },
  {
    id: 11,
    name: "Sancerre Rouge",
    winery: "Henri Bourgeois",
    region: "Loire Valley",
    country: "France",
    year: 2020,
    type: "red",
    price: 32.99,
    rating: 4.1,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400&h=600&fit=crop",
    description: "Light and elegant Pinot Noir with bright red fruit flavors, earthy undertones, and silky tannins.",
    alcohol: 13.0,
    varietal: ["Pinot Noir"],
    foodPairing: ["Duck", "Salmon", "Mushroom dishes"]
  },
  {
    id: 12,
    name: "Riesling Kabinett",
    winery: "Dr. Loosen",
    region: "Mosel",
    country: "Germany",
    year: 2021,
    type: "white",
    price: 24.99,
    rating: 4.3,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=600&fit=crop",
    description: "Off-dry Riesling with beautiful balance of fruit and acidity. Notes of peach, apple, and mineral slate.",
    alcohol: 8.5,
    varietal: ["Riesling"],
    foodPairing: ["Spicy Asian cuisine", "Pork", "Fruit desserts"]
  }
];
