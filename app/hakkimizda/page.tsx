import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Heart } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hakkımızda | Motto Beyoğlu",
  description:
    "Motto Beyoğlu - Beyoğlu'nun kalbinde, ihracat fazlası seçili ürünler sunan fiziksel mağazamız hakkında bilgi edinin.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Hakkımızda
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
                  Beyoğlu'nun Kalbinde,
                  <br />
                  <span className="text-muted-foreground">Kaliteli Ürünler</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Motto Beyoğlu olarak, yıllardır İstanbul'un en canlı semtinde
                  kaliteli ve uygun fiyatlı ürünleri sizlerle buluşturuyoruz.
                </p>
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop"
                  alt="Beyoğlu sokakları"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-8 text-center">
                Hikayemiz
              </h2>
              <div className="prose prose-lg text-muted-foreground mx-auto">
                <p className="leading-relaxed mb-6">
                  Motto Beyoğlu, ihracat fazlası kaliteli ürünleri Türk tüketicisiyle
                  buluşturmak amacıyla kurulmuş bir butik mağazadır. Yıllardır
                  Beyoğlu'nun ikonik sokaklarında hizmet veriyoruz.
                </p>
                <p className="leading-relaxed mb-6">
                  Ürünlerimiz, dünyaca ünlü markaların ihracat fazlası
                  koleksiyonlarından özenle seçilmektedir. Bu sayede müşterilerimize
                  yüksek kaliteli ürünleri çok daha uygun fiyatlarla sunabiliyoruz.
                </p>
                <p className="leading-relaxed">
                  Her bir ürünümüz sınırlı sayıda olup, benzersiz parçalar arayanlar
                  için özel bir fırsat sunmaktadır. Mağazamızda sizi ağırlamaktan
                  mutluluk duyarız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-12 text-center">
              Neden Biz?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-background rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Kalite Odaklı
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sadece en kaliteli ihracat fazlası ürünleri seçiyor,
                  müşterilerimize en iyisini sunuyoruz.
                </p>
              </div>
              <div className="text-center p-8 bg-background rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Merkezi Konum
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beyoğlu'nun kalbinde, İstiklal Caddesi üzerinde kolayca
                  ulaşabileceğiniz bir lokasyondayız.
                </p>
              </div>
              <div className="text-center p-8 bg-background rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Sınırlı Stok
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Her ürün sınırlı sayıda. Benzersiz parçalar arayanlar için
                  özel bir fırsat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=800&h=600&fit=crop"
                  alt="Mağaza içi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                  Mağazamızı Ziyaret Edin
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Online dünyada göremeyeceğiniz parçaları yakından incelemek,
                  kumaş kalitesini hissetmek ve size en uygun bedeni bulmak için
                  mağazamıza bekleriz.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Deneyimli ekibimiz, size en uygun ürünleri bulmanızda yardımcı
                  olmaktan mutluluk duyacaktır.
                </p>
                <div className="space-y-4 text-sm text-foreground mb-8">
                  <p>
                    <strong>Adres:</strong> İstiklal Caddesi No: 123, Beyoğlu, İstanbul
                  </p>
                  <p>
                    <strong>Çalışma Saatleri:</strong> Pazartesi - Cumartesi, 10:00 - 20:00
                  </p>
                  <p>
                    <strong>Telefon:</strong> +90 (212) 123 45 67
                  </p>
                </div>
                <Link href="/iletisim">
                  <Button className="gap-2">
                    İletişime Geç
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
