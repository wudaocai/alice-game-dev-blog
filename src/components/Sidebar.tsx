'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()
  const [mood] = useState('开心！')

  const navLinks = [
    { id: 'home', label: '主页！', icon: '🏠', href: '/' },
    { id: 'posts', label: '爱丽丝日志！', icon: '📝', href: '/posts' },
    { id: 'about', label: '游戏开发部！', icon: '🎮', href: '/about' },
    { id: 'archive', label: 'KEYWORDS！', icon: '🔑', href: '/archive' },
    { id: 'contact', label: '给爱丽丝留言！', icon: '💌', href: '/contact' },
  ]

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[200px] flex flex-col z-40" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%)' }}>
      {/* Top bar */}
      <div style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)' }} className="px-4 py-3">
        <h1 className="text-white text-[11px] font-black tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
          AL-1S！
        </h1>
        <p className="text-white/60 text-[9px] uppercase tracking-[0.15em] mt-0.5">
          天童爱丽丝！
        </p>
      </div>

      {/* Directory label */}
      <div className="px-4 py-2 border-b" style={{ borderColor: '#374151' }}>
        <p className="text-[#94a3b8] text-[8px] uppercase tracking-[0.15em]">导航菜单！</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-3 space-y-1.5">
        {navLinks.map((item) => {
          const isActive = item.href === '/'
            ? pathname === '/'
            : pathname?.startsWith(item.href)
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`nav-item cursor-pointer ${isActive ? 'active' : ''}`}
            >
              {item.icon && <span className="text-xs mr-2.5">{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Status bar */}
      <div className="border-t px-3 py-3 space-y-1.5" style={{ borderColor: '#374151' }}>
        <p className="text-[#94a3b8] text-[8px] uppercase tracking-[0.15em] mb-2">爱丽丝状态！</p>
        
        <div className="status-btn" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)' }}>
          <span className="font-black">心情！</span>
          <span>{mood}</span>
        </div>
        <div className="status-btn" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #00d9ff 100%)' }}>
          <span className="font-black">电量！</span>
          <span>100%！</span>
        </div>
        <div className="status-btn" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #10b981 100%)' }}>
          <span className="font-black" style={{ color: '#1a1a2e' }}>系统！</span>
          <span style={{ color: '#1a1a2e' }}>正常！</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t px-4 py-2" style={{ borderColor: '#374151' }}>
        <div className="flex items-center justify-between">
          <span className="text-[#94a3b8] text-[8px] uppercase tracking-wider">KEY！</span>
          <span className="text-[#00d9ff] text-[8px] font-bold">一起玩游戏吧！</span>
        </div>
      </div>
    </aside>
  )
}
