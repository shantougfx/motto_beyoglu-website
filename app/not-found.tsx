import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NewHeader from "@/components/new-header";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            404 Hatası
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-4">
            Sayfa Bulunamadı
          </h1>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            Ana sayfaya dönerek devam edebilirsiniz.
          </p>
          <Link href="/">
            <button className="gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center mx-auto">
              <ArrowLeft className="h-4 w-4" />
              Ana Sayfaya Dön
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm">© 2024 Motto Beyoğlu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}