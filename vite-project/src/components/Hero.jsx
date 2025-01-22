import { motion } from 'framer-motion';
import { AnimatedShinyText } from './AnimatesShinyText';
import { useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
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
        'https://deploy-constructiontest.onrender.com/api/send-email',
        formData
      );
      if (response.status === 200) {
        alert('Thank you! Your message has been received.');
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with modern overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
        >
          {/* <source src="https://your-video-url.mp4" type="video/mp4" /> */}
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <AnimatedShinyText shimmerWidth={150}>
              New Launch Offer 🎉
            </AnimatedShinyText>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Dream Home
              <span className="block text-accent-light">Awaits You</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-light"></span>
                Premium 2-5 BHK
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-light"></span>
                Near IT Hub
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-light"></span>
                Zero Stamp Duty
              </div>
            </div>

            <p className="text-2xl font-light">
              Starting from <span className="font-bold text-accent-light">₹72L*</span>
            </p>
          </motion.div>

          {/* Right Column - Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Register Interest</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-light/50"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-light/50"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-light/50"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-light hover:bg-accent-light/90 text-black py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-light/25"
                >
                  Schedule a Visit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
