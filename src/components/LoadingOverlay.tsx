import { motion, AnimatePresence } from "framer-motion";

interface LoadingOverlayProps {
  isLoading: boolean;
}

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Spinning Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                ease: "linear",
                repeat: Infinity,
              }}
              className="relative w-20 h-20"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 border-[3px] border-neutral-200 rounded-full"></div>
              {/* Spinning segment */}
              <div className="absolute inset-0 border-[3px] border-transparent border-t-neutral-900 border-r-neutral-900 rounded-full"></div>
            </motion.div>

            {/* Loading text with pulse */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1"
            >
              <span className="font-ubuntu text-neutral-900 text-base tracking-[0.3em] uppercase font-medium">
                Loading
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-neutral-900"
              >
                ...
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
