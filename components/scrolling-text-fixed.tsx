"use client";

import { useRouter } from 'next/navigation';

export default function ScrollingTextFixed() {
    const router = useRouter();

    const handleStoreClick = () => {
        // Navigate to contact page where store information is displayed
        router.push('/iletisim');
    };

    return (
        <div className="text-white py-3 w-full flex items-center justify-center px-4 lg:px-6" style={{ backgroundColor: '#000000', fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            <span className="text-xs tracking-wider text-center" style={{ fontWeight: '600', letterSpacing: '0.15em' }}>
                3500 TL üzeri Ücretsiz Kargo
            </span>

            <div className="absolute right-4 lg:right-6 flex items-center gap-4 flex-shrink-0">
                <button
                    onClick={handleStoreClick}
                    className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap"
                    style={{ fontWeight: '300', letterSpacing: '0.1em' }}
                >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="hidden sm:inline">Mağazamız</span>
                    <span className="sm:hidden">Mağaza</span>
                </button>
            </div>
        </div>
    );
}