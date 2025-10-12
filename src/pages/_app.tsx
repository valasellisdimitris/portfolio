import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CustomCursor from "@/components/CustomCursor";
import LoadingOverlay from "@/components/LoadingOverlay";
import { Ubuntu } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={ubuntu.variable}>
      <CustomCursor />
      <LoadingOverlay isLoading={isLoading} />
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Component {...pageProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
