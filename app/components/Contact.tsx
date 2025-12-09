"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { contactInfo, contactLinks } from "../data/contact";

const Contact: React.FC = () => (
  <section id="contact" className="py-10 bg-background">
    <div className="w-full max-w-4xl px-4 mx-auto md:px-6">
      <div className="p-8 transition-all duration-300 shadow-lg bg-card rounded-2xl md:p-10 hover:shadow-xl border border-gray-100 dark:border-gray-800">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary md:text-4xl">Contact</h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-foreground/80">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary">
                <FaMapMarkerAlt size={20} />
              </div>
              <span>
                <strong className="block text-foreground">Location</strong>
                {contactInfo.location}
              </span>
            </div>

            <div className="flex items-center gap-4 text-foreground/80">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary">
                <FaPhoneAlt size={20} />
              </div>
              <span>
                <strong className="block text-foreground">Phone</strong>
                <a href={contactLinks.phone} className="hover:text-primary transition-colors">{contactInfo.phone}</a>
              </span>
            </div>

            <div className="flex items-center gap-4 text-foreground/80">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600">
                <FaWhatsapp size={22} />
              </div>
              <span>
                <strong className="block text-foreground">WhatsApp</strong>
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors"
                >
                  {contactInfo.whatsapp}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4 text-foreground/80">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500">
                <FaEnvelope size={20} />
              </div>
              <span>
                <strong className="block text-foreground">Email</strong>
                <a href={contactLinks.email} className="hover:text-red-500 transition-colors">{contactInfo.email}</a>
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-foreground/80">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0077b5]">
                <FaLinkedin size={22} />
              </div>
              <span>
                <strong className="block text-foreground">LinkedIn</strong>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0077b5] transition-colors break-all"
                >
                  {contactInfo.linkedin}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4 text-foreground/80">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 text-foreground">
                <FaGithub size={22} />
              </div>
              <span>
                <strong className="block text-foreground">GitHub</strong>
                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-all"
                >
                  {contactInfo.github}
                </a>
              </span>
            </div>

            <div className="pt-4">
              <a href={contactInfo.resumeFile} download className="inline-block w-full sm:w-auto">
                <button className="flex items-center justify-center w-full gap-3 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 group">
                  <FaDownload className="transition-transform group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
