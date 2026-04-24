'use client'

import { useState } from 'react'
import { Modal } from '@/components/Modal'

export default function ArchivePage() {
  const [activeModal, setActiveModal] = useState<{ title: string; content: string } | null>(null)

  const keywords = [
    {
      title: '邦邦卡邦！！！',
      summary: '爱丽丝的口头禅！！！游戏音效！！！',
      content: '▸ 口头禅！！！\n邦邦卡邦！！！是爱丽丝的口头禅！！！说话偶尔会蹦出的游戏音效！！！\n\n▸ 由来！！！\n因为没有记忆！爱丽丝的语言是通过桃井和绿给的游戏学习的！！！'
    },
    {
      title: '光啊——！！！！',
      summary: '爱丽丝的战斗口癖！！！',
      content: '▸ 战斗口癖！！！\n爱丽丝战斗时会喊「光啊——！！！！」！！！！\n\n▸ 武器！！！\n光之剑·超新星！！！宇宙战舰舰炮！！！'
    },
    {
      title: 'Kei！！！',
      summary: '爱丽丝体内的另一个人格！！！现在有自己的身体了！！！',
      content: '▸ 另一个人格！！！\n爱丽丝体内还有另一个人格叫Kei！！！\n\n▸ 由来！！！\n起初是无名祭司创造的AI！与爱丽丝共用一个身体！职责是指引王女AL-1S履行自身职责！！！\n\n▸ 现在！！！\n如今早已成为独立个体！有自己的身体了！！！虽然属于超现象特务部！但还是基本只待在游戏开发部！！！编外人员！！！'
    },
    {
      title: 'AL-1S！！！',
      summary: '爱丽丝的机身编号！！！',
      content: '▸ 编号！！！\n爱丽丝的机身铭文写的是AL-1S！！！在第二章剧情中还被称作Aris！！！国际服仍译作Alice！！！'
    },
    {
      title: '游戏开发部！！！',
      summary: '千年科学学园的社团！！！差点废部！！！',
      content: '▸ 成员！！！\n部长：花冈柚子！！！\n编剧：才羽桃井！！！\n插画师：才羽绿！！！\n后来加入的：天童爱丽丝！！！\n编外人员：Kei！！！\n\n▸ 差点废部！！！\n因为作品评价不好！人数也不够！差点废部！！！'
    },
    {
      title: '故事传说编年史2！！！',
      summary: '游戏开发部的作品！！！获得了千年大赏特别奖！！！',
      content: '▸ 作品！！！\n《故事传说编年史2》是游戏开发部制作的！！！\n\n▸ 报名！！！\n在千年大赏截止前19秒报名成功！！！\n\n▸ 获奖！！！\n获得了特别奖！！！成功避免了废部！！！'
    }
  ]

  return (
    <div className="p-8 max-w-5xl mx-auto" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0f7ff 100%)' }}>
      <header className="mb-8 fade-in-down delay-1">
        <div className="flex items-end justify-between mb-2">
          <span className="text-[9px] text-[#64748b] uppercase tracking-[0.15em">
            关键词数量：{keywords.length}！！！
          </span>
        </div>
        <h1 className="text-5xl font-black tracking-tight mb-3" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          KEIWORDS！！！
        </h1>
        <div className="w-full border-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)', borderColor: '#374151', boxShadow: '2px 2px 0px rgba(0, 217, 255, 0.4)' }}>
          KEI关键词词典！！！
        </div>
      </header>

      <section className="mb-8 fade-in-up delay-2">
        <h2 className="section-title mb-4">全部KEIWORDS！！！</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keywords.map((kw, index) => (
            <div key={kw.title} className={`fade-in-up delay-${index + 3}`}>
              <div
                className="system-card cursor-pointer h-full"
                onClick={() => setActiveModal({ title: kw.title, content: kw.content })}
              >
                <h3 className="text-lg font-bold mb-2">{kw.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed mb-2">
                  {kw.summary}
                </p>
                <p className="text-[9px] text-[#00d9ff] uppercase tracking-wider">
                  点击查看详情！！！→
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t-2 pt-6 pb-8 fade-in-up delay-5" style={{ borderColor: '#374151' }}>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider">
          © 2026 游戏开发部！！！版权所有！！！
        </p>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider mt-1">
          邦邦卡邦！！！
        </p>
      </footer>

      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal?.title || ''}
      >
        {activeModal && (
          <p className="text-xs text-[#64748b] leading-relaxed whitespace-pre-line">
            {activeModal.content}
          </p>
        )}
      </Modal>
    </div>
  )
}
