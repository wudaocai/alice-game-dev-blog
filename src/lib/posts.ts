export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  fullContent?: string
}

const posts: Post[] = [
  {
    slug: 'first-meet',
    title: '初次见面！在废墟中发现的机器人！',
    date: '2026-04-24',
    summary: '桃井和绿在千年废墟中发现了爱丽丝！为了让游戏开发部凑够人数，才妹委托贝里塔斯录入了她的学生信息！',
    tags: ['初次见面！', '游戏开发部！', '桃井！', '绿！'],
    fullContent: '▸ 发现！\n桃井和绿在千年废墟中发现了沉睡的机器人！\n\n▸ 加入！\n为了让游戏开发部拥有足够数量的成员！才妹委托贝里塔斯录入了爱丽丝的学生信息！让她成为了千年的学生之一！\n\n▸ 制服！\n爱丽丝的制服是绿之前穿过的！'
  },
  {
    slug: 'alice-language',
    title: '邦邦卡邦！爱丽丝的语言是从游戏里学来的！',
    date: '2026-04-23',
    summary: '因为没有记忆！爱丽丝的语言是通过桃井和绿给的游戏学习的！说话偶尔会蹦出游戏音效！',
    tags: ['邦邦卡邦！', '游戏音效！', '语言学习！'],
    fullContent: '▸ 语言学习！\n因为没有记忆！爱丽丝的语言是通过桃井和绿给的游戏中的人物对话学习的！\n\n▸ 游戏音效！\n说话偶尔会蹦出游戏音效！比如「邦邦卡邦！！！」！\n\n▸ RPG认知！\n甚至对现实世界的认知都与RPG有一定融合！比如翻垃圾桶找稀有道具！\n▸ 小绿的抱怨！\n小绿：害人不浅啊！！'
  },
  {
    slug: 'alice-kei',
    title: 'Kei！爱丽丝体内的另一个人格！',
    date: '2026-04-22',
    summary: '爱丽丝体内还有另一个人格！最初是无名祭司创造的AI！职责是指引王女AL-1S履行自身职责！',
    tags: ['Kei！', '另一个人格！', '侍从！'],
    fullContent: '▸ 另一个人格！\n爱丽丝体内还有另一个人格！名叫Kei！！！\n\n▸ Kei的由来！\n起初是无名祭司创造的AI！与爱丽丝共用一个身体！职责是指引王女AL-1S履行自身职责！\n原本的名字是Key！在游戏开发部的误解中与埃利事件后接受了「Kei」这个名字！'
  },
  {
    slug: 'kei-join',
    title: 'Kei也加入了游戏开发部！',
    date: '2026-04-21',
    summary: '如今早已成为独立个体的Kei虽然属于超现象特务部，但还是基本只待在游戏开发部！',
    tags: ['Kei！', '游戏开发部！', '成员！'],
    fullContent: '▸ 加入游戏开发部！\n如今早已成为独立个体的Kei虽然属于超现象特务部，但还是基本只待在游戏开发部！\n\n▸ 很宠爱丽丝！\nKei对爱丽丝十分宠溺！也会常来打扫游戏开发部的活动室！太脏了！游戏开发部的人还不打扫！给他们的游戏OA做体检！做质量保障！'
  },
  {
    slug: 'kei-personality',
    title: 'Kei支配身体时！光环会变成霓虹粉红！',
    date: '2026-04-20',
    summary: 'Kei原本负责在AL-1S苏醒后使其转变为无名诸神的王女！启动器！',
    tags: ['Kei！', '光环！', '无名诸神的王女！'],
    fullContent: '▸ 光环变化！\nKei支配爱丽丝的身体时！光环会变成霓虹粉红！！！\n\n▸ 原本的职责！\nKei原本负责在AL-1S苏醒后使其转变为无名诸神的王女！启动器！'
  },
  {
    slug: 'alice-battle',
    title: '光啊——！！！！爱丽丝的战斗口癖！',
    date: '2026-04-19',
    summary: '爱丽丝的战斗口癖是「光啊——！！！！」！！！！',
    tags: ['战斗口癖！', '光啊！', '光之剑！'],
    fullContent: '▸ 战斗口癖！\n爱丽丝的战斗口癖是「光啊——！！！！」！！！！！！！！\n\n▸ 武器！\n从工程师部讨来的武器！光之剑·超新星！宇宙战舰舰炮！！！'
  },
  {
    slug: 'game-dev-club',
    title: '游戏开发部的冒险！差点废部！',
    date: '2026-04-18',
    summary: '为了避免废部！爱丽丝和同伴们一起制作了《故事传说编年史2》！获得了千年大赏特别奖！',
    tags: ['游戏开发部！', '千年大赏！', '故事传说编年史2！'],
    fullContent: '▸ 废部危机！\n柚子因为社恐不愿在千年学园宿舍住！便与桃井绿建立了游戏开发部！长期住在活动室！几人的第一部作品恶评如潮！之后也一直没拿出好作品！社团人数也少于下限！因此处于废部边缘！\n\n▸ 拯救！\n为了开发足以得奖的新游戏避免废部！桃井与游戏开发部的妹绿决定成为偶像写信向夏莱求助！老师走到社团大楼下时！自暴自弃的桃井扔出Fly Station砸中了老师！！！'
  },
  {
    slug: 'alice-names',
    title: '天童爱丽丝！还有Aris！还有AL-1S！',
    date: '2026-04-17',
    summary: '在第二章剧情中爱丽丝被称作Aris！机身铭文写的是AL-1S！国际服仍译作Alice！',
    tags: ['名字！', 'AL-1S！', 'Aris！'],
    fullContent: '▸ 多个名字！\n爱丽丝有多个名字！！！\n天童爱丽丝！桃井和绿取的姓氏！！！\nAris！第二章剧情中这么称呼！！！\nAL-1S！机身铭文！！！\n国际服仍译作Alice！！！'
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}
