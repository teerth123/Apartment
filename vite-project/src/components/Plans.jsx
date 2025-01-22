import { useState, useEffect } from "react";
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
    <section id="plans" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
          Floor Plans
        </h2>
        {/* Added responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} plan={plan} isMiddle={index === 1} />
          ))}
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
}

function Card({ plan, isMiddle }) {
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
        <button className="mt-4 w-full bg-gradient-to-r from-primary to-primary-dark text-white py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        onClick={() => setShowPopup(true)}>
          Book a visit 
        </button>
      </div>
      <div className="absolute top-4 right-4 bg-white rounded-full shadow-md p-2">
        <span className="text-sm font-bold text-primary">New</span>
      </div>
      
    </div>
  );
}
