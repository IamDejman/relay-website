'use client';

import Image from "next/image";

const navigation = [
  { name: "Overview", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#000e28]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <Image
              src="/relay-logo.svg"
              alt="Relay Logo"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#000e28] hover:bg-[#001a3d]"
            >
              Get a Relaybox
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 