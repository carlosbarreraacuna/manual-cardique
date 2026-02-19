'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/manual/biblioteca-digital')
  }, [router])

  return (
    <div className="min-h-screen bg-deep-teal-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-deep-teal-600 mx-auto mb-4"></div>
        <p className="text-deep-teal-600">Redirigiendo al manual interactivo...</p>
      </div>
    </div>
  )
}
