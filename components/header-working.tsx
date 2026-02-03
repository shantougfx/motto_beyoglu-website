import Link from "next/link";

export default function HeaderWorking() {
    return (
        <>
            {/* Scrolling Text */}
            <div className="text-white py-1 overflow-hidden whitespace-nowrap font-sans" style={{ backgroundColor: '#EC407A' }}>
                <div className="inline-block animate-pulse">
                    <span className="text-xs font-normal px-12 uppercase tracking-wide">
                        3000 TL ÜZERİ KARGO ÜCRETSİZ! • HAVALE ÖDEMELERİNDE %5 İNDİRİM! • KARGO ÜCRETİ 200 TL
                    </span>
                </div>
            </div>

            {/* Contact Bar - Desktop Only */}
            <div className="hidden md:block bg-gray-50 py-2 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">
                    <div className="flex items-center justify-between text-xs font-normal text-black">
                        <div className="flex items-center gap-3 text-black">
                            <a href="tel:+905348246584" className="flex items-center gap-1 hover:text-black transition-colors">
                                <span className="text-xs">📞 0534 824 65 84</span>
                            </a>
                            <a href="mailto:info@mottobeyoglu.com" className="flex items-center gap-1 hover:text-black transition-colors">
                                <span className="text-xs">✉️ info@mottobeyoglu.com</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-2 text-black">
                            <a href="/iletisim" className="hover:text-black transition-colors text-xs">
                                💬 Yardım
                            </a>
                            <a href="https://instagram.com/motto_beyoglu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors text-xs">
                                📷 Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - Sticky */}
            <header className="bg-white sticky top-0 left-0 right-0 z-50 border-b border-gray-200" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
                    <div className="flex h-14 sm:h-16 lg:h-18 items-center justify-between">
                        {/* Left Side */}
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0 flex-1">
                            <Link href="/" className="flex items-center min-w-0 flex-shrink-0">
                                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Motto</span>
                                <span className="text-lg sm:text-xl lg:text-2xl font-light text-gray-600 ml-1">Beyoğlu</span>
                            </Link>

                            <div className="hidden lg:flex items-center gap-8 ml-8">
                                <Link href="/urunler" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                                    Ürünler
                                </Link>
                                <Link href="/hakkimizda" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                                    Hakkımızda
                                </Link>
                                <Link href="/iletisim" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                                    İletişim
                                </Link>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-2">
                            <Link href="/iletisim" className="flex items-center justify-center w-9 h-9 text-black hover:bg-gray-100 rounded-md transition-all duration-200">
                                <span className="text-sm">💬</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}