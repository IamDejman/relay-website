'use client';

import { motion } from "framer-motion";
import {
  BoltIcon,
  QrCodeIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Instant Payments",
    description: "Accept transfers instantly with no waiting period",
    icon: BoltIcon,
  },
  {
    name: "QR Payment",
    description: "Supports NIBSS QR Payment.",
    icon: QrCodeIcon,
  },
  {
    name: "Simple Integration",
    description: "Easy to set up with your existing business tools",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Secure Transactions",
    description: "Bank-level security for all payment processing",
    icon: ShieldCheckIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Relay?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to accept payments quickly and securely
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="absolute -top-4 left-4">
                  <div className="p-2 bg-[#000e28] rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 