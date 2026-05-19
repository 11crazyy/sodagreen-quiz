import { v4 as uuidv4 } from 'uuid'

const SESSION_KEY = 'sg_quiz_session'
const API_BASE = '/api/track'

function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY)
  if (!id) {
    id = uuidv4()
    sessionStorage.setItem(SESSION_KEY, id)
  }
  return id
}

async function send(event: string, data: Record<string, unknown> = {}) {
  try {
    await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        session: getSessionId(),
        timestamp: Date.now(),
        referrer: document.referrer || null,
        ...data,
      }),
      // Fire-and-forget, don't block navigation
      keepalive: true,
    })
  } catch {
    // Silent fail — analytics should never break UX
  }
}

export const track = {
  pageView() {
    send('page_view')
  },

  quizStart() {
    send('quiz_start')
  },

  questionAnswer(questionId: number, optionIndex: number) {
    send('question_answer', { questionId, optionIndex })
  },

  quizComplete(songId: string, songTitle: string, top3Ids: string[]) {
    send('quiz_complete', { songId, songTitle, top3Ids })
  },

  resultShare(method: 'native' | 'copy') {
    send('result_share', { method })
  },

  resultView(songId: string) {
    send('result_view', { songId })
  },
}
