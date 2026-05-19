import { useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useQuiz } from './hooks/useQuiz'
import { CoverPage } from './components/CoverPage'
import { QuizQuestion } from './components/QuizQuestion'
import { ResultReveal } from './components/ResultReveal'
import { ResultCard } from './components/ResultCard'
import { DimensionBars } from './components/DimensionBars'
import { ShareSheet } from './components/ShareSheet'
import { track } from './lib/analytics'

export default function App() {
  const quiz = useQuiz()
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    track.pageView()
  }, [])

  // Track result view after reveal settles
  useEffect(() => {
    if (quiz.phase === 'result' && quiz.matchResult) {
      const timer = setTimeout(() => {
        track.resultView(quiz.matchResult!.top.song.id)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [quiz.phase, quiz.matchResult])

  return (
    <div className="min-h-dvh max-w-lg mx-auto relative overflow-hidden">
      <AnimatePresence mode="wait">
        {quiz.phase === 'cover' && (
          <CoverPage key="cover" onStart={quiz.start} />
        )}

        {quiz.phase === 'quiz' && quiz.currentQuestionData && (
          <QuizQuestion
            key={`q-${quiz.currentQuestion}`}
            question={quiz.currentQuestionData}
            questionIndex={quiz.currentQuestion}
            totalQuestions={quiz.totalQuestions}
            onAnswer={quiz.answer}
            direction={quiz.direction}
          />
        )}

        {quiz.phase === 'revealing' && quiz.matchResult && (
          <ResultReveal
            key="revealing"
            result={quiz.matchResult}
            onReveal={quiz.reveal}
          />
        )}

        {quiz.phase === 'result' && quiz.matchResult && (
          <div key="result" className="min-h-dvh flex flex-col px-5 py-8">
            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
              {/* Full result card */}
              <ResultCard ref={cardRef} result={quiz.matchResult.top} />

              {/* Dimension visualization */}
              <div className="w-full max-w-sm">
                <DimensionBars result={quiz.matchResult.top} />
              </div>

              {/* Sub-matches */}
              <div className="w-full max-w-sm">
                <p className="text-xs text-ink-500 tracking-wider mb-3">
                  次匹配歌曲
                </p>
                <div className="flex gap-2">
                  {quiz.matchResult.top3.slice(1).map((r) => (
                    <span
                      key={r.song.id}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5
                                 text-xs text-ink-400"
                    >
                      {r.song.title}
                      <span className="text-ink-600 ml-1">
                        {Math.round(r.score * 100)}%
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Share section */}
            <div className="py-6">
              <ShareSheet result={quiz.matchResult.top} cardRef={cardRef} />
            </div>

            {/* Restart */}
            <button
              onClick={quiz.restart}
              className="w-full py-3 text-xs text-ink-500 hover:text-ink-400
                         transition-colors pb-8"
            >
              重新测验
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
