'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="p-8 max-w-5xl mx-auto" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0f7ff 100%)' }}>
      <header className="mb-8 fade-in-down delay-1">
        <div className="flex items-end justify-between mb-2">
          <span className="text-[9px] text-[#64748b] uppercase tracking-[0.15em]">
            留言板！
          </span>
        </div>
        <h1 className="text-5xl font-black tracking-tight mb-3" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          给爱丽丝留言！
        </h1>
        <div className="w-full border-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)', borderColor: '#374151', boxShadow: '2px 2px 0px rgba(0, 217, 255, 0.4)' }}>
          给爱丽丝写信吧！
        </div>
      </header>

      {!submitted ? (
        <section className="mb-8 fade-in-up delay-2">
          <div className="system-card">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">你的名字！</label>
                  <input
                    type="text"
                    required
                    placeholder="请输入你的名字！"
                    className="w-full px-3 py-2 border-2 border-[#374151] focus:border-[#00d9ff] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">你想对爱丽丝说什么？</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="请输入你的留言！"
                    className="w-full px-3 py-2 border-2 border-[#374151] focus:border-[#00d9ff] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 font-bold uppercase tracking-wider border-2 border-[#374151] transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)' }}
                >
                  发送给爱丽丝！
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section className="mb-8 fade-in-up delay-2">
          <div className="highlight-card text-center py-12">
            <h2 className="text-2xl font-bold mb-4">发送成功！</h2>
            <p className="text-white text-lg mb-2">爱丽丝收到了你的留言！</p>
            <p className="text-white/90 text-sm mb-6">「KEY！谢谢你！一起玩游戏吧！」</p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 border-2 border-white font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#1f2937]"
            >
              再写一封！
            </button>
          </div>
        </section>
      )}

      {/* 其他留言区域 */}
      <section className="mb-8 fade-in-up delay-3">
        <h2 className="section-title mb-4">给爱丽丝的信息！</h2>
        <div className="space-y-3">
          <div className="system-card">
            <p className="text-sm mb-1"><span className="font-bold">桃井！</span>爱丽丝！一起玩游戏吧！</p>
            <p className="text-[9px] text-[#64748b]">来自：桃井！</p>
          </div>
          <div className="system-card">
            <p className="text-sm mb-1"><span className="font-bold">绿！</span>爱丽丝！你还好吗？</p>
            <p className="text-[9px] text-[#64748b]">来自：绿！</p>
          </div>
          <div className="system-card">
            <p className="text-sm mb-1"><span className="font-bold">柚子！</span>游戏开发部加油！</p>
            <p className="text-[9px] text-[#64748b]">来自：柚子！（从柜子里发出来的！）</p>
          </div>
        </div>
      </section>

      <footer className="border-t-2 pt-6 pb-8 fade-in-up delay-4" style={{ borderColor: '#374151' }}>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider">
          © 2026 游戏开发部！版权所有！
        </p>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider mt-1">
          KEY！一起玩游戏吧！
        </p>
      </footer>
    </div>
  )
}
