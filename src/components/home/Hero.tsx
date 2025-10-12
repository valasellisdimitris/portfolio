import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col md:flex-row items-center min-h-[400px] md:min-h-[600px] px-4 sm:px-8 md:px-12 lg:px-[120px] shadow-2xs w-full"
    >
      <section className="flex flex-col items-start w-full">
        <motion.h1
          variants={itemVariants}
          className="font-ubuntu text-neutral-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 font-bold leading-tight tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Dimitris
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-neutral-900"
          >
            Valasellis
          </motion.span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="font-ubuntu text-neutral-600 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl"
        >
          Next.js front-end developer that makes ideas become{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="font-semibold text-neutral-900"
          >
            pixel-perfect web experiences
          </motion.span>
          .
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="w-[60px] h-[2px] bg-neutral-900 mb-8"
        ></motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="#projects"
              className="font-ubuntu text-white bg-neutral-900 py-3 px-6 sm:py-4 sm:px-10 hover:bg-neutral-800 duration-200 ease-in-out transition-all text-sm sm:text-base font-medium tracking-wide block text-center"
            >
              View Projects
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="#contact"
              className="font-ubuntu text-neutral-900 bg-transparent border-2 border-neutral-900 py-3 px-6 sm:py-4 sm:px-10 hover:bg-neutral-900 hover:text-white duration-200 ease-in-out transition-all text-sm sm:text-base font-medium tracking-wide block text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
