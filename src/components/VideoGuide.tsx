'use client'

import { useState } from 'react'

interface VideoGuideProps {
  src: string
  title?: string
}

export function VideoGuide({ src, title }: VideoGuideProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative rounded-lg overflow-hidden border border-deep-teal-200">
      <div className="relative aspect-video bg-deep-teal-50">
        <video
          src={src}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          controls
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
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
