'use client'

import { Target, ChevronLeft, ChevronRight } from 'lucide-react'
import { Step } from '@/data/manualRoutes'
import { Checklist } from './Checklist'
import { ImageGuide } from './ImageGuide'

interface StepCardProps {
  step: Step
  animationDirection: 'forward' | 'backward'
  onPrevious?: () => void
  onNext?: () => void
  isFirstStep?: boolean
  isLastStep?: boolean
  onBackToRoutes?: () => void
}

export function StepCard({ step, animationDirection, onPrevious, onNext, isFirstStep, isLastStep, onBackToRoutes }: StepCardProps) {
  const animationClass = animationDirection === 'forward' 
    ? 'animate-slide-in-right' 
    : 'animate-slide-in-left'

  return (
    <div className={`step-card ${animationClass}`}>
      <header className="mb-4">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-deep-teal-100 rounded-lg flex items-center justify-center mr-3">
            <Target className="w-4 h-4 text-deep-teal-600" />
          </div>
          <h1 className="text-lg font-bold text-deep-teal-800">
            {step.title}
          </h1>
        </div>
        
        <div className="bg-deep-teal-50 border-l-4 border-deep-teal-400 p-2 rounded">
          <p className="text-deep-teal-700 font-medium text-xs">
            {step.goal}
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Información - Lado izquierdo */}
          <div className="space-y-6">
            <section>
              <h2 className="text-base font-semibold text-deep-teal-800 mb-2">
                Instrucciones
              </h2>
              <Checklist
                items={step.checklist}
                stepId={step.id}
              />
            </section>

            <section className="bg-lemon-lime-50 border border-lemon-lime-200 rounded-lg p-2">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-lemon-lime-600 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lemon-lime-800 text-xs mb-1">
                    Resultado esperado
                  </h3>
                  <p className="text-lemon-lime-700 text-xs">
                    {step.expectedResult}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Imagen - Lado derecho */}
          <section>
            <ImageGuide 
              src={step.image} 
              alt={step.imageAlt}
            />
          </section>
        </div>
      </div>

      {/* Botones de navegación - Lado derecho */}
      <div className="fixed bottom-6 right-6 z-50 flex space-x-3">
        {!isFirstStep && (
          <button
            onClick={onPrevious}
            className="flex items-center bg-moss-green-600 hover:bg-moss-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-moss-green-500 focus:ring-offset-2"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </button>
        )}
        <button
          onClick={onNext}
          className="flex items-center btn-primary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        >
          {isLastStep ? 'Completar' : 'Siguiente'}
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  )
}
