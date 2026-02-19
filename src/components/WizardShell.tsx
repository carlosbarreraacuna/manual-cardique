'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Check, ChevronRight, CheckCircle } from 'lucide-react'
import { ProgressSidebar } from './ProgressSidebar'
import { StepCard } from './StepCard'
import { Route, Step } from '@/data/manualRoutes'

interface WizardShellProps {
  selectedRoute: Route | null
  currentStepIndex: number
  onStepClick: (stepIndex: number) => void
  onBackToRoutes: () => void
  onPrevious?: () => void
  onNext?: () => void
  isCompleted?: boolean
  animationDirection?: 'forward' | 'backward'
}

export function WizardShell({
  selectedRoute,
  currentStepIndex,
  onStepClick,
  onBackToRoutes,
  onPrevious,
  onNext,
  isCompleted,
  animationDirection,
}: WizardShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<Step | null>(null)

  // Cerrar menú móvil al cambiar de paso
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [currentStepIndex])

  // Actualizar paso actual con animación
  useEffect(() => {
    if (selectedRoute && selectedRoute.steps[currentStepIndex]) {
      setCurrentStep(selectedRoute.steps[currentStepIndex])
    }
  }, [selectedRoute, currentStepIndex])

  const handleStepClick = (stepIndex: number) => {
    const direction = stepIndex > currentStepIndex ? 'forward' : 'backward'
    onStepClick(stepIndex)
  }

  // Pantalla especial para paso de finalización
  if (isCompleted && currentStep?.id === 'acceso-4') {
    return (
      <div className="min-h-screen bg-deep-teal-50 flex flex-col">
        <header className="bg-white border-b border-deep-teal-100 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h1 className="text-lg font-bold text-deep-teal-800">
              Manual interactivo – Biblioteca Digital CARDIQUE
            </h1>
            <button
              onClick={onBackToRoutes}
              className="text-deep-teal-600 hover:text-deep-teal-800 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-deep-teal-500 focus:ring-offset-2 rounded px-3 py-2"
            >
              Inicio
            </button>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center animate-scale-in">
            <div className="mb-6">
              <div className="w-20 h-20 bg-sea-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-sea-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-deep-teal-800 mb-2">
                Ruta completada!
              </h2>
              <p className="text-lg text-deep-teal-600 mb-6">
                Has completado exitosamente la ruta "Acceder a la Biblioteca Digital". Ahora estás listo para usar la Biblioteca Digital CARDIQUE.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBackToRoutes}
                className="flex items-center justify-center bg-moss-green-600 hover:bg-moss-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-moss-green-500 focus:ring-offset-2"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver al inicio
              </button>
              
              <a
                href="https://bibliotecadigital.cardique.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn-primary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir Biblioteca Digital
              </a>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-deep-teal-50 flex flex-col">
        <header className="bg-white border-b border-deep-teal-100 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold text-deep-teal-800">
              Manual interactivo – Biblioteca Digital CARDIQUE
            </h1>
            <button
              onClick={onBackToRoutes}
              className="text-deep-teal-600 hover:text-deep-teal-800 font-medium"
            >
              Inicio
            </button>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-2xl w-full text-center">
            <div className="w-20 h-20 bg-medium-jungle-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="w-10 h-10 text-medium-jungle-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-deep-teal-800 mb-4">
              ¡Ruta completada!
            </h2>
            
            <p className="text-lg text-deep-teal-600 mb-8">
              Has completado exitosamente la ruta "{selectedRoute?.name}".
              Ahora estás listo para usar la Biblioteca Digital CARDIQUE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBackToRoutes}
                className="btn-secondary"
              >
                Volver al inicio
              </button>
              
              <a
                href="https://bibliotecadigital.cardique.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Abrir Biblioteca Digital
              </a>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-deep-teal-50 flex flex-col">
      <header className={`bg-white border-b border-deep-teal-100 px-4 py-4 sticky top-0 z-30 transition-all duration-300 ${
          isMobileMenuOpen ? 'ml-0 lg:ml-80' : 'ml-0 lg:ml-80'
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-deep-teal-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-deep-teal-600" />
              ) : (
                <Menu className="w-6 h-6 text-deep-teal-600" />
              )}
            </button>
          </div>

          {/* Título central - solo visible en desktop */}
          <div className="hidden lg:block">
            <h2 className="text-lg font-bold text-deep-teal-800">
              Biblioteca Digital CARDIQUE
            </h2>
          </div>

          {/* Botón Inicio - siempre a la derecha */}
          <button
            onClick={onBackToRoutes}
            className="text-deep-teal-600 hover:text-deep-teal-800 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-deep-teal-500 focus:ring-offset-2 rounded px-3 py-2"
          >
            Inicio
          </button>
        </div>

        {/* Título central - solo visible en mobile */}
        <div className="lg:hidden text-center mt-2">
          <h2 className="text-base font-bold text-deep-teal-800">
            Biblioteca Digital CARDIQUE
          </h2>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Mobile Progress Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-y-0 left-0 w-80 bg-white z-30 transform transition-transform duration-300 ease-in-out">
            {/* Header del drawer mobile con botón cerrar */}
            <div className="flex items-center justify-between p-4 border-b border-deep-teal-100">
              <h2 className="text-lg font-bold text-deep-teal-800">
                Manual interactivo
              </h2>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsMobileMenuOpen(false)
                }}
                className="p-2 rounded-lg hover:bg-deep-teal-100 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 text-deep-teal-600" />
              </button>
            </div>
              
              {/* Contenido del sidebar sin el header duplicado */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-deep-teal-700 mb-2">
                  Ruta: {selectedRoute?.name || ''}
                </h3>
                <div className="text-sm text-deep-teal-600 mb-4">
                  Paso {currentStepIndex + 1} de {selectedRoute?.steps?.length || 0}
                </div>
                
                <div className="w-full bg-deep-teal-200 rounded-full h-2 mb-6">
                  <div
                    className="bg-medium-jungle-600 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${((currentStepIndex + 1) / (selectedRoute?.steps?.length || 1)) * 100}%` }}
                  />
                </div>

                <nav aria-label="Progreso del wizard">
                  <ul className="space-y-2">
                    {selectedRoute?.steps?.map((step, index) => {
                      const isStepCompleted = step.checklist.every(item => item.completed)
                      const isStepActive = index === currentStepIndex
                      const isStepAccessible = index <= currentStepIndex || isStepCompleted

                      return (
                        <li key={step.id}>
                          <button
                            onClick={() => {
                              onStepClick(index)
                              setIsMobileMenuOpen(false)
                            }}
                            disabled={!isStepAccessible}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                              isStepActive
                                ? 'bg-deep-teal-100 border-2 border-deep-teal-300'
                                : isStepCompleted
                                ? 'bg-medium-jungle-50 border-2 border-medium-jungle-300'
                                : 'bg-deep-teal-50 border-2 border-transparent'
                            } ${
                              isStepAccessible
                                ? 'hover:bg-deep-teal-100 cursor-pointer'
                                : 'cursor-not-allowed opacity-50'
                            }`}
                            aria-label={`Paso ${index + 1}: ${step.title}${
                              isStepCompleted ? ' - Completado' : isStepActive ? ' - Activo' : ''
                            }`}
                          >
                            <div className="flex items-center">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-all duration-200 ${
                                  isStepCompleted
                                    ? 'bg-medium-jungle-600 scale-100'
                                    : isStepActive
                                    ? 'bg-deep-teal-600 scale-110'
                                    : 'bg-deep-teal-300'
                                }`}
                              >
                                {isStepCompleted ? (
                                  <Check className="w-4 h-4 text-white animate-scale-in" />
                                ) : (
                                  <span className="text-xs text-white font-medium">
                                    {index + 1}
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex-1">
                                <div className={`font-medium text-sm ${
                                  isStepCompleted
                                    ? 'text-medium-jungle-700'
                                    : isStepActive
                                    ? 'text-deep-teal-800'
                                    : 'text-deep-teal-600'
                                }`}>
                                  {step.title}
                                </div>
                              </div>

                              {isStepActive && (
                                <ChevronRight className="w-4 h-4 text-deep-teal600 animate-pulse" />
                              )}
                            </div>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </div>
        )}

        {/* Desktop Progress Sidebar - Superpuesto */}
        <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-white border-r border-deep-teal-100 z-40">
          <ProgressSidebar
            steps={selectedRoute?.steps || []}
            currentStepIndex={currentStepIndex}
            onStepClick={onStepClick}
            routeName={selectedRoute?.name || ''}
          />
        </div>

        {/* Main Content - Responsive */}
        <main className={`flex-1 p-2 overflow-y-auto pb-20 transition-all duration-300 ${
          isMobileMenuOpen ? 'ml-0 lg:ml-80' : 'ml-0 lg:ml-80'
        }`}>
          <div className="">
            {currentStep && (
              <StepCard
                step={currentStep}
                animationDirection={animationDirection || 'forward'}
                onPrevious={onPrevious}
                onNext={onNext}
                isFirstStep={currentStepIndex === 0}
                isLastStep={isCompleted}
                onBackToRoutes={onBackToRoutes}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
