import { useState, useEffect } from "react";
import axios from "axios";

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
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
      const response = await axios.post(
        "https://deploy-constructiontest.onrender.com/api/send-email",
        formData
      );
      if (response.status === 200) {
        alert("Thank you! Your message has been received.");
        setSubmitted(true);
        setShowPopup(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  const handleScroll = () => {
    if (showPopup) setShowPopup(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showPopup]);

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12 drop-shadow-xl">
          Project Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
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

          <div className="space-y-6 drop-shadow-sm">
            <h3 className="text-2xl font-semibold text-primary">
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

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Fill in your details
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Overview;
