import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-12 px-4 sm:px-8 md:px-12 lg:px-[120px] bg-white border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-ubuntu text-xl font-bold text-neutral-900 mb-3 tracking-tight">
              Dimitris Valasellis
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Next.js Front-End Developer crafting pixel-perfect, high-performance web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-ubuntu text-xs font-bold text-neutral-900 mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-ubuntu text-xs font-bold text-neutral-900 mb-3 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/valasellisdimitris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors underline"
              >
                GitHub
              </a>
              <a
                href="mailto:valasellis.me@gmail.com"
                className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors underline"
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral-500 text-sm text-center sm:text-left">
            © {currentYear} Dimitris Valasellis. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm text-center sm:text-right">
            Built with Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
