import React from 'react';

const Location = () => {
  const highlights = [
    {
      category: 'IT Parks',
      items: ['Hinjewadi IT Park - 7 mins', 'Upcoming WTC - 4 mins']
    },
    {
      category: 'Healthcare',
      items: ['Apollo Clinic - 2 mins', 'Multi-Specialty Hospital - 10 mins']
    },
    {
      category: 'Education',
      items: ['International School - 5 mins', 'Engineering College - 15 mins']
    },
    {
      category: 'Shopping',
      items: ['Shopping Mall - 8 mins', 'Retail Hub - 5 mins']
    }
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
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

          {/* Highlights Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:translate-y-[-2px]"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{highlight.category}</h3>
                <hr className="my-2 border-gray-200" />
                <ul className="space-y-3 mt-4">
                  {highlight.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      <span className="block font-medium text-gray-900">
                        {item.split(' - ')[0]}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.split(' - ')[1]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
