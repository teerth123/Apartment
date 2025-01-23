import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true); // State to control form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the email API
      await axios.post("https://deploy-constructiontest.onrender.com/api/send-email", formData);
      
      // Show success message
      alert("Thank you! Your message has been received.");
      setSubmitted(true);
      setShowForm(false); // Close the form after submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  const whatsappMessage = "Hello, I want to know more about your services!";
  const whatsappLink = `https://wa.me/+918999079792?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-primary-light to-secondary-light">
      {showForm && (
        <motion.div
          className="bg-white p-8 rounded-xl w-[90%] max-w-[500px] space-y-6 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title and Subtitle */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-sm text-gray-600 mt-2">We'd love to hear from you!</p>
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
              placeholder="Preferred Time to Visit"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              rows="4"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Submit
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
      )}

      {/* Success Message */}
      {submitted && (
        <motion.div
          className="text-center text-xl font-medium text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4">Thank you for your message!</p>
          <p>We'll get back to you shortly.</p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;