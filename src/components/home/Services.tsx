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
  return (
    <div className="flex flex-col min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-[120px] pt-8 md:pt-[75px] pb-8 md:pb-[75px] w-full bg-white">
      <span className="font-ubuntu text-neutral-900 text-3xl sm:text-4xl md:text-5xl mb-4 font-bold tracking-tight">
        My Services
      </span>
      
      <div className="h-[2px] bg-neutral-900 mb-10"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-10 w-full">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-start p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-all duration-300"
          >
            <h3 className="font-ubuntu text-neutral-900 text-xl sm:text-2xl mb-4 font-bold tracking-tight">
              {service.title}
            </h3>
            <p className="text-neutral-600 w-full max-w-[500px] text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
