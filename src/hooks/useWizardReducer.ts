'use client'

import { useReducer, useEffect } from 'react'
import { Route, Step, ChecklistItem } from '@/data/manualRoutes'

export type WizardState = {
  selectedRoute: Route | null
  currentStepIndex: number
  steps: Step[]
  isCompleted: boolean
  animationDirection: 'forward' | 'backward'
}

export type WizardAction =
  | { type: 'SELECT_ROUTE'; payload: Route }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'GO_TO_STEP'; payload: number }
  | { type: 'TOGGLE_CHECKLIST'; payload: { stepId: string; itemId: string } }
  | { type: 'RESET' }
  | { type: 'LOAD_STATE'; payload: WizardState }

const initialState: WizardState = {
  selectedRoute: null,
  currentStepIndex: 0,
  steps: [],
  isCompleted: false,
  animationDirection: 'forward',
}

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case 'SELECT_ROUTE': {
      const route = action.payload
      return {
        ...state,
        selectedRoute: route,
        steps: route.steps,
        currentStepIndex: 0,
        isCompleted: false,
        animationDirection: 'forward',
      }
    }

    case 'NEXT_STEP': {
      if (state.currentStepIndex >= state.steps.length - 1) {
        return {
          ...state,
          isCompleted: true,
          animationDirection: 'forward',
        }
      }

      return {
        ...state,
        currentStepIndex: state.currentStepIndex + 1,
        animationDirection: 'forward',
      }
    }

    case 'PREVIOUS_STEP': {
      if (state.currentStepIndex <= 0) {
        return state
      }

      return {
        ...state,
        currentStepIndex: state.currentStepIndex - 1,
        animationDirection: 'backward',
      }
    }

    case 'GO_TO_STEP': {
      const targetIndex = action.payload
      if (targetIndex >= 0 && targetIndex < state.steps.length) {
        const direction = targetIndex > state.currentStepIndex ? 'forward' : 'backward'
        return {
          ...state,
          currentStepIndex: targetIndex,
          isCompleted: targetIndex === state.steps.length - 1,
          animationDirection: direction,
        }
      }
      return state
    }

    case 'TOGGLE_CHECKLIST': {
      const { stepId, itemId } = action.payload
      const updatedSteps = state.steps.map(step => {
        if (step.id === stepId) {
          const updatedChecklist = step.checklist.map(item =>
            item.id === itemId ? { ...item, completed: !item.completed } : item
          )
          return { ...step, checklist: updatedChecklist }
        }
        return step
      })

      return {
        ...state,
        steps: updatedSteps,
      }
    }

    case 'RESET':
      return initialState

    case 'LOAD_STATE':
      return action.payload

    default:
      return state
  }
}

const STORAGE_KEY = 'wizard-biblioteca-cardique'

export function useWizardReducer() {
  const [state, dispatch] = useReducer(wizardReducer, initialState)

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(STORAGE_KEY)
      if (savedState) {
        const parsedState = JSON.parse(savedState) as WizardState
        dispatch({ type: 'LOAD_STATE', payload: parsedState })
      }
    } catch (error) {
      console.error('Error loading wizard state:', error)
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
      console.error('Error saving wizard state:', error)
    }
  }, [state])

  const currentStep = state.steps[state.currentStepIndex]
  // Siempre permitir avanzar al siguiente paso sin requerir verificación
  const isCurrentStepComplete = true
  const progress = state.steps.length > 0 ? ((state.currentStepIndex + 1) / state.steps.length) * 100 : 0

  const actions = {
    selectRoute: (route: Route) => dispatch({ type: 'SELECT_ROUTE', payload: route }),
    nextStep: () => dispatch({ type: 'NEXT_STEP' }),
    previousStep: () => dispatch({ type: 'PREVIOUS_STEP' }),
    goToStep: (stepIndex: number) => dispatch({ type: 'GO_TO_STEP', payload: stepIndex }),
    toggleChecklist: (stepId: string, itemId: string) =>
      dispatch({ type: 'TOGGLE_CHECKLIST', payload: { stepId, itemId } }),
    reset: () => dispatch({ type: 'RESET' }),
  }

  return {
    state,
    currentStep,
    isCurrentStepComplete,
    progress,
    actions,
  }
}
