import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { FloatingContact } from "@/components/floating-contact";
import { products, getAllCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ürünler | Motto Beyoğlu",
  description:
    "İhracat fazlası seçili ürünler. Sınırlı stok, özel fiyatlar. Beyoğlu'nun kalbinden kaliteli parçalar.",
};

export default function ProductsPage() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
                Tüm Ürünler
              </h1>
              <p className="mt-4 text-muted-foreground">
                İhracat fazlası seçili ürünler – sınırlı stok
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category sections */}
            {categories.map((category) => {
              const categoryProducts = products.filter(
                (p) => p.category === category
              );
              return (
                <div key={category} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                      {category}
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-sm text-muted-foreground">
                      {categoryProducts.length} ürün
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-12 sm:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4">
                Sipariş Vermek İster misiniz?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ürünlerimiz hakkında detaylı bilgi almak veya sipariş vermek için
                WhatsApp veya Instagram üzerinden bizimle iletişime geçebilirsiniz.
                Size en kısa sürede dönüş yapacağız.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
