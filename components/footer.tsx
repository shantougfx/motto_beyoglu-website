import Link from "next/link";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Motto Beyoğlu
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-xs">
              Ümraniye'de, ihracat fazlası seçili ürünler. Sınırlı
              stok, özel fiyatlar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/urunler"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <div className="space-y-3 text-sm text-background/70">
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
                className="text-background/70 hover:text-background transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/motto_beyoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-xs text-background/50">
            © {new Date().getFullYear()} Motto Beyoğlu. Tüm hakları saklıdır.
          </p>
          <p className="text-center text-xs text-background/40 mt-2">
            Bu site bir e-ticaret sitesi değildir. Sadece ürün tanıtımı ve
            iletişim yönlendirme amaçlıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
