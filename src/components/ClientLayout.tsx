'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/Sidebar'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showPlay, setShowPlay] = useState(false)
  const [entered, setEntered] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    'Loading Game Data...',
    'Waking Up Alice...',
    'Syncing Kei Cluster...',
    'Booting Game Dev Club...',
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return Math.min(prev + 5, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [isClient])

  useEffect(() => {
    if (progress >= 25 && currentStep === 0) setCurrentStep(1)
    if (progress >= 50 && currentStep === 1) setCurrentStep(2)
    if (progress >= 75 && currentStep === 2) setCurrentStep(3)
    if (progress >= 100 && currentStep === 3) {
      setTimeout(() => setShowPlay(true), 300)
    }
  }, [progress, currentStep])

  if (!isClient) {
    return (
      <div className="fixed inset-0 bg-[#1a1a2e] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-1 tracking-wider" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          AL-1S
        </h1>
      </div>
    )
  }

  return (
    <>
      {!entered && (
        <div className="fixed inset-0 bg-[#1a1a2e] flex flex-col items-center justify-center z-50">
          <div className="text-center w-full max-w-md px-8">
            <h1 className="text-6xl font-bold mb-1 tracking-wider" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AL-1S
            </h1>
            <p className="text-[#00d9ff] text-xs uppercase tracking-[0.4em] mb-16" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Game Dev Club
            </p>

            {loading && (
              <div className="space-y-3 mb-12 text-left">
                {steps.map((step, index) => (
                  <p
                    key={index}
                    className="text-[#00d9ff] text-sm font-mono"
                    style={{
                      opacity: index <= currentStep ? 1 : 0.3,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {index < currentStep ? '✓' : '>'} {step}
                  </p>
                ))}
              </div>
            )}

            {loading && (
              <div className="relative mb-12">
                <div className="w-full h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${progress}%`, background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)' }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[#00d9ff] text-[10px] uppercase tracking-wider font-mono">
                    System Load
                  </span>
                  <span className="text-[#00d9ff] text-[10px] uppercase tracking-wider font-mono">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
            )}

            {showPlay && (
              <button
                onClick={() => {
                  setShowPlay(false)
                  setTimeout(() => setEntered(true), 300)
                }}
                className="px-12 py-4 text-xl font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg pulse-animation"
                style={{
                  background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)',
                  border: '3px solid #fff',
                  color: '#fff',
                  boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)'
                }}
              >
                PLAY
              </button>
            )}
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-700 ${!entered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Sidebar />
        <main className="ml-[200px] min-h-screen bg-grid" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0f7ff 100%)' }}>
          {children}
        </main>
      </div>
    </>
  )
}
