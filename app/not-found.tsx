import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            404 Hatası
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Sayfa Bulunamadı
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            Ana sayfaya dönerek devam edebilirsiniz.
          </p>
          <Link href="/">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Ana Sayfaya Dön
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
