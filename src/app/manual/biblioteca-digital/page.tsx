'use client'

import { useWizardReducer } from '@/hooks/useWizardReducer'
import { manualRoutes } from '@/data/manualRoutes'
import { RouteSelector } from '@/components/RouteSelector'
import { WizardShell } from '@/components/WizardShell'

export default function ManualBibliotecaDigital() {
  const { state, currentStep, isCurrentStepComplete, actions } = useWizardReducer()

  const handleSelectRoute = (routeId: string) => {
    const route = manualRoutes.find(r => r.id === routeId)
    if (route) {
      actions.selectRoute(route)
    }
  }

  const handleStepClick = (stepIndex: number) => {
    // Permitir navegación libre a cualquier paso sin restricciones
    actions.goToStep(stepIndex)
  }

  const handleBackToRoutes = () => {
    actions.reset()
  }

  // Show route selector if no route is selected
  if (!state.selectedRoute) {
    return <RouteSelector onSelectRoute={handleSelectRoute} />
  }

  return (
    <WizardShell
      selectedRoute={state.selectedRoute}
      currentStepIndex={state.currentStepIndex}
      isCompleted={state.isCompleted}
      animationDirection={state.animationDirection}
      onPrevious={actions.previousStep}
      onNext={actions.nextStep}
      onBackToRoutes={handleBackToRoutes}
      onStepClick={handleStepClick}
    />
  )
}
