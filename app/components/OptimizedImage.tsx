'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  enableZoom?: boolean;
  enableReveal?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  containerClassName = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  objectFit = 'cover',
  loading,
  placeholder,
  blurDataURL,
  enableZoom = false,
  enableReveal = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.log(`Image failed to load: ${src}`);
  };

  // Fallback placeholder for missing images
  const fallbackSrc = '/placeholder.jpg';
  const imageSrc = hasError ? fallbackSrc : src;

  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
  }[objectFit];

  const containerClasses = `
    ${enableZoom ? 'image-zoom-container' : ''}
    ${containerClassName}
    relative overflow-hidden
  `.trim();

  const imageClasses = `
    ${objectFitClass}
    ${enableZoom ? 'image-zoom transition-transform duration-500 ease-out' : ''}
    ${isLoaded ? 'opacity-100' : 'opacity-0'}
    transition-opacity duration-500 ease-out
    ${className}
  `.trim();

  const imageContent = (
    <>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 skeleton"
          aria-hidden="true"
        />
      )}

      {fill ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={imageClasses}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <Image
          src={imageSrc}
          alt={alt}
          width={width || 800}
          height={height || 600}
          sizes={sizes}
          quality={quality}
          priority={priority}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={imageClasses}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </>
  );

  if (enableReveal) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {imageContent}
      </motion.div>
    );
  }

  return (
    <div className={containerClasses}>
      {imageContent}
    </div>
  );
}
