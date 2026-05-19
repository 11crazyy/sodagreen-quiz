import { useState, useCallback, useRef } from 'react'
import type { MatchResult } from '../lib/matching'
import { computeMatch } from '../lib/matching'
import { questions } from '../data/questions'
import { track } from '../lib/analytics'

export type QuizPhase = 'cover' | 'quiz' | 'revealing' | 'result'

const TOTAL = questions.length

export interface QuizState {
  phase: QuizPhase
  currentQuestion: number // 0-based, 0 to TOTAL-1
  answers: number[] // option indices for each question
  matchResult: { top: MatchResult; top3: MatchResult[] } | null
  direction: 'forward' | 'back'
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>({
    phase: 'cover',
    currentQuestion: 0,
    answers: [],
    matchResult: null,
    direction: 'forward',
  })

  const hasTrackedResult = useRef(false)

  const start = useCallback(() => {
    track.quizStart()
    setState((s) => ({ ...s, phase: 'quiz', currentQuestion: 0, answers: [], direction: 'forward' }))
  }, [])

  const answer = useCallback(
    (optionIndex: number) => {
      track.questionAnswer(state.currentQuestion + 1, optionIndex)

      setState((s) => {
        const newAnswers = [...s.answers, optionIndex]

        if (s.currentQuestion + 1 >= TOTAL) {
          // Compute match
          const weights = newAnswers.map(
            (ans, i) => questions[i].options[ans].weights
          )
          const result = computeMatch(weights)
          track.quizComplete(result.top.song.id, result.top.song.title, result.top3.map((r) => r.song.id))

          return {
            ...s,
            answers: newAnswers,
            matchResult: result,
            phase: 'revealing',
            direction: 'forward',
          }
        }

        return {
          ...s,
          answers: newAnswers,
          currentQuestion: s.currentQuestion + 1,
          direction: 'forward',
        }
      })
    },
    [state.currentQuestion]
  )

  const reveal = useCallback(() => {
    setState((s) => ({ ...s, phase: 'result' }))
  }, [])

  const back = useCallback(() => {
    setState((s) => {
      if (s.phase === 'quiz' && s.currentQuestion > 0) {
        return {
          ...s,
          currentQuestion: s.currentQuestion - 1,
          answers: s.answers.slice(0, -1),
          direction: 'back',
        }
      }
      return s
    })
  }, [])

  const restart = useCallback(() => {
    hasTrackedResult.current = false
    setState({
      phase: 'cover',
      currentQuestion: 0,
      answers: [],
      matchResult: null,
      direction: 'forward',
    })
  }, [])

  const currentQuestionData = state.phase === 'quiz' ? questions[state.currentQuestion] : null
  const progress = state.phase === 'quiz' ? state.currentQuestion / TOTAL : 0

  return {
    ...state,
    currentQuestionData,
    progress,
    totalQuestions: TOTAL,
    start,
    answer,
    reveal,
    back,
    restart,
  }
}
