'use client';

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Super-fast way to accept</span>
            <span className="block text-[#000e28]">bank transfers and QR payments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Transform your business with instant payments. Accept bank transfers and QR payments in seconds, with no waiting period.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#000e28] hover:bg-[#001a3d] md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 