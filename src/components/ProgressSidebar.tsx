'use client'

import { Check, ChevronRight } from 'lucide-react'
import { Step } from '@/data/manualRoutes'

interface ProgressSidebarProps {
  steps: Step[]
  currentStepIndex: number
  onStepClick: (index: number) => void
  routeName: string
}

export function ProgressSidebar({ steps, currentStepIndex, onStepClick, routeName }: ProgressSidebarProps) {
  const isStepCompleted = (stepIndex: number) => {
    return steps[stepIndex]?.checklist.every(item => item.completed) ?? false
  }

  const isStepActive = (stepIndex: number) => {
    return stepIndex === currentStepIndex
  }

  const isStepAccessible = (stepIndex: number) => {
    return stepIndex <= currentStepIndex || isStepCompleted(stepIndex - 1)
  }

  return (
    <div className="hidden lg:block w-80 bg-white border-r border-deep-teal-100 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-deep-teal-800 mb-2">
          Ruta: {routeName}
        </h2>
        <div className="text-sm text-deep-teal-600 mb-4">
          Paso {currentStepIndex + 1} de {steps.length}
        </div>
        
        <div className="w-full bg-deep-teal-200 rounded-full h-2 mb-6">
          <div
            className="bg-medium-jungle-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <nav aria-label="Progreso del wizard">
        <ul className="space-y-2">
          {steps.map((step, index) => {
            const completed = isStepCompleted(index)
            const active = isStepActive(index)
            const accessible = isStepAccessible(index)

            return (
              <li key={step.id}>
                <button
                  onClick={() => accessible && onStepClick(index)}
                  disabled={!accessible}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-deep-teal-100 border-2 border-deep-teal-300'
                      : completed
                      ? 'bg-medium-jungle-50 border-2 border-medium-jungle-300'
                      : 'bg-deep-teal-50 border-2 border-transparent'
                  } ${
                    accessible
                      ? 'hover:bg-deep-teal-100 cursor-pointer'
                      : 'cursor-not-allowed opacity-50'
                  }`}
                  aria-label={`Paso ${index + 1}: ${step.title}${
                    completed ? ' - Completado' : active ? ' - Activo' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-all duration-200 ${
                        completed
                          ? 'bg-medium-jungle-600 scale-100'
                          : active
                          ? 'bg-deep-teal-600 scale-110'
                          : 'bg-deep-teal-300'
                      }`}
                    >
                      {completed ? (
                        <Check className="w-4 h-4 text-white animate-scale-in" />
                      ) : (
                        <span className="text-xs text-white font-medium">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className={`font-medium text-sm ${
                        completed
                          ? 'text-medium-jungle-700'
                          : active
                          ? 'text-deep-teal-800'
                          : 'text-deep-teal-600'
                      }`}>
                        {step.title}
                      </div>
                    </div>

                    {active && (
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
  )
}
