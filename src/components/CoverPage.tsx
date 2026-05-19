import { motion } from 'framer-motion'

interface Props {
  onStart: () => void
}

export function CoverPage({ onStart }: Props) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center">
      {/* Decorative top ornament */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-8 text-6xl select-none"
      >
        🍃
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-serif text-4xl md:text-5xl font-bold text-shadow-soft
                   bg-gradient-to-b from-spring-200 to-spring-400 bg-clip-text text-transparent"
      >
        你的命定之歌
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-4 text-lg md:text-xl text-ink-300 font-light tracking-wider"
      >
        苏打绿 · 人格测验
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 max-w-sm text-sm text-ink-400 leading-relaxed"
      >
        10 道沉浸式题目，穿越苏打绿从同名专辑到鱼丁糸的音乐世界，
        找到最契合你灵魂的那一首歌。
      </motion.p>

      {/* Start button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="mt-12 btn-primary text-lg px-10 py-4 shadow-lg shadow-warm-500/20"
      >
        开始测验
      </motion.button>

      {/* Footer info */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="mt-6 text-xs text-ink-600"
      >
        约需 3 分钟 · 匿名收集使用数据
      </motion.p>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-auto pb-8 pt-12"
      >
        <div className="flex gap-2 items-center text-ink-600 text-xs tracking-widest">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
          <span>戴上耳机 · 安静作答</span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ink-600 to-transparent" />
        </div>
      </motion.div>
    </div>
  )
}
