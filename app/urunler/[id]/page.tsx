import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import NewHeader from "@/components/new-header";
import { Footer } from "@/components/footer";
import { ContactButtons } from "@/components/contact-buttons";
import { ProductCard } from "@/components/product-card";
import { FloatingContact } from "@/components/floating-contact";
import { ProductGallery } from "@/components/product-gallery";
import { getProductById, products } from "@/lib/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | Motto Beyoğlu",
    };
  }

  return {
    title: `${product.name} | Motto Beyoğlu`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const images = product.gallery || [product.image];

  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />

      <main className="flex-1 pt-32 md:pt-24">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Tüm Ürünler
            </Link>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Product Images */}
              <ProductGallery images={images} productName={product.name} />

              {/* Product Info */}
              <div className="flex flex-col">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 sm:mb-6">
                    {formattedPrice}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                    {product.description}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-muted rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base text-foreground font-medium mb-2">
                    Bu ürünü satın almak ister misiniz?
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                    Sipariş ve detaylı bilgi için bizimle WhatsApp veya Instagram
                    üzerinden iletişime geçebilirsiniz.
                  </p>
                  <ContactButtons
                    productName={product.name}
                    variant="large"
                  />
                </div>

                {/* Additional Info */}
                <div className="border-t border-border pt-4 sm:pt-6 mt-auto">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-muted-foreground">Stok Durumu</p>
                      <p className="font-medium text-foreground">Sınırlı Stok</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Teslimat</p>
                      <p className="font-medium text-foreground">Mağazadan Teslim</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-8 sm:py-12 md:py-16 bg-card border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
                Benzer Ürünler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}