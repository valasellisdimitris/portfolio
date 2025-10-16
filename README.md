# 🚀 Dimitris Valasellis - Portfolio

A modern, performant portfolio website showcasing my work as a Next.js Front-End Developer. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and an exceptional user experience.

🌐 **Live Demo**: [portfolio-valasellis.vercel.app](https://portfolio-valasellis.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-ff69b4?style=flat-square)

## ✨ Features

### 🎨 Design & UX
- **Custom Cursor** - Enhanced desktop experience with animated custom cursor
- **Responsive Design** - Mobile-first approach, optimized for all screen sizes
- **Modern UI** - Card-based design with smooth shadows and rounded corners
- **Accessibility** - ARIA labels, skip-to-content links, and semantic HTML

### 🎬 Animations
- **Framer Motion Integration** - Butter-smooth animations throughout
- **Scroll Triggers** - Elements animate into view as you scroll
- **Staggered Reveals** - Sequential animations for lists and grids
- **Hover Effects** - Interactive feedback on all clickable elements
- **Spring Physics** - Natural, physics-based motion
- **Loading Overlay** - Smooth initial page load transition

### 📱 Sections
- **Hero** - Eye-catching introduction with gradient effects and multiple CTAs
- **About** - Professional overview with animated skill tags
- **Services** - Four key service offerings with interactive cards
- **Projects** - Showcase of work with tech stack tags and status badges
- **Contact** - Interactive contact cards with copy-to-clipboard functionality
- **Footer** - Complete with social links and site navigation

### 🔧 Technical Features
- **SEO Optimized** - Complete Open Graph and Twitter Card meta tags
- **Structured Data** - JSON-LD Person schema for enhanced search results
- **Performance** - GPU-accelerated animations and optimized font loading
- **TypeScript** - Full type safety across the codebase
- **Modern React** - Using React 19.1.0 with hooks and best practices

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) with Turbopack
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12.23.24](https://www.framer.com/motion/)
- **Font**: Ubuntu (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/valasellisdimitris/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio-main/
├── public/
│   ├── ...
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CustomCursor.tsx
│   │   └── LoadingOverlay.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🎨 Customization

### Update Personal Information

1. **Edit content** in `/src/pages/index.tsx`:
   - Update name, title, description
   - Change social media handles
   - Modify structured data

2. **Add your resume**: Place your PDF at `/public/resume.pdf`

3. **Create OG image**: Add a 1200x630px image at `/public/og-image.jpg`

4. **Update projects**: Edit `/src/components/home/Projects.tsx`

## 📊 Performance

- ⚡ **Fast Load Times** - Optimized bundle size with Next.js
- 🎯 **GPU Acceleration** - Transform and opacity animations
- 📱 **Mobile Optimized** - Responsive and performant on all devices
- 🔄 **Lazy Loading** - Animations trigger on scroll with Intersection Observer

## 🤝 Connect

- **GitHub**: [@valasellisdimitris](https://github.com/valasellisdimitris)
- **Email**: Available on the website
- **Discord**: Available on the website

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

---

⭐ **Star this repo** if you find it helpful!

Built with ❤️ by Dimitris Valasellis
