'use client'

import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    'Loading Game Data...',
    'Waking Up Alice...',
    'Syncing Kei Cluster...',
    'Booting Game Dev Club...',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return Math.min(prev + Math.random() * 8 + 2, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 25 && currentStep === 0) setCurrentStep(1)
    if (progress >= 50 && currentStep === 1) setCurrentStep(2)
    if (progress >= 75 && currentStep === 2) setCurrentStep(3)
    if (progress >= 100 && currentStep === 3) {
      setTimeout(onComplete, 500)
    }
  }, [progress, currentStep, onComplete])

  return (
    <div className="fixed inset-0 bg-[#1a1a2e] flex flex-col items-center justify-center z-50">
      <div className="text-center w-full max-w-md px-8">
        <h1 className="text-6xl font-bold mb-1 tracking-wider" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          AL-1S
        </h1>
        <p className="text-[#00d9ff] text-xs uppercase tracking-[0.4em] mb-16" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Game Dev Club
        </p>

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

        <div className="relative">
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
      </div>
    </div>
  )
}
