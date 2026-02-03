import Link from "next/link";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Motto Beyoğlu
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xs">
              Ümraniye'de, ihracat fazlası seçili ürünler. Sınırlı
              stok, özel fiyatlar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h3>
            <div className="space-y-3">
              <div>
                <Link
                  href="/urunler"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Ürünler
                </Link>
              </div>
              <div>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Hakkımızda
                </Link>
              </div>
              <div>
                <Link
                  href="/iletisim"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Göksel Sk. No: 4A/A</p>
              <p>Yaman Evler Mah., Ümraniye</p>
              <p>İstanbul 34768</p>
              <p>+90 (534) 824 65 84</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://wa.me/905348246584"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/motto_beyoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Motto Beyoğlu. Tüm hakları saklıdır.
          </p>
          <p className="text-center text-xs text-gray-500 mt-2">
            Bu site bir e-ticaret sitesi değildir. Sadece ürün tanıtımı ve
            iletişim yönlendirme amaçlıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}