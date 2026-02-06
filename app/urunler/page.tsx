"use client";

import { useState } from "react";
import NewHeader from "@/components/new-header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { FloatingContact } from "@/components/floating-contact";
import { products, getAllCategories } from "@/lib/products";

export default function ProductsPage() {
  const categories = getAllCategories();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('default');

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`category-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const sortProducts = (products: any[]) => {
    switch (sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...products].sort((a, b) =>
          new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
        );
      default:
        return products;
    }
  };

  const filteredCategories = selectedCategory
    ? categories.filter(cat => cat === selectedCategory)
    : categories;

  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />

      <main className="flex-1 pt-32 md:pt-24">
        {/* Page Header */}
        <section className="py-6 sm:py-8 md:py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                İhracat fazlası seçili ürünler – sınırlı stok
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid with Sidebar */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Mobile Category Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-medium">Kategoriler</span>
              </button>
            </div>

            <div className="flex gap-6 sm:gap-8">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="bg-white rounded-lg p-6 sticky top-24" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                  <h3 className="text-lg font-semibold text-black mb-6">Kategoriler</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="block w-full py-3 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors cursor-pointer font-bold yeni-sezon-pink text-left"
                    >
                      YENİ SEZON
                    </button>

                    <button
                      onClick={() => handleCategoryClick('Üst Giyim')}
                      className={`flex items-center justify-between w-full py-3 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors cursor-pointer font-medium ${selectedCategory === 'Üst Giyim' ? 'bg-gray-100' : 'text-black'}`}
                    >
                      <span>ÜST GİYİM</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => handleCategoryClick('Alt Giyim')}
                      className={`flex items-center justify-between w-full py-3 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors cursor-pointer font-medium ${selectedCategory === 'Alt Giyim' ? 'bg-gray-100' : 'text-black'}`}
                    >
                      <span>ALT GİYİM</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => handleCategoryClick('Dış Giyim')}
                      className={`flex items-center justify-between w-full py-3 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors cursor-pointer font-medium ${selectedCategory === 'Dış Giyim' ? 'bg-gray-100' : 'text-black'}`}
                    >
                      <span>DIŞ GİYİM</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => scrollToCategory('ELBİSE')}
                      className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer font-medium"
                    >
                      <span>ELBİSE</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Content */}
              <div className="flex-1">
                {/* Category sections */}
                {filteredCategories.map((category) => {
                  const categoryProducts = products.filter(
                    (p) => p.category === category
                  );
                  const sortedProducts = sortProducts(categoryProducts);
                  return (
                    <div key={category} className="mb-12 sm:mb-16 last:mb-0" id={`category-${category}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                          {category}
                        </h2>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                          <div className="relative w-full sm:w-auto">
                            <select
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              className="appearance-none px-3 sm:px-4 py-2 pr-8 border border-gray-300 rounded-lg text-sm bg-white hover:border-gray-400 focus:border-gray-500 focus:outline-none cursor-pointer w-full sm:w-auto"
                            >
                              <option value="default">Varsayılan Sıralama</option>
                              <option value="newest">Yeni Ürünler</option>
                              <option value="price-asc">Fiyat: Artan</option>
                              <option value="price-desc">Fiyat: Azalan</option>
                            </select>
                            <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground bg-gray-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                            {sortedProducts.length} ürün
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {sortedProducts.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50"
                  onClick={() => setSidebarOpen(false)}
                />

                {/* Sidebar */}
                <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-black">Kategoriler</h3>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-4 space-y-2 overflow-y-auto h-full pb-20">
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSidebarOpen(false);
                      }}
                      className="block w-full py-3 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors cursor-pointer font-bold yeni-sezon-pink text-left"
                    >
                      YENİ SEZON
                    </button>

                    <button
                      onClick={() => {
                        handleCategoryClick('Üst Giyim');
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>ÜST GİYİM</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        handleCategoryClick('Alt Giyim');
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>ALT GİYİM</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        handleCategoryClick('Dış Giyim');
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>DIŞ GİYİM</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        scrollToCategory('ELBİSE');
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>ELBİSE</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Info Banner */}
            <section className="py-8 sm:py-12 md:py-16 bg-muted mt-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                    Sipariş Vermek İster misiniz?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
                    Ürünlerimiz hakkında detaylı bilgi almak veya sipariş vermek için
                    WhatsApp veya Instagram üzerinden bizimle iletişime geçebilirsiniz.
                    Size en kısa sürede dönüş yapacağız.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}