import { useState, useEffect } from "react";
import { Carousel } from "./ui/Carousel";
import axios from "axios";

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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Pricing Details
        </h2>

        <div className="carousel-container">
          <Carousel slides={createSlides()} />
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4 mt-10">
            *Prices are subject to change. Terms and conditions apply.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300"
            onClick={() => setShowPopup(true)}
          >
            Download Price Breakup
          </button>
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

export default Pricing;
