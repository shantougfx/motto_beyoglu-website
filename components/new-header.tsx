"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Search, Phone } from "lucide-react";
import ScrollingTextFixed from "./scrolling-text-fixed";

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
            <ScrollingTextFixed />

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
                            <a href="/iletisim" className="hover:text-black transition-colors text-xs">Yardım</a>
                            <a href="https://instagram.com/motto_beyoglu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
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
                                <span className="text-xl font-bold text-black">Motto</span>
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
                                <Search className="h-5 w-5" />
                            </button>

                            {/* Help Button */}
                            <Link href="/iletisim" className="flex items-center justify-center w-8 h-8 text-black hover:bg-gray-100 rounded-md transition-all duration-200">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Categories Sidebar */}
            {categoriesSidebarOpen && (
                <div className="fixed inset-0 z-50">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300"
                        onClick={() => setCategoriesSidebarOpen(false)}
                    />
                    <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out animate-slideInLeft">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-black">Kategoriler</h3>
                            <button onClick={() => setCategoriesSidebarOpen(false)} className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="py-3 px-4 text-sm font-bold text-pink-500 cursor-pointer hover:bg-gray-50 rounded transition-colors">YENİ SEZON</div>

                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded transition-colors flex items-center justify-between">
                                <span>ÜST GİYİM</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded transition-colors flex items-center justify-between">
                                <span>ALT GİYİM</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded transition-colors flex items-center justify-between">
                                <span>DIŞ GİYİM</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <div className="py-3 px-4 text-sm text-black cursor-pointer hover:bg-gray-50 rounded transition-colors flex items-center justify-between">
                                <span>ELBİSE</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
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
                            placeholder="Ürün ara..."
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
<style jsx>{`
                @keyframes slideInLeft {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.3s ease-out;
                }
            `}</style>