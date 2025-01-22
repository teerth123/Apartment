import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Plans from './components/Plans';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <Hero />
        <Overview />
        <Amenities />
        <Pricing />
        <Gallery />
        <Plans />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;