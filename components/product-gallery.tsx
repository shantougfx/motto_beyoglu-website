"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const selectedImage = images[selectedImageIndex];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div
                className="aspect-[3/4] relative rounded-lg overflow-hidden bg-muted cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
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