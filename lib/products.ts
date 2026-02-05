export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  createdAt?: string;
  gallery?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "ZARA İŞLEME BOMBER CEKET",
    price: 1500,
    description:
      "ZARA marka işlemeli bomber ceket. Geniş kollu, rahat kesim ve şık tasarımı ile günlük kullanım için ideal. Kaliteli kumaş ve detaylı işçilik.",
    image: "/zarabombermain.jpeg",
    category: "Üst Giyim",
    featured: true,
    createdAt: "2024-02-15",
    gallery: [
      "/zarabombermain.jpeg",
      "/zarabomber2.jpeg",
      "/zarabomber3.jpeg"
    ]
  },
  {
    id: "2",
    name: "Keten Karışımlı Gömlek",
    price: 849,
    description:
      "İtalyan keten karışımlı, rahat kesim yazlık gömlek. Nefes alan kumaşı ile yaz aylarının vazgeçilmezi.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    category: "Üst Giyim",
    featured: true,
    createdAt: "2024-01-15",
  },
  {
    id: "3",
    name: "Premium Denim Pantolon",
    price: 1249,
    description:
      "Japon denim kumaştan üretilmiş, slim fit kesim pantolon. Dayanıklı ve şık.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
    category: "Alt Giyim",
    featured: true,
    createdAt: "2024-01-20",
  },
  {
    id: "4",
    name: "Örme Triko Kazak",
    price: 749,
    description:
      "Yumuşak pamuk karışımlı triko kazak. Minimal tasarımı ile her kombine uyum sağlar.",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    category: "Üst Giyim",
    featured: true,
    createdAt: "2024-02-01",
  },
  {
    id: "13",
    name: "ZARA İŞLEME BOMBER CEKET",
    price: 1899,
    description:
      "ZARA marka işlemeli bomber ceket. Modern kesim ve kaliteli detaylar.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    category: "Dış Giyim",
    featured: true,
    createdAt: "2024-01-10",
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
    createdAt: "2024-02-10",
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
    createdAt: "2024-01-25",
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
    createdAt: "2024-02-05",
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
    createdAt: "2024-01-30",
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
    createdAt: "2024-01-05",
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
    createdAt: "2024-02-08",
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
    createdAt: "2024-01-18",
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
    createdAt: "2024-02-12",
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
