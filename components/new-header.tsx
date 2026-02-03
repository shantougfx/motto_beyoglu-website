"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Search, Phone } from "lucide-react";
import ScrollingText from "./scrolling-text";

const navigation = [
    { name: "Ürünler", href: "/urunler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
];

export default function NewHeader() {
    const [categoriesSidebarOpen, setCategoriesSidebarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <ScrollingText />

            {/* Contact Bar - Desktop Only */}
            <div className="hidden md:block bg-gray-50 py-2 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">
                    <div className="flex items-center justify-between text-xs font-normal text-black">
                        <div className="flex items-center gap-3 text-black">
                            <a href="tel:+905348246584" className="flex items-center gap-1 hover:text-black transition-colors">
                                <Phone className="h-3 w-3" />
                                <span className="text-xs">0534 824 65 84</span>
                            </a>
                            <a href="mailto:info@mottobeyoglu.com" className="flex items-center gap-1 hover:text-black transition-colors">
                                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="text-xs">info@mottobeyoglu.com</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                            <a href="/iletisim" className="hover:text-black transition-colors text-xs">🔧 Yardım</a>
                            <a href="https://instagram.com/motto_beyoglu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                                📷 Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">
                    <div className="flex h-16 items-center justify-between">
                        {/* Left Side - Hamburger + Logo */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setCategoriesSidebarOpen(true)}
                                className="flex items-center justify-center w-8 h-8 text-black hover:bg-gray-100 rounded-md transition-all duration-200"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <Link href="/" className="flex items-center">
                                <span className="text-xl font-bold text-black">🏪 Motto</span>
                                <span className="text-xl font-light text-gray-600 ml-1">Beyoğlu</span>
                            </Link>

                            <div className="hidden lg:flex items-center gap-8 ml-8">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Search + Help */}
                        <div className="flex items-center gap-2">
                            {/* Search Button */}
                            <button
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="flex items-center justify-center w-8 h-8 text-black hover:bg-gray-100 rounded-md transition-all duration-200"
                            >
                                🔍
                            </button>

                            {/* Help Button */}
                            <Link href="/iletisim" className="flex items-center justify-center w-8 h-8 text-black hover:bg-gray-100 rounded-md transition-all duration-200">
                                💬
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Categories Sidebar */}
            {categoriesSidebarOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setCategoriesSidebarOpen(false)} />
                    <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-black">📂 Kategoriler</h3>
                            <button onClick={() => setCategoriesSidebarOpen(false)} className="p-2 hover:bg-gray-200 rounded-lg">
                                ❌
                            </button>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="py-3 px-4 text-sm font-bold text-pink-500 cursor-pointer">✨ YENİ SEZON</div>
                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded">👕 ÜST GİYİM</div>
                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded">👖 ALT GİYİM</div>
                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded">🧥 DIŞ GİYİM</div>
                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded">👗 ELBİSE</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Overlay */}
            {searchOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setSearchOpen(false)}>
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="text"
                            placeholder="🔍 Ürün ara..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none"
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </>
    );
}