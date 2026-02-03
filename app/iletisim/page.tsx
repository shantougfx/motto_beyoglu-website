"use client";

import { ChevronDown } from "lucide-react";
import HeaderWorking from "@/components/header-working";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Nasıl sipariş verebilirim?",
    answer: "Sipariş vermek için WhatsApp (0534 824 65 84) veya Instagram (@motto_beyoglu) üzerinden bizimle iletişime geçebilirsiniz. Beğendiğiniz ürünün fotoğrafını gönderin, size stok durumu ve fiyat bilgisini iletelim."
  },
  {
    question: "Kargo ücreti ne kadar?",
    answer: (
      <>
        Kargo ücreti 200 TL'dir ve alıcı tarafından ödenir.
        <br />
        Ancak 3000 TL ve üzeri alışverişlerde kargo ücretsizdir.
      </>
    )
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Havale/EFT, kredi kartı ve kapıda ödeme seçeneklerimiz bulunmaktadır. Havale ödemelerinde %5 indirim uygulanmaktadır."
  },
  {
    question: "Ürünler orijinal mi?",
    answer: "Evet, tüm ürünlerimiz %100 orijinal ve garantilidir. İhracat fazlası kaliteli parçalar sunuyoruz."
  },
  {
    question: "İade ve değişim politikanız nedir?",
    answer: "Ürün teslim alındıktan sonra 14 gün içinde, etiketli ve kullanılmamış durumda iade/değişim yapabilirsiniz. İade kargo ücreti müşteriye aittir."
  },
  {
    question: "Kargo ne kadar sürede teslim edilir?",
    answer: "Siparişiniz 1-2 iş günü içinde kargoya verilir. Kargo teslimat süresi bulunduğunuz ile göre 1-3 iş günü arasında değişmektedir."
  },
  {
    question: "Beden tablosu var mı?",
    answer: "Her ürün için detaylı beden bilgileri WhatsApp üzerinden paylaşılmaktadır. Sipariş vermeden önce beden konusunda emin olmak için bizimle iletişime geçin."
  },
  {
    question: "Stok durumunu nasıl öğrenebilirim?",
    answer: "Stok durumu sürekli değiştiği için güncel bilgi almak için WhatsApp veya Instagram üzerinden bizimle iletişime geçmenizi öneririz."
  },
  {
    question: "Toptan satış yapıyor musunuz?",
    answer: "Evet, toptan satış da yapmaktayız. Toptan alım için özel fiyatlarımız bulunmaktadır. Detaylı bilgi için iletişime geçin."
  },
  {
    question: "Mağazanız var mı?",
    answer: "Evet, Ümraniye'de fiziksel mağazamız bulunmaktadır. Adres: Alemdar Sokak, Yaman Evler Mahallesi, Göksel Sk. no 4A/A, 34768 Ümraniye/İstanbul. Çalışma saatleri: Pazartesi-Cumartesi 10:00-20:30, Pazar 12:00-20:00."
  }
];

export default function HelpContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWorking />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 sm:py-24 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                Yardım ve İletişim
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sıkça sorulan sorular ve bizimle iletişim kurma yolları.
                Aradığınız cevabı bulamazsanız bize ulaşmaktan çekinmeyin.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600">
                En çok merak edilen konular hakkında detaylı bilgiler
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-left font-semibold text-black hover:text-gray-700 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-gray-600">
                Sorunuz cevaplandırılmadı mı? Size yardımcı olmaktan mutluluk duyarız.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/905348246584?text=Merhaba%2C%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-green-500 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-green-600 transition-colors">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-gray-600">
                    0534 824 65 84
                  </p>
                  <p className="text-xs text-gray-500">
                    Hızlı yanıt için tıklayın
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/motto_beyoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-pink-500 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition-colors">
                    Instagram
                  </h3>
                  <p className="text-sm text-gray-600">
                    @motto_beyoglu
                  </p>
                  <p className="text-xs text-gray-500">
                    Takip edin ve DM gönderin
                  </p>
                </div>
              </a>
            </div>

            {/* Store Info */}
            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-black mb-4">Mağaza Bilgileri</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-black mb-1">Adres:</p>
                  <a
                    href="https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cac8f0ad361bfb:0xe4c7d6331f5cd545"
                    onClick={(e) => {
                      e.preventDefault();
                      const userAgent = navigator.userAgent;
                      if (/iPhone|iPad|iPod/.test(userAgent)) {
                        // iOS - önce Google Maps dene, yoksa Apple Maps
                        window.open('comgooglemaps://?q=Motto+Beyoğlu+Alemdar+Sokak+Ümraniye', '_blank');
                        setTimeout(() => {
                          window.open('maps://?q=Motto+Beyoğlu+Alemdar+Sokak+Göksel+Sk+4A/A+Ümraniye+İstanbul', '_blank');
                        }, 500);
                      } else {
                        // Android ve PC - Google Maps
                        window.open('https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cac8f0ad361bfb:0xe4c7d6331f5cd545', '_blank');
                      }
                    }}
                    className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    Alemdar Sokak, Yaman Evler Mahallesi<br />Göksel Sk. no 4A/A<br />34768 Ümraniye/İstanbul
                  </a>
                  <div className="mt-4">
                    <p className="font-medium text-black mb-1">Telefon:</p>
                    <a href="tel:+902163286128" className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
                      0216 328 61 28
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-black mb-1">Çalışma Saatleri:</p>
                  <p>Pazartesi - Cumartesi: 10:00 - 20:30<br />Pazar: 12:00 - 20:00</p>
                </div>
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