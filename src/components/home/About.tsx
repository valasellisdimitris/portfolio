import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center min-h-[300px] md:min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-[120px] bg-white w-full"
    >
      <section className="flex flex-col items-start max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0.1, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className="font-ubuntu text-neutral-900 text-3xl sm:text-4xl md:text-5xl mb-4 font-bold tracking-tight"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className="h-[2px] bg-neutral-900 mb-6"
        ></motion.div>
        
        <motion.p
          initial={{ opacity: 0.1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          className="font-ubuntu text-neutral-600 text-lg sm:text-xl mb-5 leading-relaxed"
        >
          I&apos;m <span className="font-semibold text-neutral-900">Dimitris Valasellis</span>, a passionate Next.js front-end developer
          dedicated to transforming ideas into pixel-perfect, high-performance
          web experiences. With a keen eye for detail and a love for clean,
          maintainable code, I specialize in building responsive, accessible,
          and visually engaging interfaces that delight users and drive results.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0.1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
          className="font-ubuntu text-neutral-600 text-lg sm:text-xl leading-relaxed"
        >
          My approach combines technical expertise with creativity, ensuring
          every project not only looks great but also performs flawlessly.
          Whether collaborating with designers or working independently, I
          strive to deliver solutions that exceed expectations and help
          businesses grow in the digital world.
        </motion.p>
      </section>
    </motion.div>
  );
}
