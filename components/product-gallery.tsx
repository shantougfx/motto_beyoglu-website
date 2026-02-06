"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);
    const selectedImage = images[selectedImageIndex];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

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

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative">
                <div
                    className="aspect-[3/4] relative rounded-lg overflow-hidden bg-muted cursor-zoom-in touch-pan-y"
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <Image
                        src={selectedImage || "/placeholder.svg"}
                        alt={productName}
                        fill
                        className={`object-cover transition-transform duration-200 ease-out ${isZoomed ? 'scale-150' : 'scale-100'
                            }`}
                        style={{
                            transformOrigin: isZoomed ? `${mousePosition.x}% ${mousePosition.y}%` : 'center'
                        }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </div>

                {/* Navigation Arrows - Desktop Only */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            disabled={selectedImageIndex === 0}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex items-center justify-center"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            disabled={selectedImageIndex === images.length - 1}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex items-center justify-center"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Swipe Indicator - Mobile Only */}
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

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`aspect-square relative rounded-md overflow-hidden bg-muted border-2 transition-colors ${selectedImageIndex === index
                                ? 'border-black'
                                : 'border-transparent hover:border-gray-300'
                                }`}
                        >
                            <Image
                                src={image || "/placeholder.svg"}
                                alt={`${productName} ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="150px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}