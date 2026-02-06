"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
        if (isRightSwipe && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <div className="flex gap-4">
                {/* Left Thumbnails */}
                {images.length > 1 && (
                    <div className="flex flex-col gap-2 w-20">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImageIndex(index)}
                                className={`aspect-[3/4] relative rounded-md overflow-hidden bg-gray-100 border-2 transition-all duration-200 ${selectedImageIndex === index
                                    ? 'border-black'
                                    : 'border-transparent hover:border-gray-300'
                                    }`}
                            >
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${productName} ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Main Image */}
                <div className="flex-1 relative">
                    <div
                        className="aspect-[3/4] relative rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onClick={openModal}
                    >
                        <Image
                            src={images[selectedImageIndex] || "/placeholder.svg"}
                            alt={productName}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                    disabled={selectedImageIndex === 0}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2.5 rounded-full transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-lg z-10"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    disabled={selectedImageIndex === images.length - 1}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2.5 rounded-full transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-lg z-10"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile Dots */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${index === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Full Screen Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-in fade-in duration-300">
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 transition-colors duration-200 z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Modal Content */}
                    <div className="relative w-full h-full flex items-center justify-center px-20 animate-in zoom-in-95 duration-300">
                        {/* Left Arrow */}
                        {images.length > 1 && selectedImageIndex > 0 && (
                            <button
                                onClick={prevImage}
                                className="absolute left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 transition-all duration-200 z-10 hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}

                        {/* Main Image */}
                        <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                            <Image
                                key={selectedImageIndex}
                                src={images[selectedImageIndex] || "/placeholder.svg"}
                                alt={productName}
                                width={800}
                                height={1000}
                                className="object-contain max-w-full max-h-full transition-all duration-500 ease-out animate-in fade-in slide-in-from-right-4"
                                sizes="(max-width: 1024px) 90vw, 800px"
                                priority
                            />
                        </div>

                        {/* Right Arrow */}
                        {images.length > 1 && selectedImageIndex < images.length - 1 && (
                            <button
                                onClick={nextImage}
                                className="absolute right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 transition-all duration-200 z-10 hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium animate-in slide-in-from-bottom-4 duration-300 delay-150">
                            {selectedImageIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}