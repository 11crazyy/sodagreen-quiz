import { motion } from 'framer-motion'
import type { SongVector } from '../data/songs'
import { dimensionLabels } from '../data/songs'
import type { MatchResult } from '../lib/matching'

interface Props {
  result: MatchResult
}

const DIMENSIONS: (keyof SongVector)[] = [
  'melancholy', 'warmth', 'intensity', 'whimsy',
  'narrative', 'rebellion', 'nature', 'intimacy',
]

export function DimensionBars({ result }: Props) {
  const { song, topDimensions } = result

  return (
    <div className="space-y-2.5">
      <p className="text-xs text-ink-500 tracking-wider mb-3">契合维度</p>
      {topDimensions.map((dim, i) => {
        const songVal = song.vector[dim.key]
        const label = dimensionLabels[dim.key]
        return (
          <div key={dim.key} className="flex items-center gap-3">
            <span className="text-xs text-ink-300 w-10 flex-shrink-0 text-right">
              {label}
            </span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    dim.key === 'warmth' || dim.key === 'nature'
                      ? 'linear-gradient(90deg, rgba(208, 190, 112, 0.4), rgba(208, 190, 112, 0.7))'
                      : dim.key === 'intensity' || dim.key === 'rebellion'
                        ? 'linear-gradient(90deg, rgba(248, 171, 49, 0.4), rgba(248, 171, 49, 0.7))'
                        : 'linear-gradient(90deg, rgba(180, 173, 160, 0.4), rgba(180, 173, 160, 0.7))',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${songVal * 100}%` }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
