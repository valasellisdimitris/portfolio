import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Web Development",
    description: "I build exceptional user interfaces by taking your designs—whether from Figma, Sketch, or wireframes—and meticulously translating them into pixel-perfect, performance-optimized code. My focus is on creating an intuitive, engaging User Experience (UX) that drives results. I ensure every component is fully responsive and accessible, guaranteeing a flawless experience for every user, on any device."
  },
  {
    title: "Performance & SEO",
    description: "I deliver more than just beautiful code. My focus is on high-speed front-end development engineered for business results. I specialize in maximizing technical SEO, hitting perfect Core Web Vitals scores, and guaranteeing an accessible (A11Y) user experience."
  },
  {
    title: "Tech Stack",
    description: "My work is grounded in the modern web ecosystem. I specialize in the React/Next.js framework, using tools like TypeScript for robust, scalable applications, and Tailwind CSS or Styled-Components for highly maintainable styling. By leveraging the latest best practices in these technologies, I build dynamic, secure, and future-proof applications that stand the test of time."
  },
  {
    title: "Maintenance",
    description: "I focus on building highly maintainable and scalable codebases, utilizing proper component architecture and clear documentation. I&apos;m adept at working within existing teams and systems, providing expert code reviews, and implementing efficient testing strategies (e.g., Unit, Integration) to ensure the application can grow alongside your business without accruing technical debt."
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-[120px] pt-8 md:pt-[75px] pb-8 md:pb-[75px] w-full bg-white"
    >
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-ubuntu text-neutral-900 text-3xl sm:text-4xl md:text-5xl mb-4 font-bold tracking-tight"
      >
        My Services
      </motion.span>
      
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : { width: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="h-[2px] bg-neutral-900 mb-10"
      ></motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-10 w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-start p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-all duration-300"
          >
            <h3 className="font-ubuntu text-neutral-900 text-xl sm:text-2xl mb-4 font-bold tracking-tight">
              {service.title}
            </h3>
            <p className="text-neutral-600 w-full max-w-[500px] text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
