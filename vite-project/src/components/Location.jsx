import React, { useState } from "react";
import { FaSchool, FaBus, FaHospital, FaShoppingBag } from "react-icons/fa"; // Import icons

const Location = () => {
  const [selectedCategory, setSelectedCategory] = useState("Schools");

  const categories = {
    Schools: [
      { name: "International School", distance: "5 mins" },
      { name: "Engineering College", distance: "15 mins" },
    ],
    Transit: [
      { name: "Metro Station", distance: "10 mins" },
      { name: "Bus Stand", distance: "8 mins" },
    ],
    Hospitals: [
      { name: "Apollo Clinic", distance: "2 mins" },
      { name: "Multi-Specialty Hospital", distance: "10 mins" },
    ],
    Lifestyle: [
      { name: "Shopping Mall", distance: "8 mins" },
      { name: "Retail Hub", distance: "5 mins" },
    ],
  };

  // Icon mapping for each category
  const categoryIcons = {
    Schools: <FaSchool className="text-2xl text-blue-500" />,
    Transit: <FaBus className="text-2xl text-green-500" />,
    Hospitals: <FaHospital className="text-2xl text-red-500" />,
    Lifestyle: <FaShoppingBag className="text-2xl text-purple-500" />,
  };

  return (
    <section id="location" className="py-20 bg-[#efebeb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Project Connectivity
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60298.52692515201!2d72.936014!3d19.166445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b913585fc533%3A0x4c5fa5cf22f5bd5d!2sPiramal%20Revanta%20Sales%20Office!5e0!3m2!1sen!2sin!4v1732468527570!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Dropdown and Highlights Section */}
          <div>
            <div className="mb-6">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {Object.keys(categories).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              {/* Category Header with Icon */}
              <div className="flex items-center space-x-3 mb-4">
                {categoryIcons[selectedCategory]}
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedCategory}
                </h3>
              </div>
              <hr className="my-2 border-gray-200" />
              <ul className="space-y-3 mt-4">
                {categories[selectedCategory].map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="block font-medium text-gray-900">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;