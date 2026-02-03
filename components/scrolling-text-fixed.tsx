export default function ScrollingTextFixed() {
    return (
        <div className="text-white py-3 overflow-hidden whitespace-nowrap font-sans w-full flex items-center justify-center" style={{ backgroundColor: '#EC407A' }}>
            <div
                className="flex animate-marquee"
                style={{
                    animation: 'marquee 30s linear infinite',
                    willChange: 'transform'
                }}
            >
                <span className="text-sm font-semibold px-12 uppercase tracking-wider font-sans flex-shrink-0 whitespace-nowrap">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ
                </span>
                <span className="text-sm font-semibold px-12 uppercase tracking-wider font-sans flex-shrink-0 whitespace-nowrap">
                    HAVALE ÖDEMELERİNDE %5 İNDİRİM
                </span>
                <span className="text-sm font-semibold px-12 uppercase tracking-wider font-sans flex-shrink-0 whitespace-nowrap">
                    KARGO ÜCRETİ 200 TL ALICI ÖDER
                </span>
                <span className="text-sm font-semibold px-12 uppercase tracking-wider font-sans flex-shrink-0 whitespace-nowrap">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ
                </span>
                <span className="text-sm font-semibold px-12 uppercase tracking-wider font-sans flex-shrink-0 whitespace-nowrap">
                    HAVALE ÖDEMELERİNDE %5 İNDİRİM
                </span>
                <span className="text-sm font-semibold px-12 uppercase tracking-wider font-sans flex-shrink-0 whitespace-nowrap">
                    KARGO ÜCRETİ 200 TL ALICI ÖDER
                </span>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { 
                        transform: translate3d(0, 0, 0); 
                    }
                    100% { 
                        transform: translate3d(-50%, 0, 0); 
                    }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite !important;
                }
            `}</style>
        </div>
    );
}