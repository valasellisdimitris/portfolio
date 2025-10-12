import { motion } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.1, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center min-h-[300px] px-4 sm:px-8 md:px-12 lg:px-[120px] bg-white w-full py-16"
    >
      <section className="flex flex-col items-start max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0.1, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className="font-ubuntu text-neutral-900 text-3xl sm:text-4xl md:text-5xl mb-4 font-bold tracking-tight"
        >
          Get In Touch
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
          className="font-ubuntu text-neutral-600 text-lg sm:text-xl mb-10 leading-relaxed"
        >
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
        </motion.p>
        
        <motion.dl
          initial={{ opacity: 0.1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
          className="w-full space-y-6"
        >
          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-neutral-200 pb-6">
            <dt className="font-ubuntu text-neutral-900 text-sm font-bold uppercase tracking-wider w-full sm:w-32 mb-2 sm:mb-0">
              Email
            </dt>
            <dd className="font-ubuntu text-neutral-700 text-lg sm:text-xl">
              <a 
                href="mailto:valasellis.me@gmail.com"
                className="hover:text-neutral-900 transition-colors underline"
              >
                valasellis.me@gmail.com
              </a>
            </dd>
          </div>

          {/* Discord */}
          <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-neutral-200 pb-6">
            <dt className="font-ubuntu text-neutral-900 text-sm font-bold uppercase tracking-wider w-full sm:w-32 mb-2 sm:mb-0">
              Discord
            </dt>
            <dd className="font-ubuntu text-neutral-700 text-lg sm:text-xl">
              valas.me
            </dd>
          </div>

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-neutral-200 pb-6">
            <dt className="font-ubuntu text-neutral-900 text-sm font-bold uppercase tracking-wider w-full sm:w-32 mb-2 sm:mb-0">
              GitHub
            </dt>
            <dd className="font-ubuntu text-neutral-700 text-lg sm:text-xl">
              <a 
                href="https://github.com/valasellisdimitris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors underline"
              >
                valasellisdimitris
              </a>
            </dd>
          </div>
        </motion.dl>
      </section>
    </motion.div>
  );
}
