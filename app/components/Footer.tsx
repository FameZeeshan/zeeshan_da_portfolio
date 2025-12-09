"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="py-8 border-t bg-background border-gray-100 dark:border-gray-800">
    <div className="container flex flex-col items-center justify-center gap-4 px-4 mx-auto text-center">
      <p className="flex items-center gap-2 text-sm md:text-base text-secondary">
        Made with
        <span className="text-red-500 animate-pulse">
          <FaHeart />
        </span>
        by
        <a
          href="https://www.linkedin.com/in/famezeeshan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-colors text-primary hover:text-accent hover:underline"
        >
          Hafshan
        </a>
      </p>

      <p className="text-sm text-foreground/60">
        &copy; {new Date().getFullYear()} Mohammed Zeeshan. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
