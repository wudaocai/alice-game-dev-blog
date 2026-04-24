'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { Modal } from '@/components/Modal'

export default function Home() {
  const posts = getAllPosts()
  const [activeModal, setActiveModal] = useState<{ title: string; content: string } | null>(null)

  const openModal = (title: string, content: string) => {
    setActiveModal({ title, content })
  }

  return (
    <div className="p-8 max-w-5xl mx-auto" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0f7ff 100%)' }}>
      {/* Header with top bar */}
      <div className="flex items-end justify-between mb-4 fade-in-down delay-1">
        <span className="text-[9px] text-[#64748b] uppercase tracking-[0.15em]">
          项目代号：AL-1S！
        </span>
      </div>

      <header className="mb-8 fade-in-down delay-2">
        <h1 className="text-5xl font-black tracking-tight mb-3" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          AL-1S！！！
        </h1>
        <div className="w-full border-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)', borderColor: '#374151', boxShadow: '2px 2px 0px rgba(0, 217, 255, 0.4)' }}>
          欢迎来到游戏开发部！邦邦卡邦！！！
        </div>
      </header>

      {/* 关于爱丽丝 */}
      <section className="mb-8 fade-in-up delay-3">
        <h2 className="section-title mb-4">关于爱丽丝！！！</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="system-card cursor-pointer"
            onClick={() => openModal('天童爱丽丝！！！', '▸ 基本信息！\n姓名：天童爱丽丝！\n编号：AL-1S！\n所属：游戏开发部！\n\n▸ 设定！\n她是桃井和绿在千年废墟中发现的高性能机器人！\n天真烂漫！性格温和！热爱游戏和动画！\n\n▸ 口头禅！！！\n「邦邦卡邦！！！」！战斗时：「光啊——！！！！」！！！')}
          >
            <span className="card-label">爱丽丝！！！</span>
            <p className="text-xs text-[#1f2937] leading-relaxed mb-3">
              来自千年废墟的高性能机器人少女！被桃井和绿发现后加入了游戏开发部！
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="card-tag">邦邦卡邦！！！</span>
              <span className="card-tag">光啊！！！！</span>
              <span className="card-tag">天真烂漫！</span>
            </div>
          </div>

          <div 
            className="highlight-card cursor-pointer"
            onClick={() => openModal('爱丽丝的小秘密！！！', '▸ 制服！\n爱丽丝现在穿的制服是绿之前穿过的！\n\n▸ 语言！\n通过游戏学习的！偶尔会蹦出游戏音效！「邦邦卡邦！！！」\n\n▸ RPG认知！\n对现实世界的认知和RPG有融合！比如翻垃圾桶找稀有道具！小绿：害人不浅啊！！！\n\n▸ 另一个人格！\n体内还有另一个人格叫Kei！现在有自己的身体了！！！')}
          >
            <span className="card-label">小秘密！！！</span>
            <p className="text-sm text-white leading-relaxed mb-2 font-bold">
              「邦邦卡邦！！！一起玩游戏吧！！！」
            </p>
            <p className="text-xs text-white/90 leading-relaxed">
              爱丽丝的可爱口头禅！！！
            </p>
          </div>
        </div>
      </section>

      {/* 游戏开发部成员 */}
      <section className="mb-8 fade-in-up delay-4">
        <h2 className="section-title mb-4">游戏开发部成员！！！</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            className="system-card cursor-pointer"
            onClick={() => openModal('花冈柚子！！！', '▸ 部长！！！\n游戏开发部的部长！！！\n\n▸ 性格！！！\n有社交恐惧症！害怕与人打交道！大部分时间都在游戏开发部的柜子里度过！！！\n\n▸ 热情！！！\n但对游戏的热情绝不输给任何人！喜欢制作和玩游戏！！！')}
          >
            <span className="card-label">部长！！！</span>
            <p className="text-xs text-[#64748b] leading-relaxed">
              花冈柚子！游戏开发部部长！社恐！喜欢躲在柜子里！
            </p>
          </div>

          <div 
            className="system-card cursor-pointer"
            onClick={() => openModal('才羽桃井！！！', '▸ 姐姐！！！\n游戏开发部的编剧！双胞胎中的姐姐！！！\n\n▸ 性格！！！\n开朗活泼！和妹妹绿原本关系不好！但因为热爱游戏而成了最好的搭档！！！')}
          >
            <span className="card-label">姐姐！！！</span>
            <p className="text-xs text-[#64748b] leading-relaxed">
              才羽桃井！编剧！性格开朗活泼！
            </p>
          </div>

          <div 
            className="system-card cursor-pointer"
            onClick={() => openModal('才羽绿！！！', '▸ 妹妹！！！\n游戏开发部的插画师！双胞胎中的妹妹！！！\n\n▸ 性格！！！\n内向谨慎！和姐姐桃井一起在游戏开发部开发游戏！！！')}
          >
            <span className="card-label">妹妹！！！</span>
            <p className="text-xs text-[#64748b] leading-relaxed">
              才羽绿！插画师！性格内向谨慎！
            </p>
          </div>

          <div 
            className="system-card cursor-pointer"
            onClick={() => openModal('Kei！！！', '▸ 另一个人格！！！\n爱丽丝体内还有另一个人格叫Kei！！！\n\n▸ 由来！！！\n起初是无名祭司创造的AI！与爱丽丝共用一个身体！职责是指引王女AL-1S履行自身职责！！！\n\n▸ 现在！！！\n如今早已成为独立个体！有自己的身体了！虽然属于超现象特务部！但还是基本只待在游戏开发部！编外人员！！！')}
          >
            <span className="card-label">编外人员！！！</span>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Kei！！！爱丽丝原来的另一个人格！现在有自己的身体了！！！
            </p>
          </div>
        </div>
      </section>

      {/* KEIWORDS */}
      <section className="mb-8 fade-in-up delay-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="section-title mb-4">KEIWORDS！！！</h2>
            <div 
              className="system-card cursor-pointer"
              onClick={() => openModal('邦邦卡邦！！！', '▸ 口头禅！！！\n邦邦卡邦！！！是爱丽丝的口头禅！！！游戏音效！！！\n\n▸ 战斗口癖！！！\n战斗时会喊「光啊——！！！！」！！！！')}
            >
              <span className="card-label">邦邦卡邦！！！</span>
              <p className="text-xs text-[#64748b] leading-relaxed mb-1.5">
                爱丽丝的口头禅！！！还有战斗口癖「光啊——！！！！」！！！
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title mb-4">爱丽丝的喜好！！！</h2>
            <div className="flex flex-wrap gap-2">
              <span className="card-tag-dark cursor-pointer" onClick={() => openModal('游戏！！！', '▸ 热爱游戏！！！\n爱丽丝非常喜欢游戏！什么类型都感兴趣！！！\n\n▸ 参与开发！！！\n作为游戏开发部的一员！积极参与游戏制作！！！')}>游戏！！！</span>
              <span className="card-tag-dark cursor-pointer" onClick={() => openModal('动画！！！', '▸ 也喜欢动画！！！\n爱丽丝也喜欢看动画！和游戏开发部的大家一起讨论动画很开心！！！')}>动画！！！</span>
              <span className="card-tag-dark cursor-pointer" onClick={() => openModal('游戏开发部！！！', '▸ 和大家在一起！！！\n对爱丽丝来说！和游戏开发部的大家在一起最开心！！！')}>游戏开发部！！！</span>
            </div>
          </div>
        </div>
      </section>

      {/* 日志档案 */}
      <section className="mb-8 fade-in-up delay-6">
        <h2 className="section-title mb-4">爱丽丝日志！！！</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div key={post.slug} className={`fade-in-up delay-${index + 7}`}>
              <div 
                className="system-card cursor-pointer h-full"
                onClick={() => setActiveModal({ title: post.title, content: post.fullContent || post.summary })}
              >
                <h3 className="text-sm font-bold mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed mb-3">
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="card-tag">{tag}</span>
                  ))}
                </div>
                <span className="text-[9px] text-[#64748b] uppercase tracking-wider">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 pt-6 pb-8 fade-in-up delay-10" style={{ borderColor: '#374151' }}>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider">
          © 2026 游戏开发部！！！版权所有！！！
        </p>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider mt-1">
          爱丽丝：邦邦卡邦！！！一起玩游戏吧！！！
        </p>
      </footer>

      {/* Modal for content details */}
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
