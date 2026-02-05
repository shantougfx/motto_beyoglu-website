"use client";

export default function ScrollingBanner() {
    const text = "3500 TL ÜZERİ KARGO BEDAVA" + "\u00A0".repeat(150);

    return (
        <div className="bg-black text-white py-2 overflow-hidden">
            <div className="animate-marquee-fast whitespace-nowrap text-sm font-medium tracking-wider">
                {text.repeat(2)}
            </div>
        </div>
    );
}