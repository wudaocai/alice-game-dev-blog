'use client'

import { useState } from 'react'
import { getAllPosts } from '@/lib/posts'
import { Modal } from '@/components/Modal'

export default function PostsPage() {
  const posts = getAllPosts()
  const [activeModal, setActiveModal] = useState<{ title: string; content: string } | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)))

  const filteredPosts = selectedTag
    ? posts.filter(p => p.tags.includes(selectedTag))
    : posts

  return (
    <div className="p-8 max-w-5xl mx-auto" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0f7ff 100%)' }}>
      <header className="mb-8 fade-in-down delay-1">
        <div className="flex items-end justify-between mb-2">
          <span className="text-[9px] text-[#64748b] uppercase tracking-[0.15em]">
            日志数：{posts.length}
          </span>
        </div>
        <h1 className="text-5xl font-black tracking-tight mb-3" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          爱丽丝日志！
        </h1>
        <div className="w-full border-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)', borderColor: '#374151', boxShadow: '2px 2px 0px rgba(0, 217, 255, 0.4)' }}>
          爱丽丝和游戏开发部的故事！
        </div>
      </header>

      {/* Tag filter */}
      <section className="mb-8 fade-in-up delay-2">
        <h2 className="section-title mb-4">标签筛选！</h2>
        <div className="flex flex-wrap gap-2">
          <span
            className={`card-tag-dark cursor-pointer hover:opacity-80 ${!selectedTag ? 'opacity-100' : 'opacity-60'}`}
            onClick={() => setSelectedTag(null)}
          >
            全部！{posts.length}
          </span>
          {allTags.map(tag => (
            <span
              key={tag}
              className={`card-tag cursor-pointer hover:opacity-80 ${selectedTag === tag ? 'bg-gradient-to-r from-cyan-400 to-pink-400 text-white' : ''}`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}！{posts.filter(p => p.tags.includes(tag)).length}
            </span>
          ))}
        </div>
      </section>

      {/* Post entries */}
      <section className="mb-8 fade-in-up delay-3">
        <h2 className="section-title mb-4">
          {selectedTag ? `标签：${selectedTag}` : '全部日志！'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post, index) => (
            <div key={post.slug} className={`fade-in-up delay-${index + 4}`}>
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
                    <span className="card-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="text-[9px] text-[#64748b] uppercase tracking-wider">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="system-card text-center py-12 fade-in-up delay-6">
            <p className="text-sm text-[#64748b]">没有找到匹配该标签的日志！</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t-2 pt-6 pb-8 fade-in-up delay-7" style={{ borderColor: '#374151' }}>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider">
          © 2026 游戏开发部！版权所有！
        </p>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider mt-1">
          KEY！
        </p>
      </footer>

      {/* Modal */}
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
