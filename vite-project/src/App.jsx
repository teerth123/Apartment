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

  const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with admin's WhatsApp number
  const whatsappMessage = "Hello, I want to know more about your services!";
  const whatsappLink = `https://wa.me/${+918999079792}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="font-sans">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
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

      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        style={{
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/WhatsApp_icon_2022.svg"
          alt="WhatsApp"
          style={{ width: "36px", height: "36px" }}
        />
      </a>
    </div>
  );
}

export default App;
