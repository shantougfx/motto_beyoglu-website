"use client";

import { useEffect, useState } from "react";

export default function ScrollingBanner() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    const text = "3000 TL ve Üzeri Alışverişlerde Kargo Bedava!" + "\u00A0".repeat(isMobile ? 30 : 60);

    return (
        <div className="bg-black text-white py-2 overflow-hidden">
            <div
                className="whitespace-nowrap font-medium tracking-wider"
                style={{
                    display: 'inline-block',
                    animation: isMobile ? 'marquee-mobile 15s linear infinite' : 'marquee-fast 25s linear infinite',
                    fontSize: isMobile ? '12px' : '14px'
                }}
            >
                {text.repeat(10)}
            </div>
        </div>
    );
}