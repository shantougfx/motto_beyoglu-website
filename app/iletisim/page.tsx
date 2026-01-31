import type { Metadata } from "next";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "İletişim | Motto Beyoğlu",
  description:
    "Motto Beyoğlu ile iletişime geçin. WhatsApp, Instagram veya telefon ile bize ulaşabilirsiniz.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
                İletişim
              </h1>
              <p className="text-lg text-muted-foreground">
                Sorularınız için bizimle iletişime geçmekten çekinmeyin.
                Size yardımcı olmaktan mutluluk duyarız.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Methods */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-8">
                  Bize Ulaşın
                </h2>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/902121234567?text=Merhaba%2C%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-[#25D366] transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                      <WhatsAppIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-[#25D366] transition-colors">
                        WhatsApp
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Hızlı iletişim için tıklayın
                      </p>
                    </div>
                    <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                      Mesaj Gönder
                    </Button>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/mottobeyoglu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-[#E4405F] transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-[#E4405F] transition-colors">
                        Instagram
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        @mottobeyoglu
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white">
                      Takip Et
                    </Button>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+902121234567"
                    className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-foreground/30 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                      <Phone className="h-6 w-6 text-background" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Telefon</h3>
                      <p className="text-sm text-muted-foreground">
                        +90 (212) 123 45 67
                      </p>
                    </div>
                    <Button variant="outline">Ara</Button>
                  </a>
                </div>
              </div>

              {/* Store Info */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-8">
                  Mağaza Bilgileri
                </h2>

                <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Adres
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          İstiklal Caddesi No: 123
                          <br />
                          Beyoğlu, İstanbul 34430
                          <br />
                          Türkiye
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Clock className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Çalışma Saatleri
                        </h3>
                        <div className="text-muted-foreground text-sm space-y-1">
                          <p>Pazartesi - Cuma: 10:00 - 20:00</p>
                          <p>Cumartesi: 10:00 - 21:00</p>
                          <p>Pazar: 12:00 - 19:00</p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Phone className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Telefon
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          +90 (212) 123 45 67
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0984426894!2d28.97468!3d41.03283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab764d3d2c4f7%3A0xb5b8c8c8c8c8c8c8!2sIstiklal%20Caddesi%2C%20Beyoglu%2FIstanbul!5e0!3m2!1sen!2str!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Motto Beyoğlu Konum"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="py-12 sm:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground">
                <strong>Not:</strong> Bu site bir e-ticaret sitesi değildir. Online
                ödeme, sepet veya satın alma özellikleri bulunmamaktadır. Sipariş
                vermek için WhatsApp veya Instagram üzerinden bizimle iletişime
                geçmeniz gerekmektedir.
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
