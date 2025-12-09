"use client";
import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
            aria-label="Zeeshan Logo"
            fill="none"
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" className="text-primary" />
                    <stop offset="100%" stopColor="currentColor" className="text-accent" />
                </linearGradient>
            </defs>
            <path
                d="M20 20 H80 L20 80 H80"
                stroke="url(#logo-gradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary dark:text-accent"
            />
        </svg>
    );
};

export default Logo;
