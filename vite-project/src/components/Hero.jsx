import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa'; // Import the close icon

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    time: '',
  });

  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [submitted, setSubmitted] = useState(false); // State to track form submission

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
    try {
      // Send form data to the email API
      await axios.post('https://deploy-constructiontest.onrender.com/api/send-email', formData);
      
      // Show success message
      alert('Thank you! Your message has been received. We will reach out to you soon.');
      setSubmitted(true);
      setShowForm(false); // Close the form after submission
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  // Close the form when clicking outside
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('bg-black/50')) {
      setShowForm(false);
    }
  };

  // Close the form when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (showForm) {
        setShowForm(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showForm]);

  const whatsappMessage = "Hello, I want to know more about your services!";
  const whatsappLink = `https://wa.me/+918999079792?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background with modern overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/932328/pexels-photo-932328.jpeg?auto=compress&cs=tinysrgb&w=600"
        >
          {/* Add your video source here */}
          <source src="your-video-url.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 text-center text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/logo.png" // Replace with your logo URL
            alt="Logo"
            className="w-54 h-54 mx-auto mb-6"
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Timeless Design, Modern Luxury <br />
          <h3 className="text-white">
            Spacious 4 & 5 Bed Residences with Private Terraces <br />
            Your Perfect Home Awaits.
          </h3>
        </motion.h1>

        {/* Book Visit Appointment Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => setShowForm(true)}
          className="bg-accent-light hover:bg-accent-light/90 text-black py-3 px-8 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-light/25"
        >
          Book Visit Appointment
        </motion.button>
      </div>

      {/* Form Popup */}
      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={handleClickOutside} // Close the form when clicking outside
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl w-[90%] max-w-[400px] space-y-6 relative"
          >
            {/* Close Icon (Top Right Corner) */}
            <button
              onClick={() => setShowForm(false)}
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
                name="time"
                placeholder="Enter Preferred Time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />

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
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;