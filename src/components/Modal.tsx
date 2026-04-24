'use client'

import { useEffect, useRef, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      document.body.style.overflow = ''
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      return () => document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  if (!isVisible && !isOpen) return null

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'bg-black/40' : 'bg-black/0'}`}
        style={{ backdropFilter: isOpen ? 'blur(8px)' : 'blur(0px)', WebkitBackdropFilter: isOpen ? 'blur(8px)' : 'blur(0px)' }}
      />
      <div 
        className={`relative z-10 w-full max-w-2xl mx-4 max-h-[85vh] overflow-y-auto border-2 border-[#2a2a2a] bg-white transition-all duration-500 ease-out ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
        style={{ boxShadow: '6px 6px 0px rgba(42, 42, 42, 0.3)' }}
      >
        <div className="flex items-center justify-between bg-[#1a1a1a] px-5 py-3 border-b-2 border-[#2a2a2a]">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-[#e87722] transition-all duration-300 text-lg font-black hover:scale-110 active:scale-95"
          >
            ✕
          </button>
        </div>
        <div className="p-5">
          <div className="fade-in-up">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
