import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function HomePage() {
  const siteUrl = "https://portfolio-valasellis.vercel.app";
  const title = "Dimitris Valasellis - Next.js Front-End Developer";
  const description =
    "Experienced Next.js front-end developer specializing in building pixel-perfect, high-performance web applications. Expert in React, TypeScript, and modern web technologies.";
  const imageUrl = `${siteUrl}/og-image.jpg`;

  return (
    <div className="w-full min-h-screen flex flex-col p-0 m-0 overflow-x-hidden bg-white max-w-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Dimitris Valasellis, Next.js developer, React developer, front-end developer, web development, TypeScript, Tailwind CSS, JavaScript, Greece developer"
        />
        <meta name="author" content="Dimitris Valasellis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Dimitris Valasellis Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:creator" content="@dimitrisval" />

        {/* Additional SEO */}
        <meta
          name="google-site-verification"
          content="dO27Tt2UF8MQLuCdy1Sra1wyhKrweekwn4DOmvLITkc"
        />
        <meta httpEquiv="content-language" content="en" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dimitris Valasellis",
              url: siteUrl,
              jobTitle: "Front-End Developer",
              description: description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "GR",
                addressLocality: "Athens",
              },
              sameAs: ["https://github.com/valasellisdimitris"],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Web Development",
                "Front-End Development",
              ],
            }),
          }}
        />
      </Head>

      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <Header />
      <main
        id="main-content"
        className="w-full h-full flex flex-col mt-[175px] gap-16"
      >
        <section id="hero" className="scroll-mt-[180px]">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-[180px]">
          <About />
        </section>
        <section id="services" className="scroll-mt-[180px]">
          <Services />
        </section>
        <section id="projects" className="scroll-mt-[180px]">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-[180px]">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
