"use client";
import React from "react";
import { impactStats } from "../data/impact";

const ImpactBar: React.FC = () => (
  <div className="w-full max-w-6xl px-4 mx-auto my-8">
    <div className="flex flex-wrap justify-center gap-6 py-6 shadow-sm bg-card rounded-xl md:gap-10 border border-gray-100 dark:border-gray-800">
      {impactStats.map((text, i) => (
        <ImpactItem key={i} text={text} />
      ))}
    </div>
  </div>
);

const ImpactItem = ({ text }: { text: string }) => (
  <div className="text-lg font-bold text-center text-primary md:text-xl px-4">
    {text}
  </div>
);

export default ImpactBar;
