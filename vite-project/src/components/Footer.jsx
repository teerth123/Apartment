const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-black text-white py-12 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Life Republic</h3>
              <p className="text-gray-300">
                An integrated township near Hinjawadi, Pune, offering premium apartments
                with world-class amenities.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Sales Office: Near Hinjawadi, Pune</li>
                <li>Phone: +91 XXXXX XXXXX</li>
                <li>Email: info@liferepublic.com</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">RERA Information</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>©{currentYear} Life Republic by Kolte Patil. All rights reserved.</p>
            <p className="mt-2 text-sm">
              MAHARERA Registration Numbers: Atmos Phase I- P52100051765
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;