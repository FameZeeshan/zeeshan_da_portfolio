"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const openWhatsApp = () => {
        // Replace with your actual number
        window.open("https://wa.me/919884291490", "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-center">
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.6, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700 shadow-lg text-foreground transition-colors"
                        aria-label="Scroll to top"
                    >
                        <BsMouse size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openWhatsApp}
                className="p-3 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-colors"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={28} />
            </motion.button>
        </div>
    );
};

export default FloatingButtons;
