import React, { useState } from "react";
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

  return (
    <div className="font-sans">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16 bg-yellow-50">
        <Hero />
        <Overview />
        <Amenities />
        <Pricing />
        <Gallery />
        <Plans />
        <Location />
        <ContactForm />
      </main>
      <Footer />

      {/* Contact Icons */}
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
    </div>
  );
}

export default App;
