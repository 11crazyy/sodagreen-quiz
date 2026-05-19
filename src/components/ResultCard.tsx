import { forwardRef } from 'react'
import type { MatchResult } from '../lib/matching'
import { DimensionBars } from './DimensionBars'
import { dimensionLabels } from '../data/songs'

interface Props {
  result: MatchResult
}

export const ResultCard = forwardRef<HTMLDivElement, Props>(
  function ResultCard({ result }, ref) {
    const { song, topDimensions } = result

    // Album color mapping
    const eraColors: Record<string, string> = {
      early: 'from-emerald-900/40 to-emerald-950/60',
      vivaldi: 'from-amber-900/40 to-amber-950/60',
      mid: 'from-rose-900/40 to-rose-950/60',
      oaeen: 'from-violet-900/40 to-violet-950/60',
    }

    return (
      <div
        ref={ref}
        className={`p-6 rounded-2xl bg-gradient-to-b ${eraColors[song.era] || eraColors.vivaldi}
                    border border-white/10 backdrop-blur-sm`}
      >
        {/* Header */}
        <div className="text-center mb-5">
          <p className="text-xs text-ink-400 tracking-widest mb-1">你的命定之歌</p>
          <h3 className="font-serif text-3xl font-black text-spring-200">
            {song.title}
          </h3>
          <p className="text-xs text-ink-400 mt-1">
            {song.album} · {song.year}
          </p>
        </div>

        {/* Quote */}
        <blockquote className="text-center italic text-spring-300/80 text-sm mb-5 font-serif">
          「{song.quote}」
        </blockquote>

        {/* Description */}
        <p className="text-xs text-ink-300 leading-relaxed mb-5 text-center">
          {song.description}
        </p>

        {/* Top dimensions */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {topDimensions.map((dim) => (
            <span
              key={dim.key}
              className="px-2.5 py-1 rounded-full text-xs
                         bg-white/5 border border-white/10 text-ink-300"
            >
              {dim.label}
            </span>
          ))}
        </div>

        {/* Brand */}
        <div className="text-center pt-3 border-t border-white/5">
          <p className="text-[10px] text-ink-600 tracking-wider">
            苏打绿人格测验 · 测测你的命定之歌
          </p>
        </div>
      </div>
    )
  }
)
