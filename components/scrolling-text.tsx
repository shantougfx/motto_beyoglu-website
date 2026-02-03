export default function ScrollingText() {
    return (
        <div className="text-white py-1 overflow-hidden whitespace-nowrap font-sans w-full" style={{ backgroundColor: '#EC407A' }}>
            <div
                className="inline-block whitespace-nowrap"
                style={{
                    animation: 'marquee 45s linear infinite',
                    animationFillMode: 'forwards',
                    transform: 'translateX(100%)'
                }}
            >
                <span className="text-xs font-normal px-8 uppercase tracking-wide font-sans inline-block">
                    🎉 3000 TL ÜZERİ KARGO ÜCRETSİZ! • 💰 HAVALE ÖDEMELERİNDE %5 İNDİRİM! • 📦 KARGO ÜCRETİ 200 TL - ALICI ÖDER • 🎉 3000 TL ÜZERİ KARGO ÜCRETSİZ! • 💰 HAVALE ÖDEMELERİNDE %5 İNDİRİM! • 📦 KARGO ÜCRETİ 200 TL - ALICI ÖDER
                </span>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
}