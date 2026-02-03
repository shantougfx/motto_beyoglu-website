"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Search, Phone } from "lucide-react";
import { ScrollingText } from "./scrolling-text";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const navigation = [
    { name: "Ürünler", href: "/urunler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
];

export function Header() {
    const [categoriesSidebarOpen, setCategoriesSidebarOpen] = useState(false);
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
    const [showSubcategoryView, setShowSubcategoryView] = useState(false);

    return (
        <>
            <ScrollingText />
            {/* Contact Bar - Mobile Responsive */}
            <div className="bg-gray-50 py-2 sm:py-3 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between text-xs font-normal text-black leading-none">
                        {/* Mobile Contact - Show only phone and Instagram */}
                        <div className="flex items-center gap-3 text-black md:hidden">
                            <a href="tel:+902163286128" className="flex items-center gap-1 hover:text-black transition-colors cursor-pointer text-black">
                                <Phone className="h-3 w-3 text-black" />
                                <span className="text-black text-xs">0216 328 61 28</span>
                            </a>
                            <a href="https://instagram.com/motto_beyoglu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors text-black">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>

                        {/* Desktop Contact - Show all items */}
                        <div className="hidden md:flex items-center gap-4 sm:gap-6 text-black">
                            <a href="tel:+902163286128" className="flex items-center gap-1 sm:gap-2 hover:text-black transition-colors cursor-pointer text-black">
                                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                                <span className="text-black text-xs">0216 328 61 28</span>
                            </a>
                            <a
                                href="mailto:info@mottobeyoglu.com"
                                onClick={(e) => {
                                    if (window.innerWidth <= 768) {
                                        return;
                                    } else {
                                        e.preventDefault();
                                        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@mottobeyoglu.com', '_blank');
                                    }
                                }}
                                className="flex items-center gap-1 sm:gap-2 hover:text-black transition-colors cursor-pointer text-black"
                            >
                                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="text-black text-xs">info@mottobeyoglu.com</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-4 text-black">
                            <a
                                href="https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cac8f0ad361bfb:0xe4c7d6331f5cd545"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const userAgent = navigator.userAgent;
                                    if (/iPhone|iPad|iPod/.test(userAgent)) {
                                        window.open('comgooglemaps://?q=Motto+Beyoğlu+Alemdar+Sokak+Ümraniye', '_blank');
                                        setTimeout(() => {
                                            window.open('maps://?q=Motto+Beyoğlu+Alemdar+Sokak+Göksel+Sk+4A/A+Ümraniye+İstanbul', '_blank');
                                        }, 500);
                                    } else {
                                        window.open('https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cac8f0ad361bfb:0xe4c7d6331f5cd545', '_blank');
                                    }
                                }}
                                className="hidden md:flex items-center gap-1 hover:text-black transition-colors cursor-pointer text-black"
                            >
                                <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-black">Mağaza</span>
                            </a>
                            <a href="/iletisim" className="hidden md:block hover:text-black transition-colors cursor-pointer text-black">Yardım ve İletişim</a>
                            <div className="hidden md:flex items-center gap-3 ml-4">
                                <a href="https://instagram.com/motto_beyoglu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors text-black">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white sticky top-0 z-50 border-b border-gray-100" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                    <div className="flex h-14 sm:h-16 lg:h-18 items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 min-w-0 flex-shrink-0">
                            {/* Categories Button - Left Side */}
                            <button
                                onClick={() => setCategoriesSidebarOpen(true)}
                                className="flex items-center justify-center p-1.5 sm:p-2 lg:p-3 text-black hover:bg-gray-50 rounded-md transition-all duration-200 cursor-pointer"
                            >
                                <svg className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <Link href="/" className="flex items-center min-w-0">
                                <span className="text-lg sm:text-xl lg:text-3xl font-bold text-black truncate">Motto</span>
                                <span className="text-lg sm:text-xl lg:text-3xl font-light text-gray-600 ml-0.5 sm:ml-1 truncate">Beyoğlu</span>
                            </Link>

                            {/* Desktop Navigation Links */}
                            <div className="hidden lg:flex items-center gap-8 ml-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="hover-underline cursor-pointer text-sm font-medium text-black hover:text-black transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Search */}
                        <div className="w-60 sm:w-80 mx-4 sm:mx-8 hidden md:block">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Ürün ara..."
                                    className="w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2 border border-gray-300 rounded-full focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-xs sm:text-sm bg-gray-50"
                                />
                                <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gray-800 hover:bg-black text-white p-0">
                                    <Search className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Categories Sidebar */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${categoriesSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black/30 transition-opacity duration-300"
                    onClick={() => {
                        setCategoriesSidebarOpen(false);
                        setShowSubcategoryView(false);
                    }}
                />

                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${categoriesSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-black">Kategoriler</h3>
                        <button
                            onClick={() => {
                                setCategoriesSidebarOpen(false);
                                setShowSubcategoryView(false);
                            }}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="relative p-4 space-y-2 overflow-y-auto h-full pb-20">
                        {!showSubcategoryView ? (
                            <div className={`transition-all duration-300 ease-in-out ${!showSubcategoryView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                                <div
                                    onClick={() => setCategoriesSidebarOpen(false)}
                                    className="block py-3 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors cursor-pointer font-bold yeni-sezon-pink"
                                >
                                    YENİ SEZON
                                </div>

                                <button
                                    onClick={() => {
                                        setActiveSubcategory('ust-giyim');
                                        setShowSubcategoryView(true);
                                    }}
                                    className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                >
                                    <span>ÜST GİYİM</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => {
                                        setActiveSubcategory('alt-giyim');
                                        setShowSubcategoryView(true);
                                    }}
                                    className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                >
                                    <span>ALT GİYİM</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => {
                                        setActiveSubcategory('dis-giyim');
                                        setShowSubcategoryView(true);
                                    }}
                                    className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                >
                                    <span>DIŞ GİYİM</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => {
                                        setActiveSubcategory('elbise');
                                        setShowSubcategoryView(true);
                                    }}
                                    className="flex items-center justify-between w-full py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                >
                                    <span>ELBİSE</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Navigation Links for Mobile */}
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">Sayfalar</h4>
                                    <div className="space-y-1">
                                        <Link
                                            href="/"
                                            onClick={() => setCategoriesSidebarOpen(false)}
                                            className="flex items-center px-4 py-3 text-sm font-medium text-black hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            Anasayfa
                                        </Link>
                                        <Link
                                            href="/urunler"
                                            onClick={() => setCategoriesSidebarOpen(false)}
                                            className="flex items-center px-4 py-3 text-sm font-medium text-black hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            Ürünler
                                        </Link>
                                        <Link
                                            href="/hakkimizda"
                                            onClick={() => setCategoriesSidebarOpen(false)}
                                            className="flex items-center px-4 py-3 text-sm font-medium text-black hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            Hakkımızda
                                        </Link>
                                        <Link
                                            href="/iletisim"
                                            onClick={() => setCategoriesSidebarOpen(false)}
                                            className="flex items-center px-4 py-3 text-sm font-medium text-black hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            İletişim
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`absolute inset-0 p-4 transition-all duration-300 ease-in-out ${showSubcategoryView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                                {/* Geri Butonu */}
                                <button
                                    onClick={() => setShowSubcategoryView(false)}
                                    className="flex items-center gap-3 py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer mb-4"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    <span className="font-medium">Geri</span>
                                </button>

                                {/* Alt Kategoriler */}
                                {activeSubcategory === 'ust-giyim' && (
                                    <div className="space-y-2 animate-fadeIn">
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Gömlek</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Bluz</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">T-shirt</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Sweatshirt</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Takım</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Hırka</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Tulum</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Kazak</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Yelek</div>
                                    </div>
                                )}

                                {activeSubcategory === 'alt-giyim' && (
                                    <div className="space-y-2 animate-fadeIn">
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Etek</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Şort</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Pantolon</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Jean</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Eşofman Altı</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Tayt</div>
                                    </div>
                                )}

                                {activeSubcategory === 'dis-giyim' && (
                                    <div className="space-y-2 animate-fadeIn">
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Trençkot</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Ceket</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Mont</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Kaban</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Yelek</div>
                                    </div>
                                )}

                                {activeSubcategory === 'elbise' && (
                                    <div className="space-y-2 animate-fadeIn">
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Günlük Elbise</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Abiye Elbise</div>
                                        <div onClick={() => setCategoriesSidebarOpen(false)} className="block py-3 px-4 text-sm text-black hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Yazlık Elbise</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}