import { motion } from 'framer-motion'

interface Props {
  current: number
  total: number
}

export function ProgressIndicator({ current, total }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {Array.from({ length: total }).map((_, i) => {
        const isDone = i < current
        const isCurrent = i === current

        return (
          <motion.div
            key={i}
            className="relative flex items-center"
            initial={false}
            animate={{
              width: isCurrent ? 28 : 8,
              height: 8,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={false}
              animate={{
                backgroundColor: isDone
                  ? 'rgba(208, 190, 112, 0.6)' // spring-300
                  : isCurrent
                    ? 'rgba(208, 190, 112, 0.9)'
                    : 'rgba(255, 255, 255, 0.1)',
                scale: isCurrent ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            />
            {isCurrent && (
              <motion.div
                className="absolute inset-0 rounded-full bg-spring-300"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
