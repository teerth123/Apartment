import { Carousel } from "./ui/Carousel";

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
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300">
            Download Price Breakup
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
