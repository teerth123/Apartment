import { useState, useEffect } from "react";
import { Carousel } from "./ui/Carousel";
import axios from "axios";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const Pricing = () => {
  const prices = [
    {
      type: '2 BHK',
      size: '665 to 836 Sq.Ft',
      price: '₹72 L*',
      image: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-1.jpg',
    },
    {
      type: '2.5 BHK',
      size: '911 to 937 Sq.Ft',
      price: 'On Request',
      image: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-2.jpg',
    },
    {
      type: '3 BHK',
      size: '1007 to 1450 Sq.Ft',
      price: 'On Request',
      image: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-3.jpg',
    },
    {
      type: '3.5 BHK',
      size: '1700+ Sq.Ft',
      price: 'On Request',
      image: 'https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/gallery-4.jpg',
    },
    {
      type: '4 BHK',
      size: '2023 to 3000 Sq.Ft',
      price: 'On Request',
      image: 'https://d1yei2z3i6k35z.cloudfront.net/3099369/6574f9662c759_16iwl4khzwljqt714a1080x760-3.jpg',
    },
    {
      type: '5 BHK',
      size: '3600+ Sq.Ft',
      price: 'On Request',
      image: 'https://d1yei2z3i6k35z.cloudfront.net/3099369/6574fafcd2f13_16iwl4khzwljqt1ent1080x760-4.jpg',
    },
  ];

  const whatsappMessage = "Hello, I want to know more about your services!";
  const whatsappLink = `https://wa.me/+918999079792?text=${encodeURIComponent(whatsappMessage)}`;

  // Function to create the carousel slides with circular behavior
  const createSlides = () => {
    const extendedPrices = [...prices, prices[0]];  // Adding first price to the end to create seamless loop
    return extendedPrices.map((price, index) => ({
      title: price.type,
      button: 'View Details',
      src: price.image,
      price: price.price,
      size: price.size,
      key: index,
    }));
  };

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    timeToVisit: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show the "thank you" message immediately
    alert("Thank you! Your message has been received.");
    setShowPopup(false); // Close the form

    // Send the POST request in the background
    axios
      .post("https://deploy-constructiontest.onrender.com/api/send-email", formData)
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("There was an error sending your message. Please try again later.");
      });
  };

  // Close the form when clicking outside
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("bg-black/50")) {
      setShowPopup(false);
    }
  };

  // Close the form when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (showPopup) {
        setShowPopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Pricing Details
        </h2>

        <div className="carousel-container">
          <Carousel slides={createSlides()} />
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4 mt-10">
            *Prices are subject to change. Terms and conditions apply.
          </p>
          <button
            className="bg-primary text-black px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300"
            onClick={() => setShowPopup(true)}
          >
            Book a visit
          </button>
        </div>
      </div>

      {/* Form Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={handleClickOutside} // Close the form when clicking outside
        >
          <div className="bg-white p-8 rounded-xl w-[90%] max-w-[400px] space-y-6 relative">
            {/* Close Icon (Top Right Corner) */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-all duration-300"
            >
              <FaTimes size={24} />
            </button>

            {/* Title and Subtitle */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Schedule a Site Visit</h2>
              <p className="text-sm text-gray-600 mt-2">Register Here And Avail The Best Offers!!</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="text"
                name="timeToVisit"
                placeholder="Preferred Time to Visit"
                value={formData.timeToVisit}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                rows="3"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Book Visit Appointment
              </button>
            </form>

            {/* reCAPTCHA Disclaimer */}
            <p className="text-xs text-gray-500 text-center">
              This site is protected by reCAPTCHA and the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>

            {/* WhatsApp Slider */}
            <div className="flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300"
              >
                <span className="mr-2">Connect on WhatsApp</span>
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;