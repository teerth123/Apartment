import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Overview', to: 'overview' },
    { name: 'Amenities', to: 'amenities' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Plans', to: 'plans' },
    { name: 'Location', to: 'location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0c3730] shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand */}
          <div className="flex items-center space-x-4">
            <img
              src="https://ik.imagekit.io/qtmg0kqjk/Piramal_Revanta/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-2xl font-bold text-white font-poppins">
              Life Republic
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-primary px-4 py-2 rounded-md text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-primary transition-all duration-300 ease-in-out"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 mx-4 transition-all duration-300 ease-in-out transform opacity-100">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-primary block px-4 py-3 rounded-md text-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;