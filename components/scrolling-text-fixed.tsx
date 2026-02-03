export default function ScrollingTextFixed() {
    return (
        <div className="text-white py-1 overflow-hidden whitespace-nowrap font-sans w-full" style={{ backgroundColor: '#EC407A' }}>
            <div
                className="flex animate-marquee"
                style={{
                    animation: 'marquee 20s linear infinite'
                }}
            >
                <span className="text-xs font-normal px-3 uppercase tracking-wide font-sans flex-shrink-0">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ! • HAVALE ÖDEMELERİNDE %5 İNDİRİM! • KARGO ÜCRETİ 200 TL - ALICI ÖDER
                </span>
                <span className="text-xs font-normal px-3 uppercase tracking-wide font-sans flex-shrink-0">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ! • HAVALE ÖDEMELERİNDE %5 İNDİRİM! • KARGO ÜCRETİ 200 TL - ALICI ÖDER
                </span>
                <span className="text-xs font-normal px-3 uppercase tracking-wide font-sans flex-shrink-0">
                    3000 TL ÜZERİ KARGO ÜCRETSİZ! • HAVALE ÖDEMELERİNDE %5 İNDİRİM! • KARGO ÜCRETİ 200 TL - ALICI ÖDER
                </span>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { 
                        transform: translateX(0); 
                    }
                    100% { 
                        transform: translateX(-33.333%); 
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite !important;
                }
            `}</style>
        </div>
    );
}