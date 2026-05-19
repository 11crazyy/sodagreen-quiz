import { useState } from 'react'
import { motion } from 'framer-motion'
import type { MatchResult } from '../lib/matching'
import { nativeShare, copyResultImage, getShareText } from '../lib/share'
import { track } from '../lib/analytics'

interface Props {
  result: MatchResult
  cardRef: React.RefObject<HTMLDivElement | null>
}

export function ShareSheet({ result, cardRef }: Props) {
  const [copied, setCopied] = useState(false)
  const [copying, setCopying] = useState(false)

  const handleCopyImage = async () => {
    if (!cardRef.current || copying) return
    setCopying(true)
    const ok = await copyResultImage(cardRef.current)
    if (ok) {
      setCopied(true)
      track.resultShare('copy')
      setTimeout(() => setCopied(false), 2000)
    }
    setCopying(false)
  }

  const handleNativeShare = async () => {
    const ok = await nativeShare('苏打绿人格测验', result.song.title)
    if (ok) track.resultShare('native')
  }

  const handleCopyText = async () => {
    await navigator.clipboard.writeText(
      getShareText(result.song.title) + ' ' + window.location.href
    )
    track.resultShare('copy')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="space-y-3 w-full max-w-sm mx-auto"
    >
      <p className="text-center text-xs text-ink-500 tracking-wider">
        分享给你的朋友
      </p>

      <div className="flex gap-3 justify-center">
        {/* Copy image card */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopyImage}
          disabled={copying}
          className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5
                     text-sm text-ink-200 hover:border-spring-400/30 hover:bg-spring-400/5
                     transition-all duration-200 disabled:opacity-50"
        >
          {copied ? '已复制 ✅' : copying ? '生成中...' : '复制结果卡片'}
        </motion.button>

        {/* Native share */}
        {typeof navigator.share !== 'undefined' && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNativeShare}
            className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5
                       text-sm text-ink-200 hover:border-spring-400/30 hover:bg-spring-400/5
                       transition-all duration-200"
          >
            系统分享
          </motion.button>
        )}
      </div>

      {/* Copy text fallback */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={handleCopyText}
        className="w-full py-2 text-xs text-ink-500 hover:text-ink-400 transition-colors"
      >
        复制文字分享
      </motion.button>
    </motion.div>
  )
}
