export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Keten Karışımlı Gömlek",
    price: 849,
    description:
      "İtalyan keten karışımlı, rahat kesim yazlık gömlek. Nefes alan kumaşı ile yaz aylarının vazgeçilmezi.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    category: "Üst Giyim",
    featured: true,
  },
  {
    id: "2",
    name: "Premium Denim Pantolon",
    price: 1249,
    description:
      "Japon denim kumaştan üretilmiş, slim fit kesim pantolon. Dayanıklı ve şık.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
    category: "Alt Giyim",
    featured: true,
  },
  {
    id: "3",
    name: "Örme Triko Kazak",
    price: 749,
    description:
      "Yumuşak pamuk karışımlı triko kazak. Minimal tasarımı ile her kombine uyum sağlar.",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    category: "Üst Giyim",
    featured: true,
  },
  {
    id: "4",
    name: "Blazer Ceket",
    price: 1899,
    description:
      "İtalyan kesim, yarı astarlı yazlık blazer. Hem şık hem rahat.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    category: "Dış Giyim",
    featured: true,
  },
  {
    id: "5",
    name: "Pamuklu T-Shirt",
    price: 349,
    description:
      "Organik pamuktan üretilmiş, regular fit t-shirt. Günlük kullanım için ideal.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    category: "Üst Giyim",
    featured: true,
  },
  {
    id: "6",
    name: "Chino Pantolon",
    price: 699,
    description:
      "Esnek kumaşlı, rahat kesim chino pantolon. Her mevsim giyilebilir.",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
    category: "Alt Giyim",
    featured: true,
  },
  {
    id: "7",
    name: "Keten Şort",
    price: 449,
    description:
      "Saf keten kumaştan, rahat kesim yazlık şort. Sıcak günlerin favorisi.",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop",
    category: "Alt Giyim",
  },
  {
    id: "8",
    name: "Polo Yaka T-Shirt",
    price: 449,
    description:
      "Pike kumaştan, klasik kesim polo yaka. Zarif ve spor bir görünüm.",
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop",
    category: "Üst Giyim",
  },
  {
    id: "9",
    name: "Yün Karışımlı Palto",
    price: 2499,
    description:
      "Yün karışımlı, klasik kesim kış paltosu. Zamansız bir parça.",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
    category: "Dış Giyim",
  },
  {
    id: "10",
    name: "Oxford Gömlek",
    price: 599,
    description:
      "Klasik oxford kumaştan, düğmeli yaka gömlek. Her gardırobun olmazsa olmazı.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
    category: "Üst Giyim",
  },
  {
    id: "11",
    name: "Jogger Pantolon",
    price: 549,
    description:
      "Premium pamuklu, modern kesim jogger. Hem rahat hem şık.",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop",
    category: "Alt Giyim",
  },
  {
    id: "12",
    name: "Deri Ceket",
    price: 3499,
    description:
      "Hakiki kuzu derisinden, klasik biker kesim ceket. Kaliteli işçilik.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    category: "Dış Giyim",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(products.map((product) => product.category))];
}
