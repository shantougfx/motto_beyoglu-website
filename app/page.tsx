import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { FloatingContact } from "@/components/floating-contact";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight text-balance">
                Seçili Ürünler,
                <br />
                <span className="text-muted-foreground">Özel Fiyatlar</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                İhracat fazlası seçili ürünler – sınırlı stok.
                Beyoğlu'nun kalbinden, kaliteli parçalar.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/urunler">
                  <Button size="lg" className="gap-2 px-8">
                    Ürünleri Keşfet
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/iletisim">
                  <Button variant="outline" size="lg" className="px-8 bg-transparent">
                    İletişime Geç
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-muted/50 blur-3xl" />
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Koleksiyon
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Hikayemiz
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                  Beyoğlu'nun Kalbinde
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Motto Beyoğlu olarak, ihracat fazlası kaliteli ürünleri sizlerle
                  buluşturuyoruz. Fiziksel mağazamızda, özenle seçilmiş parçaları
                  uygun fiyatlarla sunuyoruz.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Her ürün sınırlı stoklu ve özel. Beyoğlu'nun eşsiz atmosferinde,
                  kaliteli alışverişin tadını çıkarın.
                </p>
                <Link href="/hakkimizda">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    Daha Fazla Bilgi
                    <ArrowRight className="h-4 w-4" />
                  </Button>
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
        <section className="py-16 sm:py-24 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
              Sorularınız mı var?
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              WhatsApp veya Instagram üzerinden bize ulaşın.
              Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <Link href="/iletisim">
              <Button
                size="lg"
                variant="outline"
                className="border-background text-background hover:bg-background hover:text-foreground bg-transparent"
              >
                İletişime Geç
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
