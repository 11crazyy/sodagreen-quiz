import type { SongVector } from './songs'

export interface QuestionOption {
  text: string
  weights: Partial<SongVector>
}

export interface Question {
  id: number
  text: string
  context: string
  options: QuestionOption[]
}

export const questions: Question[] = [
  {
    id: 1,
    context: '你走进政大后山的那片森林，台北的喧嚣在身后渐远。',
    text: '最先吸引你注意的是什么声音？',
    options: [
      {
        text: '风吹过树叶的沙沙声，像谁在耳边轻轻说话',
        weights: { nature: 0.15, whimsy: 0.1 },
      },
      {
        text: '远处溪流的潺潺水声，不急不缓，像时间流过',
        weights: { nature: 0.10, melancholy: 0.10, warmth: 0.05 },
      },
      {
        text: '脚下落叶被踩碎的细微声响，只有安静的人才听得见',
        weights: { intimacy: 0.15, melancholy: 0.10 },
      },
      {
        text: '不知哪里传来的鸟鸣，像森林在排练一场音乐会',
        weights: { whimsy: 0.15, nature: 0.10 },
      },
    ],
  },
  {
    id: 2,
    context: '一个很久不见的朋友，看着你说了一句：「你变了。」',
    text: '你心里的第一个念头是什么？',
    options: [
      {
        text: '「对，我变了，而且这是我自己的选择」',
        weights: { rebellion: 0.15, intensity: 0.10 },
      },
      {
        text: '「是啊...其实有时候我也会怀念从前的自己」',
        weights: { melancholy: 0.15, intimacy: 0.10 },
      },
      {
        text: '「每个人都会变啊，这不是很正常的事吗」',
        weights: { narrative: 0.15, warmth: 0.10 },
      },
      {
        text: '「那你倒是说说看，我哪里变了？」——带着一点好奇和不服',
        weights: { whimsy: 0.10, intensity: 0.10, intimacy: 0.05 },
      },
    ],
  },
  {
    id: 3,
    context: '一个没有任何安排的周末早晨，阳光从窗帘缝隙漏进来。',
    text: '你最想怎样度过这一天？',
    options: [
      {
        text: '不紧不慢地做一顿早餐，泡杯咖啡，享受一个人的时间',
        weights: { warmth: 0.15, intimacy: 0.10 },
      },
      {
        text: '背上包去郊外走走，看看山或海，呼吸不一样的空气',
        weights: { nature: 0.15, whimsy: 0.10 },
      },
      {
        text: '窝在床上看书或刷剧，外面的世界今天与我无关',
        weights: { intimacy: 0.15, melancholy: 0.05 },
      },
      {
        text: '约上朋友去一个从来没去过的地方，今天适合探险',
        weights: { whimsy: 0.15, rebellion: 0.10, intensity: 0.05 },
      },
    ],
  },
  {
    id: 4,
    context: '深夜里，你的手机随机播放到了一首让你停下手边事的歌。',
    text: '让你最近一次鼻酸或眼眶发热，是因为什么？',
    options: [
      {
        text: '看了一部电影，里面某个角色的命运让我久久无法释怀',
        weights: { narrative: 0.15, melancholy: 0.10 },
      },
      {
        text: '想起了某个已经不在身边，或者再也见不到的人',
        weights: { melancholy: 0.15, intimacy: 0.10 },
      },
      {
        text: '被一段旋律或几句歌词击中，说不清为什么就是想哭',
        weights: { intensity: 0.15, melancholy: 0.10 },
      },
      {
        text: '其实不太会让情绪泛滥，更习惯把它收好然后继续往前走',
        weights: { rebellion: 0.10, warmth: 0.05 },
      },
    ],
  },
  {
    id: 5,
    context: '一个神秘的声音对你说：你可以拥有一种超能力——但只能选一种。',
    text: '你会选什么？',
    options: [
      {
        text: '听懂世界上所有语言，包括风吹过树叶时它在说什么',
        weights: { whimsy: 0.15, nature: 0.10 },
      },
      {
        text: '回到过去的某个时刻，不是为了改变什么，只是想再感受一次',
        weights: { melancholy: 0.15, narrative: 0.10 },
      },
      {
        text: '触碰一个人就能让他感到平静和温暖，像冬日里的热茶',
        weights: { warmth: 0.15, intimacy: 0.10 },
      },
      {
        text: '看穿所有的谎言与伪装，这世界到底有多少真话',
        weights: { rebellion: 0.15, intensity: 0.10 },
      },
    ],
  },
  {
    id: 6,
    context: '你听到有人在讨论「什么该做、什么不该做」，各种规则被一条条列出来。',
    text: '你对「规则」的态度，最接近哪一种？',
    options: [
      {
        text: '规则存在的首要意义就是被质疑和打破，不然哪来的进步',
        weights: { rebellion: 0.15, intensity: 0.10 },
      },
      {
        text: '大部分规则有它的道理，但不合理的规则不该被动接受',
        weights: { narrative: 0.15, rebellion: 0.05 },
      },
      {
        text: '规则给人安全感，有明确的方向我才知道该做什么',
        weights: { warmth: 0.15 },
      },
      {
        text: '规则是什么？我一直活在自己的逻辑体系里，而且运行良好',
        weights: { whimsy: 0.15, intimacy: 0.10 },
      },
    ],
  },
  {
    id: 7,
    context: '在一段对你来说很重要的关系里——不管是友情、爱情还是亲情。',
    text: '你最珍视的东西是什么？',
    options: [
      {
        text: '即使两个人都不说话，空气也不会尴尬的那种默契',
        weights: { intimacy: 0.15, warmth: 0.10 },
      },
      {
        text: '一起经历了风雨和低谷之后，还愿意站在彼此身边',
        weights: { narrative: 0.15, warmth: 0.10 },
      },
      {
        text: '对方能看到并欣赏你身上最不一样、最「怪」的地方',
        weights: { whimsy: 0.15, intimacy: 0.10 },
      },
      {
        text: '互相激发、互相成就，让彼此成为更好的人',
        weights: { intensity: 0.15, warmth: 0.10 },
      },
    ],
  },
  {
    id: 8,
    context: '你在整理旧物时翻到一张泛黄的合影，照片里的人笑得灿烂。',
    text: '你的第一个念头是什么？',
    options: [
      {
        text: '「那时候真好啊...」——然后陷入了短暂的出神',
        weights: { melancholy: 0.15, narrative: 0.10 },
      },
      {
        text: '「从那时候到现在，我到底走了多远的路啊」——感慨里带着一点骄傲',
        weights: { narrative: 0.15, intensity: 0.10 },
      },
      {
        text: '微笑着把照片放回去，心想：「一切都值得」',
        weights: { warmth: 0.15, narrative: 0.05 },
      },
      {
        text: '「哇这个造型/表情也太好笑了吧」——然后拍照发给了当事人',
        weights: { whimsy: 0.15, rebellion: 0.05 },
      },
    ],
  },
  {
    id: 9,
    context: '如果把你的人生写成一首歌，前奏响起时，你希望听众听到的是什么？',
    text: '你希望这首歌的开头是怎样的？',
    options: [
      {
        text: '一段安静的钢琴独奏，只有几个简单的音符，像深夜里的自言自语',
        weights: { intimacy: 0.15, melancholy: 0.10 },
      },
      {
        text: '管弦乐齐声轰鸣，从小节第一拍就抓住所有人的注意力',
        weights: { intensity: 0.15, rebellion: 0.10 },
      },
      {
        text: '轻快的木吉他扫弦，带着清晨阳光和草地上的露水气息',
        weights: { warmth: 0.15, nature: 0.10 },
      },
      {
        text: '一段不规则节拍的合成器音效，让人猜不透后面的旋律会怎样走',
        weights: { whimsy: 0.15, intensity: 0.10 },
      },
    ],
  },
  {
    id: 10,
    context: '这趟旅程快要结束了。你翻开一本苏打绿的歌词本，你想让最后这句话——',
    text: '成为你接下来很长一段时间的陪伴。你会选哪句？',
    options: [
      {
        text: '「没有不会淡的疤，没有不会好的伤」——我需要被治愈',
        weights: { warmth: 0.10, intimacy: 0.05, melancholy: 0.05 },
      },
      {
        text: '「生命必须有裂缝，阳光才照得进来」——我需要重新理解一些事',
        weights: { intensity: 0.10, narrative: 0.10 },
      },
      {
        text: '「天空就算不蓝，或许还有彩虹」——我想换个角度看世界',
        weights: { whimsy: 0.10, nature: 0.05, warmth: 0.05 },
      },
      {
        text: '「狂热地追求，狂热地挣脱，狂热地活着」——我需要一点燃料',
        weights: { rebellion: 0.10, intensity: 0.10 },
      },
    ],
  },
]
