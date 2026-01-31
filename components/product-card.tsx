import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link
      href={`/urunler/${product.id}`}
      className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300"
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-medium text-foreground group-hover:text-foreground/80 transition-colors text-balance">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-semibold text-foreground">
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}
