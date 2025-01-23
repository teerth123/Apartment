import { useState, useEffect } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa"; // Import the close icon

export default function Plans() {
  const plans = [
    {
      type: '2 BHK',
      features: [
        'Spacious living room',
        'Modern kitchen',
        'Attached bathrooms',
        'Balcony',
      ],
      image: 'https://imgs.search.brave.com/MXdOIkXgRJlFoEhiHZ2PsCEfPDhGKGROp-95bX0eufc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/OTkxMjIyMS9waG90/by9vZmZpY2UtYnVp/bGRpbmcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUJ5YTBE/UEFabWk2djlzcm1n/TmpkeHhBaENlMVM0/QzQ3QmoxazJnVk90/OTg9',
    },
    {
      type: '3 BHK',
      features: [
        'Large living room',
        'Modular kitchen',
        'Servant room',
        'Multiple balconies',
      ],
      image: 'https://imgs.search.brave.com/X9noBlN1RRbUHvTsSByOIDzQqFRhqS9z_PMPtkHhgnU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/ODAwMjYzNi9waG90/by9jb25zdHJ1Y3Rp/b24td29ya2Vycy1p/bi1idWlsZGluZy1z/aXRlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ET1VPdkRF/VjJaUHpMbGpEd29Y/TEU5Ni1oVzVPTWIx/alBFakptNkVkVkdZ/PQ',
    },
    {
      type: '4 BHK',
      features: [
        'Premium living space',
        'Designer kitchen',
        'Servant quarter',
        'Private terrace',
      ],
      image: 'https://imgs.search.brave.com/zATbJNrMc8F4GKxX8Sc3w3LuHvWP7wqnrm0Yb1Y9ZcM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MzAzMDU1Ni9waG90/by9jb25zdHJ1Y3Rp/b24tdG93ZXItY3Jh/bmVzLW9uLWEtYnVp/bGRpbmctc2l0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bjdMRy1lWkNtUFBR/aDNRcUhVcy1SdEdh/WHl0RTVVNDFxSkEw/VFJjek14QT0',
    },
  ];

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

  const whatsappMessage = "Hello, I want to know more about your services!";
  const whatsappLink = `https://wa.me/+918999079792?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
          Floor Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} plan={plan} isMiddle={index === 1} setShowPopup={setShowPopup} />
          ))}
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
}

function Card({ plan, isMiddle, setShowPopup }) {
  return (
    <div
      className={`relative drop-shadow-xl bg-white rounded-xl shadow-xl transition-all duration-300 mx-5 my-3 ${
        isMiddle ? 'scale-110' : 'scale-105'
      }`}
    >
      <img
        alt={plan.type}
        className="object-cover rounded-t-xl w-full h-48"
        src={plan.image}
      />
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-gray-700">{plan.type}</h3>
        <ul className="space-y-2">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <span className="mr-2 text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <button
          className="mt-4 w-full bg-gradient-to-r from-primary to-primary-dark text-white py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          onClick={() => setShowPopup(true)} // Use setShowPopup here
        >
          Book a visit
        </button>
      </div>
      <div className="absolute top-4 right-4 bg-white rounded-full shadow-md p-2">
        <span className="text-sm font-bold text-primary">New</span>
      </div>
    </div>
  );
}