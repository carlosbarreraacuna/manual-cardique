'use client'

import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react'

interface FooterNavProps {
  currentStepIndex: number
  totalSteps: number
  isCurrentStepComplete: boolean
  onPrevious: () => void
  onNext: () => void
  onBackToRoutes: () => void
  isCompleted: boolean
}

export function FooterNav({
  currentStepIndex,
  totalSteps,
  isCurrentStepComplete,
  onPrevious,
  onNext,
  onBackToRoutes,
  isCompleted,
}: FooterNavProps) {
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === totalSteps - 1

  return (
    <footer className="bg-white border-t border-deep-teal-100 p-6 sticky bottom-0">
      <div className="max-w-6xl mx-auto">
        {/* Barra de progreso */}
        {!isCompleted && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-deep-teal-700">
                Progreso del paso
              </span>
              <span className="text-sm text-deep-teal-600">
                {currentStepIndex + 1} de {totalSteps}
              </span>
            </div>
            <div className="w-full bg-deep-teal-200 rounded-full h-2">
              <div
                className="bg-medium-jungle-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Controles de navegación */}
        <div className="flex items-center justify-between">
          {/* Botones izquierdos */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onBackToRoutes}
              className="flex items-center text-deep-teal-600 hover:text-deep-teal-800 hover:bg-deep-teal-50 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-deep-teal-500 focus:ring-offset-2 rounded-lg px-4 py-2"
              aria-label="Volver al selector de rutas"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Inicio
            </button>

            {!isFirstStep && !isCompleted && (
              <button
                onClick={onPrevious}
                className="flex items-center text-deep-teal-600 hover:text-deep-teal-800 hover:bg-deep-teal-50 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-deep-teal-500 focus:ring-offset-2 rounded-lg px-4 py-2"
                aria-label="Paso anterior"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </button>
            )}
          </div>

          {/* Botones derechos */}
          <div className="flex items-center space-x-3">
            {!isCompleted ? (
              <button
                onClick={onNext}
                className="flex items-center btn-primary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                aria-label={isLastStep ? 'Completar ruta' : 'Siguiente paso'}
              >
                {isLastStep ? 'Completar ruta' : 'Siguiente'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={onBackToRoutes}
                  className="btn-secondary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Volver al inicio"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al inicio
                </button>
                
                <a
                  href="https://bibliotecadigital.cardique.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center btn-primary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Abrir Biblioteca Digital"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Abrir Biblioteca Digital
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
