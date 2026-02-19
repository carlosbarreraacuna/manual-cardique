'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageGuideProps {
  src: string
  alt: string
  title?: string
}

export function ImageGuide({ src, alt }: ImageGuideProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative rounded-lg overflow-hidden border border-deep-teal-200">
      <div className="relative aspect-video bg-deep-teal-50">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-contain transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-deep-teal-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-deep-teal-600"></div>
          </div>
        )}
      </div>
    </div>
  )
}
