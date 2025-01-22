import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
        time: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response =  axios.post('https://deploy-constructiontest.onrender.com/api/send-email', formData);
            alert('Thank you! Your message has been received.');
            setSubmitted(true);
            
        } catch (error) {
            console.error('Error sending email:', error);
            alert('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-primary-light to-secondary-light">
            <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                            Contact Us
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full p-4 bg-gray-100 border border-transparent focus:ring-2 focus:ring-primary-light rounded-lg text-gray-700 placeholder-gray-400 transition duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full p-4 bg-gray-100 border border-transparent focus:ring-2 focus:ring-primary-light rounded-lg text-gray-700 placeholder-gray-400 transition duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full p-4 bg-gray-100 border border-transparent focus:ring-2 focus:ring-primary-light rounded-lg text-gray-700 placeholder-gray-400 transition duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    placeholder="Preferred Time to Visit"
                                    className="w-full p-4 bg-gray-100 border border-transparent focus:ring-2 focus:ring-primary-light rounded-lg text-gray-700 placeholder-gray-400 transition duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-4 bg-gray-100 border border-transparent focus:ring-2 focus:ring-primary-light rounded-lg text-gray-700 placeholder-gray-400 transition duration-300"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 mt-6 bg-secondary text-black rounded-lg hover:bg-primary-light focus:outline-none transition duration-300 ease-in-out"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                ) : (
                    <motion.div
                        className="text-center text-xl font-medium text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-4">Thank you for your message!</p>
                        <p>We'll get back to you shortly.</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default ContactForm;
