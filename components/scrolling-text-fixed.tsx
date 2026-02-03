export default function ScrollingTextFixed() {
    return (
        <div className="text-white py-1 overflow-hidden whitespace-nowrap font-sans w-full" style={{ backgroundColor: '#EC407A' }}>
            <div
                className="flex animate-marquee"
                style={{
                    animation: 'marquee 25s linear infinite',
                    willChange: 'transform'
                }}
            >
                <span className="text-xs font-normal px-2 uppercase tracking-wide font-sans flex-shrink-0 whitespace-nowrap">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ • HAVALE ÖDEMELERİNDE %5 İNDİRİM • KARGO ÜCRETİ 200 TL ALICI ÖDER •
                </span>
                <span className="text-xs font-normal px-2 uppercase tracking-wide font-sans flex-shrink-0 whitespace-nowrap">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ • HAVALE ÖDEMELERİNDE %5 İNDİRİM • KARGO ÜCRETİ 200 TL ALICI ÖDER •
                </span>
                <span className="text-xs font-normal px-2 uppercase tracking-wide font-sans flex-shrink-0 whitespace-nowrap">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ • HAVALE ÖDEMELERİNDE %5 İNDİRİM • KARGO ÜCRETİ 200 TL ALICI ÖDER •
                </span>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { 
                        transform: translate3d(0, 0, 0); 
                    }
                    100% { 
                        transform: translate3d(-33.333%, 0, 0); 
                    }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite !important;
                }
            `}</style>
        </div>
    );
}