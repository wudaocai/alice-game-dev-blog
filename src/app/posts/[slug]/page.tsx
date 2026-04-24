'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null)

  useEffect(() => {
    params.then(resolved => {
      setSlug(resolved.slug)
    })
  }, [params])

  if (!slug) {
    return (
      <div className="p-8 max-w-5xl mx-auto flex items-center justify-center min-h-screen">
        <div className="text-[#64748b]">Loading...</div>
      </div>
    )
  }

  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <header className="mb-8 pb-4 border-b-4">
        <div className="flex items-end justify-between mb-2">
          <span className="card-tag-dark">日志档案</span>
          <span className="text-[10px] text-[#64748b] uppercase tracking-wider">
            {post.date}
          </span>
        </div>
        <h1 className="text-3xl font-black leading-tight" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {post.title}
        </h1>
      </header>

      <article className="system-card mb-8">
        <div className="prose max-w-none">
          <p className="text-sm leading-relaxed text-[#374151] mb-6">
            这是日志条目的正文内容。在实际使用中，这里会显示完整的 Markdown/MDX 文章内容。
          </p>
          <p className="text-sm leading-relaxed text-[#374151] mb-6">
            AL-1S: 游戏开发部博客！！！记录着爱丽丝和游戏开发部的冒险故事！！！邦邦卡邦！！！
          </p>

          <div className="border-l-4 pl-4 my-8 py-4" style={{ borderColor: '#00d9ff', backgroundColor: 'rgba(0, 217, 255, 0.05)' }}>
            <p className="text-sm italic text-[#64748b]">
              "邦邦卡邦！！！一起玩游戏吧！！！"
            </p>
          </div>

          <div className="p-6 my-8 font-mono text-xs" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)', color: '#fff' }}>
            <p className="mb-2" style={{ color: '#00d9ff' }}>// 终端风格代码块示例</p>
            <pre>
{`function initAliceGame() {
  console.log("Welcome to the Game Dev Club...");
  console.log("Alice + Friends = Awesome Games");
  console.log("邦邦卡邦！！！");
}`}
            </pre>
          </div>
        </div>
      </article>

      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map(tag => (
          <span className="card-tag" key={tag}>{tag}</span>
        ))}
      </div>

      <Link href="/posts" className="inline-block px-4 py-2 border-2 text-xs uppercase tracking-wider transition-all" style={{ borderColor: '#374151', color: '#374151' }}>
        {'< 返回日志列表'}
      </Link>
    </div>
  )
}