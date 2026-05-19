import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Question } from '../data/questions'

interface Props {
  question: Question
  questionIndex: number
  totalQuestions: number
  onAnswer: (optionIndex: number) => void
  direction: 'forward' | 'back'
}

export function QuizQuestion({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  direction,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  const handleSelect = useCallback(
    (index: number) => {
      if (selected !== null) return
      setSelected(index)
      setTimeout(() => {
        onAnswer(index)
        setSelected(null)
      }, 300)
    },
    [selected, onAnswer]
  )

  const slideVariants = {
    enter: (d: string) => ({
      x: d === 'forward' ? 40 : -40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: string) => ({
      x: d === 'forward' ? -40 : 40,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-dvh flex flex-col px-5 py-8">
      {/* Question counter */}
      <div className="text-center">
        <span className="text-xs tracking-widest text-ink-500 uppercase">
          第 {questionIndex + 1} / {totalQuestions} 题
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-0.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-spring-400/60 to-spring-300/60 rounded-full"
          initial={{ width: `${((questionIndex) / totalQuestions) * 100}%` }}
          animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Question content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={question.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="flex-1 flex flex-col justify-center mt-6 mb-8"
        >
          {/* Context text */}
          <p className="text-sm text-ink-400 italic leading-relaxed mb-6 font-light">
            {question.context}
          </p>

          {/* Question text */}
          <h2 className="text-xl md:text-2xl font-serif font-semibold text-ink-100 leading-relaxed mb-8">
            {question.text}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => {
              const isSelected = selected === i
              return (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  onClick={() => handleSelect(i)}
                  className={`option-card ${isSelected ? 'selected' : ''}`}
                  disabled={selected !== null}
                >
                  <span className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-xs text-ink-400 mt-0.5">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm md:text-base text-ink-200 leading-relaxed">
                      {option.text}
                    </span>
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Back hint */}
      {questionIndex > 0 && (
        <p className="text-center text-xs text-ink-600 pb-4">
          左滑或点击浏览器返回可修改上一题
        </p>
      )}
    </div>
  )
}
