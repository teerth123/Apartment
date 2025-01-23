import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Plans from "./components/Plans";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappMessage = "Hello, I want to know more about your services!";
  const whatsappLink = `https://wa.me/+918999079792?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Use useInView to detect when the Hero section is in view
  const [heroRef, heroInView] = useInView({
    threshold: 0.5, // Adjust this value as needed
  });

  return (
    <div className="font-sans">
      {/* Conditionally render the Navbar based on whether the Hero is in view */}
      {!heroInView && <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

      {/* Conditionally add padding-top to main based on whether the Hero is in view */}
      <main className={`${heroInView ? "pt-0" : "pt-16"} bg-yellow-50`}>
        {/* Attach the ref to the Hero section */}
        <div ref={heroRef}>
          <Hero />
        </div>
        <Overview />
        <Amenities />
        <Pricing />
        <Gallery />
        <Plans />
        <Location />
        <ContactForm />
      </main>
      <Footer />

      {/* Conditionally render Contact Icons based on whether the Hero is in view */}
      {!heroInView && (
        <div
          className="fixed bottom-6 left-6 right-6 flex justify-between items-center z-50"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Side Icons: Email and Phone */}
          <div className="flex gap-3">
            {/* Email Icon */}
            <a
              href="mailto:arthteerth@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-500 text-white shadow-lg flex justify-center items-center"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="ri-mail-line text-2xl"></i>
            </a>

            {/* Phone Icon */}
            <a
              href="tel:+918999079792"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-green-500 text-white shadow-lg flex justify-center items-center"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="ri-phone-line text-2xl"></i>
            </a>
          </div>

          {/* Right Side Icon: WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#25D366] text-white shadow-lg flex justify-center items-center"
            style={{ width: "60px", height: "60px" }}
          >
            <i className="ri-whatsapp-line text-2xl"></i>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;