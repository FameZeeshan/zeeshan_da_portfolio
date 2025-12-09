"use client";
import React from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => (
  <section className="py-10 bg-background">
    <div className="w-full max-w-4xl px-4 mx-auto md:px-6">
      <h2 className="mb-10 text-2xl font-bold text-center text-primary md:text-3xl">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} quote={t.quote} role={t.role} />
        ))}
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, role }: { quote: string; role: string }) => (
  <div className="p-6 transition-all duration-300 border-l-4 rounded-lg shadow-sm bg-card border-accent hover:shadow-md hover:-translate-y-1">
    <p className="mb-4 text-base italic leading-relaxed text-foreground/90">"{quote}"</p>
    <span className="block text-sm font-semibold text-secondary">- {role}</span>
  </div>
);

export default Testimonials;
