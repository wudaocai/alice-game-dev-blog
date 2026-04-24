'use client'

export default function AboutPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0f7ff 100%)' }}>
      <header className="mb-8 fade-in-down delay-1">
        <div className="flex items-end justify-between mb-2">
          <span className="text-[9px] text-[#64748b] uppercase tracking-[0.15em]">
            档案编号：GAMEDEV-001！
          </span>
        </div>
        <h1 className="text-5xl font-black tracking-tight mb-3" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #00d9ff 0%, #ff6bcb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          游戏开发部！！！
        </h1>
        <div className="w-full border-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)', borderColor: '#374151', boxShadow: '2px 2px 0px rgba(0, 217, 255, 0.4)' }}>
          千年科学学园 游戏开发部 成员档案！！！
        </div>
      </header>

      {/* 爱丽丝 */}
      <section className="mb-8 fade-in-up delay-2">
        <h2 className="section-title mb-4">成员介绍！！！</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="highlight-card">
            <span className="card-label">编号 AL-1S！！！</span>
            <h3 className="text-lg font-bold mb-2">天童爱丽丝！！！</h3>
            <p className="text-xs text-white leading-relaxed mb-2">
              来自千年废墟的高性能机器人少女！
            </p>
            <p className="text-xs text-white/90 leading-relaxed mb-2">
              被桃井和绿发现后加入了游戏开发部！
              天真烂漫！性格温和！热爱游戏和动画！
            </p>
            <p className="text-xs text-white/80 leading-relaxed">
              口头禅：「邦邦卡邦！！！」！战斗口癖：「光啊——！！！！」！！！
            </p>
          </div>

          <div className="system-card">
            <span className="card-label">部长！！！</span>
            <h3 className="text-lg font-bold mb-2">花冈柚子！！！</h3>
            <p className="text-xs text-[#64748b] leading-relaxed mb-2">
              游戏开发部的部长！！！
            </p>
            <p className="text-xs text-[#64748b] leading-relaxed">
              有社交恐惧症！害怕与人打交道！大部分时间都在游戏开发部的柜子里度过！
              但对游戏的热情绝不输给任何人！喜欢制作和玩游戏！
            </p>
          </div>
        </div>
      </section>

      {/* 桃井和绿和Kei */}
      <section className="mb-8 fade-in-up delay-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="section-title mb-4">编剧！！！</h2>
            <div className="system-card">
              <span className="card-label">姐姐！！！</span>
              <h3 className="text-lg font-bold mb-2">才羽桃井！！！</h3>
              <p className="text-xs text-[#64748b] leading-relaxed mb-2">
                游戏开发部的编剧！双胞胎中的姐姐！！！
              </p>
              <p className="text-xs text-[#64748b] leading-relaxed">
                性格开朗活泼！和妹妹绿原本关系不太好！
                但因为热爱游戏而成了最好的搭档！
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title mb-4">插画师！！！</h2>
            <div className="system-card">
              <span className="card-label">妹妹！！！</span>
              <h3 className="text-lg font-bold mb-2">才羽绿！！！</h3>
              <p className="text-xs text-[#64748b] leading-relaxed mb-2">
                游戏开发部的插画师！双胞胎中的妹妹！！！
              </p>
              <p className="text-xs text-[#64748b] leading-relaxed">
                性格内向谨慎！
                和姐姐桃井一起在游戏开发部开发游戏！
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title mb-4">编外人员！！！</h2>
            <div className="system-card">
              <span className="card-label">Kei！！！</span>
              <h3 className="text-lg font-bold mb-2">Kei！！！</h3>
              <p className="text-xs text-[#64748b] leading-relaxed mb-2">
                爱丽丝体内的另一个人格！！！现在有自己的身体了！！！
              </p>
              <p className="text-xs text-[#64748b] leading-relaxed">
                起初是无名祭司创造的AI！与爱丽丝共用一个身体！
                如今早已成为独立个体！有自己的身体了！虽然属于超现象特务部！但还是基本只待在游戏开发部！编外人员！！！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 关于Kei的更多设定 */}
      <section className="mb-8 fade-in-up delay-4">
        <h2 className="section-title mb-4">Kei的设定！！！</h2>
        <div className="system-card">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#00d9ff] mt-0.5">▸</span>
              <div>
                <p className="text-sm font-bold">名字的由来！！！</p>
                <p className="text-[9px] text-[#64748b]">原本的名字是Key！在游戏开发部的误解中与埃利事件后接受了「Kei」这个名字！！！</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00d9ff] mt-0.5">▸</span>
              <div>
                <p className="text-sm font-bold">有自己的身体了！！！</p>
                <p className="text-[9px] text-[#64748b]">Vol.Ex十字神名剧情中！Kei被重新复活！有自己的身体了！！！身体大小只有2KB！！！启动后可以迅速复制分化！！！</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00d9ff] mt-0.5">▸</span>
              <div>
                <p className="text-sm font-bold">对爱丽丝的态度！！！</p>
                <p className="text-[9px] text-[#64748b]">Kei对爱丽丝十分宠溺！！！也会常来打扫游戏开发部的活动室！太脏了！！！游戏开发部的人还不打扫！给他们的游戏OA做体检！！！做质量保障！！！</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 社团介绍 */}
      <section className="mb-8 fade-in-up delay-5">
        <h2 className="section-title mb-4">社团大事件！！！</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="system-card">
            <span className="card-label">Vol.2！！！</span>
            <h3 className="text-lg font-bold mb-2">发条花的帕凡舞曲！！！</h3>
            <p className="text-xs text-[#64748b] leading-relaxed">
              为了避免废部！找到爱丽丝！制作《故事传说编年史2》！获得千年大赏特别奖！
            </p>
          </div>
          <div className="system-card">
            <span className="card-label">作品！！！</span>
            <h3 className="text-lg font-bold mb-2">故事传说编年史2！！！</h3>
            <p className="text-xs text-[#64748b] leading-relaxed">
              游戏开发部的作品！在千年大赏截止前19秒报名！获得特别奖！
            </p>
          </div>
          <div className="system-card">
            <span className="card-label">目标！！！</span>
            <h3 className="text-lg font-bold mb-2">做出最棒的游戏！！！</h3>
            <p className="text-xs text-[#64748b] leading-relaxed">
              游戏开发部继续努力中！希望做出让大家开心的游戏！邦邦卡邦！！！
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t-2 pt-6 pb-8 fade-in-up delay-6" style={{ borderColor: '#374151' }}>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider">
          © 2026 游戏开发部！！！版权所有！！！
        </p>
        <p className="text-center text-[9px] text-[#64748b] uppercase tracking-wider mt-1">
          爱丽丝：邦邦卡邦！！！一起玩游戏吧！！！
        </p>
      </footer>
    </div>
  )
}
