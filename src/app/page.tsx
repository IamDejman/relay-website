import Image from "next/image";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  BoltIcon,
  QrCodeIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const navigation = [
  { name: "Overview", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "FAQs", href: "#faqs" },
];

const features = [
  {
    name: "Instant Payments",
    description: "Accept transfers instantly with no waiting period",
    icon: BoltIcon,
  },
  {
    name: "QR Flexibility",
    description: "Multiple QR code options for different payment scenarios",
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

const faqs = [
  {
    question: "How quickly can I start accepting payments?",
    answer: "You can start accepting payments within minutes of signing up. Our streamlined onboarding process makes it quick and easy to get started.",
  },
  {
    question: "What banks are compatible with Relay?",
    answer: "Relay is compatible with all major banks in Nigeria. We support instant transfers across all banking platforms.",
  },
  {
    question: "Are there any monthly fees?",
    answer: "We offer transparent pricing with no hidden fees. You only pay a small percentage per transaction.",
  },
  {
    question: "How does the QR payment process work?",
    answer: "Simply display your unique QR code to customers. They can scan it with their banking app to make instant payments.",
  },
  {
    question: "Can I integrate Relay with my existing website?",
    answer: "Yes, Relay provides easy-to-use APIs and plugins for seamless integration with your existing website or application.",
  },
  {
    question: "What customer support options are available?",
    answer: "We offer 24/7 customer support through email, phone, and live chat. Our dedicated team is always ready to help.",
  },
  {
    question: "What is a Relaybox and how does it work?",
    answer: "A Relaybox is our physical payment terminal that enables you to accept QR payments and bank transfers in your physical location.",
  },
  {
    question: "Do I need any special hardware to set up my Relaybox?",
    answer: "No special hardware is required. You can start accepting payments using just your smartphone or tablet.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to know about Relay
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="bg-white rounded-lg shadow">
                      <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left">
                        <span className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-gray-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4 text-gray-500">
                        {faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000e28]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src="/relay-logo-white.svg"
                alt="Relay Logo"
                width={120}
                height={40}
              />
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:help@relay.ng"
                className="text-gray-300 hover:text-white"
              >
                help@relay.ng
              </a>
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
