'use client'

import { ChecklistItem } from '@/data/manualRoutes'

interface ChecklistProps {
  items: ChecklistItem[]
  stepId: string
}

export function Checklist({ items, stepId }: ChecklistProps) {
  return (
    <div className="space-y-1">
      <div className="space-y-1">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex items-start p-1 rounded-lg border border-deep-teal-200 bg-deep-teal-50"
          >
            <div className="w-5 h-5 bg-deep-teal-600 text-white rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-medium">
              {index + 1}
            </div>
            <div className="ml-2 flex-1">
              <span className="text-xs text-deep-teal-700">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
