export interface SongVector {
  melancholy: number
  warmth: number
  intensity: number
  whimsy: number
  narrative: number
  rebellion: number
  nature: number
  intimacy: number
}

export interface Song {
  id: string
  title: string
  album: string
  year: number
  era: 'early' | 'vivaldi' | 'mid' | 'oaeen'
  vector: SongVector
  description: string
  quote: string
}

export const songs: Song[] = [
  // ===== 早期独立时期 (2005-2007) =====
  {
    id: 'pinlv',
    title: '频率',
    album: '苏打绿 同名专辑',
    year: 2005,
    era: 'early',
    vector: {
      melancholy: 0.7, warmth: 0.3, intensity: 0.5, whimsy: 0.4,
      narrative: 0.3, rebellion: 0.2, nature: 0.2, intimacy: 0.8,
    },
    description: '你的内心有一片属于自己的海域，不需要别人理解你的波长，只需要找到一个能与你共振的人。像频率一样，你在寻找的从来不是喧哗的热闹，而是那种不需多说的懂得。',
    quote: '跳动的世界里找你的频率 / 静止也不休息 / 抓住你的呼吸',
  },
  {
    id: 'feiyu',
    title: '飞鱼',
    album: '苏打绿 同名专辑',
    year: 2005,
    era: 'early',
    vector: {
      melancholy: 0.2, warmth: 0.5, intensity: 0.3, whimsy: 0.9,
      narrative: 0.4, rebellion: 0.1, nature: 0.8, intimacy: 0.3,
    },
    description: '你是一个能从日常缝隙中找到光亮的人，别人觉得你天马行空，其实你只是拒绝用沉闷的方式理解这个世界。像飞鱼跃出水面的那个瞬间，你的生活里充满了别人看不到的轻盈。',
    quote: '尽管痛苦麻痹还是那么多 / 天空就算不蓝或许还有彩虹',
  },
  {
    id: 'xiaoqingge',
    title: '小情歌',
    album: '小宇宙',
    year: 2006,
    era: 'early',
    vector: {
      melancholy: 0.3, warmth: 0.9, intensity: 0.2, whimsy: 0.3,
      narrative: 0.3, rebellion: 0.1, nature: 0.4, intimacy: 0.7,
    },
    description: '你觉得世界复杂，但你选择用最简单的方式面对它。像小情歌一样，你相信朴素的情感本身就是最大的力量——一首简单的歌，也能唱进人们心里。你的温柔不是软弱，是你选择对抗世界的方式。',
    quote: '你知道就算大雨让这座城市颠倒 / 我会给你怀抱',
  },

  // ===== 韦瓦第计划 - 春·日光 (2009) =====
  {
    id: 'riguang',
    title: '日光',
    album: '春·日光',
    year: 2009,
    era: 'vivaldi',
    vector: {
      melancholy: 0.1, warmth: 0.8, intensity: 0.3, whimsy: 0.7,
      narrative: 0.3, rebellion: 0.0, nature: 0.9, intimacy: 0.2,
    },
    description: '你是那种会在早晨散步时停下来看花的人。你的快乐不依赖宏大的事件，而是来自生活里那些安静的、被阳光照亮的瞬间。像日光一样，你的存在本身就让人觉得温暖而明亮。',
    quote: '醒在梦境上 / 梦在清晨上 / 晨在川流上 / 流在船岛下',
  },
  {
    id: 'jiaoxiangmeng',
    title: '交响梦',
    album: '春·日光',
    year: 2009,
    era: 'vivaldi',
    vector: {
      melancholy: 0.5, warmth: 0.4, intensity: 0.8, whimsy: 0.6,
      narrative: 0.5, rebellion: 0.1, nature: 0.8, intimacy: 0.4,
    },
    description: '你的情感世界像一场交响乐——宏大、复杂，每个声部都在讲述不同的事。你经常在自然的变化中找到自己情绪的镜像，一场雨、一阵风都能在你心里掀起波澜。像交响梦一样，你的内心一直在上演着壮丽的故事。',
    quote: '蛰睡了一世纪的下午 / 被你惊醒',
  },

  // ===== 韦瓦第计划 - 夏/狂热 (2009) =====
  {
    id: 'kuangre',
    title: '狂热',
    album: '夏／狂热',
    year: 2009,
    era: 'vivaldi',
    vector: {
      melancholy: 0.1, warmth: 0.1, intensity: 0.95, whimsy: 0.2,
      narrative: 0.4, rebellion: 0.9, nature: 0.2, intimacy: 0.1,
    },
    description: '你不是那种会安于现状的人。你对不公感到愤怒，对平庸感到厌倦，你的心里有一团火，时刻准备燃烧。像狂热一样，你用燃烧的方式证明自己活着——哪怕灼伤自己，也不愿冷却。',
    quote: '狂热地追求 / 狂热地挣脱 / 狂热地做梦 / 狂热地活着',
  },
  {
    id: 'taxialexiatian',
    title: '他夏了夏天',
    album: '夏／狂热',
    year: 2009,
    era: 'vivaldi',
    vector: {
      melancholy: 0.3, warmth: 0.8, intensity: 0.4, whimsy: 0.3,
      narrative: 0.9, rebellion: 0.1, nature: 0.5, intimacy: 0.4,
    },
    description: '你相信平凡日常里藏着最动人的故事。你不一定是聚光灯下的主角，但你是自己生活里最认真的编剧。像他夏了夏天里那个默默努力的人，你知道日复一日的坚持本身就是一种浪漫。',
    quote: '他从不害怕 / 从不退缩 / 他知道自己该做些什么',
  },
  {
    id: 'jinweilai',
    title: '近未来',
    album: '夏／狂热',
    year: 2009,
    era: 'vivaldi',
    vector: {
      melancholy: 0.6, warmth: 0.4, intensity: 0.6, whimsy: 0.4,
      narrative: 0.8, rebellion: 0.2, nature: 0.3, intimacy: 0.6,
    },
    description: '你总是在思考"未来会怎样"这个问题。你不满足于表面的答案，喜欢往深处挖掘，有时候会因此陷入焦虑，但这也是你最有魅力的地方——你从未停止追问。像近未来一样，你在黑暗中摸索，但始终相信前方有光。',
    quote: '终于了解 / 生命必须有裂缝 / 阳光才照得进来',
  },

  // ===== 韦瓦第计划 - 秋:故事 (2013) =====
  {
    id: 'gushi',
    title: '故事',
    album: '秋：故事',
    year: 2013,
    era: 'vivaldi',
    vector: {
      melancholy: 0.7, warmth: 0.4, intensity: 0.5, whimsy: 0.3,
      narrative: 0.95, rebellion: 0.1, nature: 0.7, intimacy: 0.5,
    },
    description: '你的人生像一本层层叠叠的书，每一章都有不同的风景。你善于回望，也善于叙事，朋友们都说你讲故事的方式特别动人。像故事一样，你把经历的每一段都变成了值得讲述的篇章，哪怕是伤痛，在你的叙述里也变成了风景。',
    quote: '这故事 / 好像是真的 / 又好像是假的 / 我好像来过 / 又好像没来过',
  },
  {
    id: 'wohaoxiangni',
    title: '我好想你',
    album: '秋：故事',
    year: 2013,
    era: 'vivaldi',
    vector: {
      melancholy: 0.95, warmth: 0.1, intensity: 0.8, whimsy: 0.1,
      narrative: 0.4, rebellion: 0.0, nature: 0.4, intimacy: 0.8,
    },
    description: '你不怕承认自己想念某个人。对你来说，思念不是脆弱的表现，而是一种诚实——对自己情感的诚实。像我好想你一样，你的情感总是浓烈而直接，不藏不掖，爱就爱了，痛就痛了，这份坦荡让人心疼也让人敬佩。',
    quote: '我好想你 / 好想你 / 却不露痕迹',
  },
  {
    id: 'shuolezaijianyihou',
    title: '说了再见以后',
    album: '秋：故事',
    year: 2013,
    era: 'vivaldi',
    vector: {
      melancholy: 0.9, warmth: 0.3, intensity: 0.5, whimsy: 0.2,
      narrative: 0.6, rebellion: 0.1, nature: 0.5, intimacy: 0.7,
    },
    description: '你比谁都明白，告别是人生的一门必修课。每次道别你都做得体面，但体面之下是汹涌的不舍。像说了再见以后，你把最深的情绪藏在了字里行间，只有同样细腻的人，才能读懂你平静表面下的暗涌。',
    quote: '说了再见以后 / 才发现再也见不到',
  },

  // ===== 韦瓦第计划 - 冬 未了 (2015) =====
  {
    id: 'tongkuaideaiyan',
    title: '痛快的哀艳',
    album: '冬 未了',
    year: 2015,
    era: 'vivaldi',
    vector: {
      melancholy: 0.8, warmth: 0.1, intensity: 0.95, whimsy: 0.2,
      narrative: 0.7, rebellion: 0.5, nature: 0.2, intimacy: 0.3,
    },
    description: '你喜欢把情绪推到极致——快乐就尽情快乐，悲伤就痛快悲伤。你不相信"适可而止"，你觉得那是对生命的不尊重。像痛快的哀艳一样，你的人生是一部气势磅礴的交响乐，即使在最黑暗的段落，也充满了壮丽的能量。',
    quote: '痛快地哀艳 / 痛快地凋谢 / 痛快地告别',
  },
  {
    id: 'xiayudeyewan',
    title: '下雨的夜晚',
    album: '冬 未了',
    year: 2015,
    era: 'vivaldi',
    vector: {
      melancholy: 0.85, warmth: 0.4, intensity: 0.4, whimsy: 0.2,
      narrative: 0.5, rebellion: 0.0, nature: 0.7, intimacy: 0.8,
    },
    description: '你在下雨天比晴天更有安全感。雨声像是给世界加了一层隔音玻璃，让你可以安心地在自己的思绪里停留。像下雨的夜晚一样，你擅长在安静中找到力量，别人觉得你安静，其实你的内心世界一直在下雨，也一直在生长。',
    quote: '就让我静静地 / 下起一场大雨 / 在你的心里',
  },
  {
    id: 'taqijuyoushoudianming',
    title: '他举起右手点名',
    album: '冬 未了',
    year: 2015,
    era: 'vivaldi',
    vector: {
      melancholy: 0.4, warmth: 0.0, intensity: 0.9, whimsy: 0.1,
      narrative: 0.7, rebellion: 0.95, nature: 0.1, intimacy: 0.1,
    },
    description: '你无法对不公视而不见。你有强烈的正义感，即使站在人群中也会发出自己的声音。像他举起右手点名一样，你的愤怒是有方向的，你的批判是有力量的——你不是在抱怨，你是在为一个更好的世界发声。',
    quote: '谁又是谁 / 谁又是谁 / 谁又是谁 / 谁是谁的谁',
  },

  // ===== 中期温暖 (2007-2011) =====
  {
    id: 'wuyulunbidemeili',
    title: '无与伦比的美丽',
    album: '无与伦比的美丽',
    year: 2007,
    era: 'mid',
    vector: {
      melancholy: 0.2, warmth: 0.9, intensity: 0.6, whimsy: 0.5,
      narrative: 0.4, rebellion: 0.1, nature: 0.8, intimacy: 0.6,
    },
    description: '你相信世界上存在超越爱情和亲情的连接——那种灵魂与灵魂之间的懂得。像无与伦比的美丽一样，你愿意为重要的人做一个追风筝的人，不是因为责任，而是因为那个人让你的世界变得更大、更美。',
    quote: '你若担心你不能飞 / 你有我的蝴蝶 / 我若担心我不能飞 / 我有你的草原',
  },
  {
    id: 'xiangxin',
    title: '相信',
    album: '无与伦比的美丽',
    year: 2007,
    era: 'mid',
    vector: {
      melancholy: 0.2, warmth: 0.8, intensity: 0.5, whimsy: 0.2,
      narrative: 0.7, rebellion: 0.3, nature: 0.3, intimacy: 0.5,
    },
    description: '你在跌倒过之后依然选择相信——相信未来、相信他人、相信自己。这不是天真，而是一种经过思考后的勇敢。像相信一样，你知道这个世界不完美，但你依然愿意对它保持期待，这份坚持是你身上最可贵的东西。',
    quote: '我会永远相信 / 最后一片落叶 / 无论什么世界 / 东风藏在眉心',
  },
  {
    id: 'nizaifannaoshenme',
    title: '你在烦恼什么',
    album: '你在烦恼什么',
    year: 2011,
    era: 'mid',
    vector: {
      melancholy: 0.5, warmth: 0.85, intensity: 0.3, whimsy: 0.2,
      narrative: 0.6, rebellion: 0.0, nature: 0.3, intimacy: 0.7,
    },
    description: '你经常充当朋友的倾听者，在他们烦恼时递上一句温暖的话。但你自己其实也有很多安静的不安。像你在烦恼什么一样，你懂得人生不需要永远正确、永远完美——有时候，承认脆弱本身就是一种治愈。',
    quote: '没有不会淡的疤 / 没有不会好的伤 / 没有不会停下来的绝望',
  },
  {
    id: 'dangwomenyiqizouguo',
    title: '当我们一起走过',
    album: '你在烦恼什么',
    year: 2011,
    era: 'mid',
    vector: {
      melancholy: 0.3, warmth: 0.9, intensity: 0.4, whimsy: 0.1,
      narrative: 0.7, rebellion: 0.0, nature: 0.2, intimacy: 0.7,
    },
    description: '你最珍惜的不是人生的高光时刻，而是那些和重要的人一起穿越低谷的日子。像当我们一起走过一样，你相信陪伴是最好的语言，共同经历的艰难比共同庆祝的喜悦更能定义一段关系。',
    quote: '有多少苦痛 / 有你和我一起度过一起承受 / 有多少快乐 / 有你和我一起享受一起感动',
  },

  // ===== 鱼丁糸时期 (2021-2023) =====
  {
    id: 'wojiuqiguai',
    title: '我就奇怪',
    album: '池堂怪谈',
    year: 2021,
    era: 'oaeen',
    vector: {
      melancholy: 0.2, warmth: 0.3, intensity: 0.5, whimsy: 0.95,
      narrative: 0.5, rebellion: 0.6, nature: 0.1, intimacy: 0.2,
    },
    description: '你从来不按常理出牌。别人觉得你"奇怪"，但你觉得"正常"才是这个世界上最无聊的东西。像我就奇怪一样，你用自己的方式活着，带着一点调皮、一点叛逆和满不在乎的潇洒——奇怪又怎样？奇怪得理直气壮。',
    quote: '我就奇怪 / 我就是奇怪 / 我就奇怪怎么了',
  },
  {
    id: 'zhongdianqidian',
    title: '终点起点',
    album: '池堂怪谈',
    year: 2021,
    era: 'oaeen',
    vector: {
      melancholy: 0.3, warmth: 0.7, intensity: 0.5, whimsy: 0.3,
      narrative: 0.8, rebellion: 0.3, nature: 0.3, intimacy: 0.5,
    },
    description: '你经历过结束，也从不惧怕重新开始。你深知人生就是一场循环——每个终点都是下一个起点。像终点起点一样，你带着走过的路、爱过的人、受过的伤，继续往前走，不回头不是因为忘记，而是因为前方还有新的故事在等你。',
    quote: '每个终点都是起点 / 每个离别都是再见',
  },
]

export const dimensionLabels: Record<keyof SongVector, string> = {
  melancholy: '忧伤',
  warmth: '温暖',
  intensity: '浓烈',
  whimsy: '灵气',
  narrative: '叙事',
  rebellion: '叛逆',
  nature: '自然',
  intimacy: '私密',
}
