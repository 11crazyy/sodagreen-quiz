import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MatchResult } from '../lib/matching'

interface Props {
  result: { top: MatchResult; top3: MatchResult[] }
  onReveal: () => void
}

const REVEAL_STAGES = [
  { key: 'hint', duration: 2500 },
  { key: 'title', duration: 1500 },
  { key: 'full', duration: 0 },
] as const

export function ResultReveal({ result, onReveal }: Props) {
  const [stage, setStage] = useState<number>(0)

  useEffect(() => {
    if (stage < REVEAL_STAGES.length - 1) {
      const timer = setTimeout(
        () => setStage((s) => s + 1),
        REVEAL_STAGES[stage].duration
      )
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(onReveal, 1000)
      return () => clearTimeout(timer)
    }
  }, [stage, onReveal])

  const { top } = result

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center">
      <AnimatePresence mode="wait">
        {stage === 0 && (
          /* Stage 1: Lyric hint */
          <motion.div
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              className="text-ink-500 text-xs tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              你与这首歌的共鸣...
            </motion.p>
            <motion.blockquote
              className="font-serif text-2xl md:text-3xl text-spring-300 leading-relaxed italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              「{top.song.quote}」
            </motion.blockquote>
            <motion.div
              className="flex justify-center gap-1 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-spring-400/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-spring-400/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-spring-400/20" />
            </motion.div>
          </motion.div>
        )}

        {stage === 1 && (
          /* Stage 2: Song title reveal */
          <motion.div
            key="title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4"
          >
            <p className="text-sm text-ink-400 tracking-widest">你的命定之歌</p>
            <h1 className="font-serif text-5xl md:text-6xl font-black text-shadow-soft
                           bg-gradient-to-b from-spring-100 to-spring-400 bg-clip-text text-transparent">
              {top.song.title}
            </h1>
            <p className="text-ink-400 text-sm">
              {top.song.album} · {top.song.year}
            </p>
          </motion.div>
        )}

        {stage >= 2 && (
          /* Stage 3: Full insight */
          <motion.div
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm text-ink-400 tracking-widest mb-2">你的命定之歌</p>
              <h2 className="font-serif text-4xl md:text-5xl font-black bg-gradient-to-b from-spring-100 to-spring-400 bg-clip-text text-transparent">
                {top.song.title}
              </h2>
              <p className="text-ink-500 text-sm mt-1">
                {top.song.album} · {top.song.year}
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base text-ink-200 leading-relaxed max-w-md mx-auto"
            >
              {top.song.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
