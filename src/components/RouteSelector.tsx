'use client'

import { manualRoutes } from '@/data/manualRoutes'
import { ExternalLink, BookOpen, Search, FolderTree } from 'lucide-react'

interface RouteSelectorProps {
  onSelectRoute: (routeId: string) => void
}

export function RouteSelector({ onSelectRoute }: RouteSelectorProps) {
  const handleExternalLink = () => {
    window.open('https://bibliotecadigital.cardique.org', '_blank')
  }

  const routeIcons = {
    acceso: BookOpen,
    consulta: Search,
    generos: FolderTree,
  }

  return (
    <div className="min-h-screen bg-deep-teal-50 p-4 relative overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/generated_video.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Overlay para asegurar legibilidad */}
        <div className="absolute inset-0 bg-deep-teal-900 bg-opacity-40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Manual interactivo – Biblioteca Digital CARDIQUE
            </h1>
            <p className="text-lg text-deep-teal-100">
              Selecciona la ruta que necesitas para aprender a usar la Biblioteca Digital
            </p>
          </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {manualRoutes.map((route) => {
            const Icon = routeIcons[route.id as keyof typeof routeIcons]
            
            return (
              <button
                key={route.id}
                onClick={() => onSelectRoute(route.id)}
                className="bg-white bg-opacity-90 backdrop-blur-sm p-6 text-left hover:shadow-md transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sea-green-500 focus:ring-offset-2 group"
                aria-label={`Seleccionar ruta: ${route.name}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sea-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-sea-green-200 transition-colors">
                    <Icon className="w-6 h-6 text-sea-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-deep-teal-800">
                    {route.name}
                  </h2>
                </div>
                <p className="text-deep-teal-600 mb-4">
                  {route.description}
                </p>
                <div className="flex items-center text-sea-green-600 font-medium">
                  <span>Iniciar recorrido</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            )
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleExternalLink}
            className="inline-flex items-center bg-moss-green-600 hover:bg-moss-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-moss-green-500 focus:ring-offset-2 group"
            aria-label="Ir directamente a la Biblioteca Digital"
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Ir directamente a la Biblioteca Digital
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
