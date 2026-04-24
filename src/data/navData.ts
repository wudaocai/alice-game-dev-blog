export interface NavItemData {
  id: string
  label: string
  icon: string
  title: string
  content: {
    label?: string
    text: string
  }[]
  tags?: string[]
}

export const navItems: NavItemData[] = [
  {
    id: 'home',
    label: '主页 / HOME',
    icon: '⌂',
    title: '关于主页',
    content: [
      { label: '功能说明', text: 'ECHO: 奇点日志 — 一个探索人类与机器融合边界的思想实验平台。在这里，我们记录技术变革下的个体经验与集体觉醒。' },
      { label: '更新频率', text: '每周至少一篇深度日志，不定期更新系统档案与记忆碎片。所有归档内容按时间线整理。' },
      { label: '互动方式', text: '欢迎通过通讯协议留下你的思考。每一条留言都会被认真对待，并可能成为未来日志的素材。' },
    ],
  },
  {
    id: 'posts',
    label: '日志档案 / LOGS',
    icon: '◎',
    title: '日志档案说明',
    content: [
      { label: '收录范围', text: '收录所有已发布的日志条目，涵盖人机边界、AI意识、职场焦虑、数字生存等主题。' },
      { label: '阅读建议', text: '建议按时间线从早到晚阅读，以理解思想演进的完整脉络。也可通过标签筛选感兴趣的专题。' },
      { label: '存档机制', text: '所有日志一经发布即进入永久存档。删除操作仅隐藏可见性，数据本身将被保留。' },
    ],
    tags: ['系统日志', '奇点', '人文思考', '技术评论'],
  },
  {
    id: 'about',
    label: '系统档案 / SYSTEM',
    icon: '⚙',
    title: '系统档案',
    content: [
      { label: '平台架构', text: '基于 Next.js 15 + TypeScript + Tailwind CSS 构建。采用模块化设计，支持主题切换与响应式布局。' },
      { label: '技术栈', text: '前端框架：Next.js 15（App Router）\n语言：TypeScript 5.x\n样式：Tailwind CSS 3.4\n字体：JetBrains Mono + Inter\n部署：Vercel / 自托管' },
      { label: '版本信息', text: '当前版本：v1.0.0\n核心引擎：Node.js 20.x\n数据库：文件系统（Markdown + JSON）\n最后更新：2026-04-23' },
      { label: '维护者', text: '由「观察者」独立开发与维护。开源协议遵循 MIT License。欢迎贡献代码与内容。' },
    ],
  },
  {
    id: 'archive',
    label: '记忆碎片',
    icon: '',
    title: '记忆碎片档案',
    content: [
      { label: '碎片定义', text: '记忆碎片是从完整日志中剥离出来的思想切片。它们可能是不完整的想法、瞬间的灵感、或某段对话的片段。' },
      { label: '碎片来源', text: '来源于日常观察、阅读笔记、对话记录、以及深夜独思。每一条碎片都带有时间戳与情绪标记。' },
      { label: '使用规则', text: '碎片不定期发布，无固定格式。它们存在的意义在于提醒我们：思考不必完整，碎片也有价值。' },
    ],
    tags: ['碎片', '灵感', '片段', '笔记'],
  },
  {
    id: 'contact',
    label: '通讯协议',
    icon: '',
    title: '通讯协议',
    content: [
      { label: '联系方式', text: '邮箱：echo@observer.log\nGitHub: @echo-singularity\nDiscord: ECHO Community Server' },
      { label: '通讯规范', text: '请在邮件标题注明主题类型（[投稿] / [建议] / [合作] / [其他]）。正文请保持简洁，附件不超过 10MB。' },
      { label: '回复时效', text: '工作日 48 小时内回复。复杂议题可能需要更长时间思考，届时将先行确认收悉。' },
      { label: '隐私声明', text: '所有通讯内容默认保密。未经明确授权，不会在任何公开渠道引用或展示。数据保留期限为最后一次通讯后 12 个月。' },
    ],
  },
]
