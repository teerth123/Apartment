import { useState, useEffect } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const Overview = () => {
  const details = [
    { label: "Type of Project", value: "Integrated Township" },
    { label: "Location", value: "Near Hinjawadi, Pune" },
    { label: "Land Area", value: "400 Acres" },
    { label: "No. of Towers", value: "3 Towers" },
    { label: "No. of Units", value: "On Request" },
    { label: "Unit Variants", value: "2, 2.5, 3.5, 4 & 5 BHK" },
    { label: "Size Range", value: "665 - 3600+ Sq.Ft." },
    { label: "Price Range", value: "Starting from ₹72 L*" },
    { label: "Possession Date", value: "On Request" },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    timeToVisit: "",
    message: "",
  });

  const whatsappMessage = "Hello, I want to know more about your services!";
  const whatsappLink = `https://wa.me/+918999079792?text=${encodeURIComponent(whatsappMessage)}`;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
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
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 drop-shadow-xl">
          Project Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Details */}
          <div className="space-y-6 text-center md:text-left">
            {details.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-medium text-gray-600">{item.label}:</span>
                <span className="text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Right Column - Description and Button */}
          <div className="space-y-6 drop-shadow-sm text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-600">
              A life that comes in all shades of wellness and happiness
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Situated just 4.5 kilometers away from Hinjawadi, the IT hub of
              Pune, Kolte Patil Life Republic is a 395 acres integrated township
              with undulating greens. Designed with one single objective: to
              create future-proof spaces and a meaningful way of life for the
              thinking minds, it is a community built for all.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Built with core values of creativity, sensitivity and
              sustainability, every sector of this award-winning township
              project in Pune offers you a luxurious lifestyle.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-primary text-black px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300"
            >
              Book a Visit
            </button>
          </div>
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
              <h2 className="text-2xl font-semibold text-gray-800">
                Schedule a Site Visit
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Register Here And Avail The Best Offers!!
              </p>
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
                required
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

export default Overview;