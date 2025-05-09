'use client';

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

export default function FAQSection() {
  return (
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
  );
} 