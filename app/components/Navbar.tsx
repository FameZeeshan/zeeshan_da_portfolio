"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || open
            ? "bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <Link
                href="#home"
                className="text-2xl font-bold text-primary dark:text-accent tracking-wide hover:opacity-80 transition-opacity"
              >
                Zeeshan
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <DesktopLink href="#home">Home</DesktopLink>
              <DesktopLink href="#about">About</DesktopLink>
              <DesktopLink href="#experience">Experience</DesktopLink>
              <DesktopLink href="#projects">Projects</DesktopLink>
              <DesktopLink href="#skills">Skills</DesktopLink>
              <DesktopLink href="#certifications">Certifications</DesktopLink>
              <DesktopLink href="#contact">Contact</DesktopLink>
              <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4 z-50">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {open ? (
                  <HiX size={28} className="transition-transform duration-300 rotate-90" />
                ) : (
                  <HiOutlineMenuAlt3 size={28} className="transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-[100dvh] w-[80%] max-w-xs bg-background shadow-2xl md:hidden border-l border-gray-200 dark:border-gray-800 flex flex-col"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
                <nav className="flex flex-col space-y-2">
                  {["Home", "About", "Experience", "Projects", "Skills", "Certifications", "Contact"].map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <MobileLink
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setOpen(false)}
                      >
                        {item}
                      </MobileLink>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pt-8 border-t border-gray-100 dark:border-gray-800"
                >
                  <a
                    href="Zeeshan_C_1125.pdf"
                    download
                    className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white rounded-xl font-medium shadow-md hover:bg-primary/90 transition-colors"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper Components
const DesktopLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm font-medium text-foreground/80 hover:text-primary dark:hover:text-accent transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-3 rounded-xl text-lg font-medium text-foreground/90 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary hover:pl-6 transition-all duration-200"
  >
    {children}
  </Link>
);

export default Navbar;
