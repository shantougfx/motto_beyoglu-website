import HeaderWorking from "@/components/header-working";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWorking />

      <main className="flex-1 py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">Hakkımızda</h1>

          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Motto Beyoğlu olarak, yıllardır İstanbul'un en canlı semtinde
              kaliteli ve uygun fiyatlı ürünleri sizlerle buluşturuyoruz.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Ürünlerimiz, dünyaca ünlü markaların ihracat fazlası
              koleksiyonlarından özenle seçilmektedir. Bu sayede müşterilerimize
              yüksek kaliteli ürünleri çok daha uygun fiyatlarla sunabiliyoruz.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Her bir ürünümüz sınırlı sayıda olup, benzersiz parçalar arayanlar
              için özel bir fırsat sunmaktadır. Mağazamızda sizi ağırlamaktan
              mutluluk duyarız.
            </p>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Mağaza Bilgileri</h2>
              <p className="text-gray-600 mb-2">
                <strong>Adres:</strong> Göksel Sk. No: 4A/A, Yaman Evler Mah., Ümraniye, İstanbul 34768
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Telefon:</strong> 0534 824 65 84
              </p>
              <p className="text-gray-600">
                <strong>Çalışma Saatleri:</strong> Pazartesi - Cumartesi, 10:00 - 20:00
              </p>
            </div>
          </div>
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