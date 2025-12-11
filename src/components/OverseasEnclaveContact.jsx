
import { useState } from 'react';
import faisalLogo from '../assets/logo.png';

export default function OverseasEnclaveContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-20 bg-linear-to-r from-[#6caef7] to-[#3f6994] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Logo & Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src={faisalLogo} 
                alt="Faisal Town Phase 2" 
                className="h-32 w-auto"
              />
            </div>

            {/* Contact Buttons */}
            <div className="space-y-6 w-full max-w-sm">
              <button className="w-full bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition text-lg shadow-lg">
                WhatsApp
              </button>

              <div className="bg-opacity-10 backdrop-blur-sm px-8 py-4 rounded-full text-center">
                <p className="text-2xl font-bold">+92 314 5525 628</p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-8">
              <a 
                href="mailto:Sales@faisaltown2phase.com" 
                className="text-white hover:text-blue-200 underline text-lg transition"
              >
                Sales@faisaltown2phase.com
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-5 py-4 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className="w-full px-5 py-4 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-blue-900 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-white border-opacity-20">
          <p className="text-white text-opacity-80 text-sm">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
