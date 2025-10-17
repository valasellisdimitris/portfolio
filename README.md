# Dimitris Valasellis - Portfolio

A modern, performant portfolio website showcasing my work as a Next.js Front-End Developer. Built with cutting-edge technologies featuring smooth animations, dark mode support, and optimized user experience.

**Live Demo**: [portfolio-valasellis.vercel.app](https://portfolio-valasellis.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-ff69b4?style=flat-square)

## Features

### Design & UX
- Custom cursor with animated interactions
- Responsive mobile-first design
- Modern UI with smooth shadows and rounded corners
- Accessibility features including ARIA labels and semantic HTML

### Animations
- Framer Motion integration for smooth transitions
- Scroll-triggered element animations
- Staggered reveals for content sequences
- Interactive hover effects
- Physics-based motion

### Sections
- Hero introduction with gradient effects
- Professional overview with animated skill tags
- Service offerings with interactive cards
- Project showcase with tech stack tags
- Contact section with copy functionality

### Technical Features
- SEO optimization with Open Graph and Twitter Cards
- JSON-LD structured data
- Performance-focused implementation
- Full TypeScript type safety
- Modern React best practices

## Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/)
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12.23.24](https://www.framer.com/motion/)
- **Font**: Ubuntu (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/valasellisdimitris/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure
```
portfolio-main/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── context/     # Application context providers
│   ├── data/        # Project data sources
│   ├── pages/       # Next.js page routes
│   └── styles/      # Global styles
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## Customization

1. Update personal information in `/src/pages/index.tsx`
2. Add your resume PDF at `/public/resume.pdf`
3. Create OG image (1200x630px) at `/public/og-image.jpg`
4. Edit project data in `/src/data/projects.ts`

## Performance

- Optimized bundle size with Next.js
- GPU-accelerated animations
- Mobile-optimized responsive design
- Lazy loading with Intersection Observer

## Connect
- **GitHub**: [@valasellisdimitris](https://github.com/valasellisdimitris)
- **Email**: Available on website
- **Discord**: Available on website

## License
This project is open source and available for personal use.

## Acknowledgments
- Built with [Next.js](https://nextjs.org/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

---

Built by Dimitris Valasellis
