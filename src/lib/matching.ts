import type { Song, SongVector } from '../data/songs'
import { songs, dimensionLabels } from '../data/songs'

const DIMENSIONS: (keyof SongVector)[] = [
  'melancholy', 'warmth', 'intensity', 'whimsy',
  'narrative', 'rebellion', 'nature', 'intimacy',
]

function dotProduct(a: SongVector, b: Partial<SongVector>): number {
  return DIMENSIONS.reduce((sum, d) => sum + a[d] * (b[d] ?? 0), 0)
}

function magnitude(v: SongVector): number {
  return Math.sqrt(DIMENSIONS.reduce((sum, d) => sum + v[d] * v[d], 0))
}

function normalizeWeights(weights: Partial<SongVector>[]): SongVector {
  const result: SongVector = {
    melancholy: 0, warmth: 0, intensity: 0, whimsy: 0,
    narrative: 0, rebellion: 0, nature: 0, intimacy: 0,
  }
  for (const w of weights) {
    for (const d of DIMENSIONS) {
      result[d] += w[d] ?? 0
    }
  }
  // Clamp to [0, 1] range
  for (const d of DIMENSIONS) {
    result[d] = Math.max(0, Math.min(1, result[d]))
  }
  return result
}

function cosineSimilarity(a: SongVector, b: SongVector): number {
  const dot = dotProduct(a, b)
  const magA = magnitude(a)
  const magB = magnitude(b)
  if (magA === 0 || magB === 0) return 0
  return dot / (magA * magB)
}

export interface MatchResult {
  song: Song
  score: number
  topDimensions: { key: keyof SongVector; label: string; value: number }[]
}

export function computeMatch(answeredWeights: Partial<SongVector>[]): {
  top: MatchResult
  top3: MatchResult[]
} {
  const userVector = normalizeWeights(answeredWeights)

  const scored = songs.map((song) => ({
    song,
    score: cosineSimilarity(userVector, song.vector),
  }))

  scored.sort((a, b) => b.score - a.score)

  const top3 = scored.slice(0, 3).map(({ song, score }) => {
    // Find dimensions where user and song both score high
    const dims = DIMENSIONS.map((d) => ({
      key: d,
      label: dimensionLabels[d],
      value: userVector[d] * song.vector[d],
    }))
    dims.sort((a, b) => b.value - a.value)

    return {
      song,
      score,
      topDimensions: dims.slice(0, 3),
    }
  })

  return { top: top3[0], top3 }
}
