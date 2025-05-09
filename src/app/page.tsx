import Image from "next/image";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      
      {/* Footer */}
      <footer className="bg-[#000e28] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/relay-logo-white.svg"
                alt="Relay Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-400 mb-2">
                Making payments simple and secure for businesses of all sizes.
              </p>
              <a href="mailto:help@relay.ng" className="text-gray-300 hover:text-white underline">help@relay.ng</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Relay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
