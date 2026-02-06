import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { FloatingContact } from "@/components/floating-contact";
import ScrollingBanner from "@/components/scrolling-banner";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Categories Section - Hero yerine, responsive padding */}
        <section className="pt-32 pb-8 md:pt-32 md:pb-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Yeni Sezon Banner */}
            <div className="mb-6 sm:mb-8 md:mt-12">
              <Link href="/urunler?kategori=yeni-sezon" className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 aspect-[16/6] sm:aspect-[20/6] block hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop"
                  alt="Yeni Sezon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-white text-black px-8 py-3 rounded-full text-center font-semibold text-lg">
                    YENİ SEZON
                  </div>
                </div>
              </Link>
            </div>

            {/* 2x2 Categories Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Üst Giyim */}
              <Link href="/urunler?kategori=ust-giyim" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop"
                  alt="Üst Giyim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-black text-white px-4 py-2 rounded-full text-center font-medium text-sm">
                    Üst Giyim
                  </div>
                </div>
              </Link>

              {/* Alt Giyim */}
              <Link href="/urunler?kategori=alt-giyim" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop"
                  alt="Alt Giyim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-black text-white px-4 py-2 rounded-full text-center font-medium text-sm">
                    Alt Giyim
                  </div>
                </div>
              </Link>

              {/* Dış Giyim */}
              <Link href="/urunler?kategori=dis-giyim" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop"
                  alt="Dış Giyim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-black text-white px-4 py-2 rounded-full text-center font-medium text-sm">
                    Dış Giyim
                  </div>
                </div>
              </Link>

              {/* Elbise */}
              <Link href="/urunler?kategori=elbise" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop"
                  alt="Elbise"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-black text-white px-4 py-2 rounded-full text-center font-medium text-sm">
                    Elbise
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Scrolling Banner - Kategorilerden sonra */}
        <ScrollingBanner />

        {/* Featured Products */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Koleksiyon
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
                  Öne Çıkan Ürünler
                </h2>
              </div>
              <Link
                href="/urunler"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1"
              >
                Tümünü Gör
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {featuredProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Hikayemiz
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 sm:mb-6">
                  Ümraniye'de Hizmetinizdeyiz
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  Motto Beyoğlu olarak, ihracat fazlası kaliteli ürünleri sizlerle
                  buluşturuyoruz. Fiziksel mağazamızda, özenle seçilmiş parçaları
                  uygun fiyatlarla sunuyoruz.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Her ürün sınırlı stoklu ve özel. Beyoğlu'nun eşsiz atmosferinde,
                  kaliteli alışverişin tadını çıkarın.
                </p>
                <Link href="/hakkimizda">
                  <button className="gap-2 bg-transparent h-10 sm:h-11 text-sm sm:text-base px-4 sm:px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                    Daha Fazla Bilgi
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                    alt="Motto Beyoğlu mağaza"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 bg-background text-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              Sorularınız mı var?
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-4 sm:mb-6">
              WhatsApp veya Instagram üzerinden bize ulaşın.
            </p>
            <Link href="/iletisim">
              <button className="border border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent h-10 px-6 text-sm rounded-lg transition-colors">
                İletişime Geç
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
