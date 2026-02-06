import Link from "next/link";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-semibold tracking-tight text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                Motto Beyoğlu
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ümraniye'de, ihracat fazlası seçili ürünler. Sınırlı
              stok, özel fiyatlar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-foreground">
              Hızlı Bağlantılar
            </h3>
            <div className="space-y-2">
              <div>
                <Link
                  href="/urunler"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ürünler
                </Link>
              </div>
              <div>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hakkımızda
                </Link>
              </div>
              <div>
                <Link
                  href="/iletisim"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-foreground">
              İletişim
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Göksel Sk. No: 4A/A</p>
              <p>Yaman Evler Mah., Ümraniye</p>
              <p>İstanbul 34768</p>
              <p>+90 (534) 824 65 84</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://wa.me/905348246584"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/motto_beyoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Motto Beyoğlu. Tüm hakları saklıdır.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Bu site bir e-ticaret sitesi değildir. Sadece ürün tanıtımı ve
            iletişim yönlendirme amaçlıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}