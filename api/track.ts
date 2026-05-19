import type { VercelRequest, VercelResponse } from '@vercel/node'

// Simple in-memory store. For production, replace with Vercel KV:
// import { kv } from '@vercel/kv'

interface TrackEvent {
  event: string
  session: string
  timestamp: number
  referrer?: string | null
  [key: string]: unknown
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // GET: return basic stats
  if (req.method === 'GET') {
    // In production, query KV store here
    return res.json({
      message: 'Analytics endpoint active. Configure Vercel KV for data storage.',
    })
  }

  // POST: record an event
  if (req.method === 'POST') {
    const payload = req.body as TrackEvent

    if (!payload?.event || !payload?.session) {
      return res.status(400).json({ error: 'Missing event or session' })
    }

    const { event, session, timestamp, ...data } = payload

    // Log to Vercel function logs (visible in Vercel dashboard)
    console.log(`[analytics] ${event} | session=${session.slice(0, 8)} |`, JSON.stringify(data))

    // TODO: store in Vercel KV
    // const key = `analytics:${event}:${new Date(timestamp).toISOString().split('T')[0]}:${session.slice(0, 8)}`
    // await kv.set(key, { event, session, timestamp, ...data })
    // await kv.expire(key, 60 * 60 * 24 * 90) // 90 day retention

    return res.json({ ok: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
