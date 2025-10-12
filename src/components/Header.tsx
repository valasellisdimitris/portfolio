import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0 },
};

const menuItemVariants = {
  closed: { opacity: 0, x: 50 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring" as const, stiffness: 300, damping: 24 },
  }),
};

export default function Header() {
  const [athensTime, setAthensTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Athens",
      };
      setAthensTime(now.toLocaleTimeString([], options));
    }
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full flex h-[90px] md:h-[120px] lg:h-[175px] bg-white shadow-sm border-b border-neutral-100 flex-row justify-between items-center px-4 md:px-12 lg:pl-[120px] lg:pr-[120px] top-0 fixed z-40 max-w-full overflow-x-hidden"
    >
      {/* Time Display */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="hidden lg:flex items-center justify-center min-w-0"
      >
        <span className="font-ubuntu text-neutral-600 text-sm font-normal flex flex-row items-center truncate tracking-wide">
          <span>Europe/Greece</span>
          {athensTime && (
            <span className="ml-3 font-normal">| {athensTime}</span>
          )}
        </span>
      </motion.section>

      {/* Desktop Nav */}
      <section className="hidden lg:block items-center justify-center">
        <nav className="flex flex-row items-center gap-4 lg:gap-7">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, type: "spring" }}
              >
                <Link
                  href={link.href}
                  className="font-ubuntu text-neutral-700 text-sm font-medium p-2 lg:p-3 hover:text-neutral-900 duration-200 ease-in-out relative group tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
              {index < navLinks.length - 1 && (
                <div className="h-[30px] w-[1px] bg-neutral-200 hidden lg:block"></div>
              )}
            </React.Fragment>
          ))}
        </nav>
      </section>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-6"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-neutral-900 text-3xl">×</span>
            </motion.button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} custom={index} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    className="font-ubuntu text-neutral-900 text-3xl font-medium hover:text-neutral-600 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="flex flex-row items-center gap-4">
        {/* Mobile/Tablet hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <motion.span
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 8 : 0,
            }}
            className="block w-7 h-0.5 bg-neutral-900 mb-1"
          ></motion.span>
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-7 h-0.5 bg-neutral-900 mb-1"
          ></motion.span>
          <motion.span
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -8 : 0,
            }}
            className="block w-7 h-0.5 bg-neutral-900"
          ></motion.span>
        </motion.button>

        {/* GitHub Link */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/valasellisdimitris"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ubuntu text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors tracking-wide"
        >
          GitHub
        </motion.a>
      </section>
    </motion.div>
  );
}
