
import { useState } from 'react';
import faisalLogo from '../assets/logo.png';

export default function ContactFormSection() {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Logo & Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            {/* Logo */}
            <img 
              src={faisalLogo} 
              alt="Faisal Town Phase 2" 
              className="h-32 w-auto"
            />

            {/* WhatsApp Button */}
            <button 
              onClick={() => window.open('https://wa.me/923481264493', '_blank')}
              className="bg-green-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition text-lg"
            >
              WhatsApp
            </button>

            {/* Phone Number */}
            <div className=" bg-opacity-10 backdrop-blur-sm px-8 py-4 rounded-full">
              <p className="text-2xl font-bold">+92 316 5200 360</p>
            </div>

            {/* Email */}
            <a 
              href="mailto:Sales@faisaltown2phase.com"
              className="text-white hover:text-blue-200 underline text-lg transition"
            >
              Sales@faisaltown2phase.com
            </a>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-5 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className="w-full px-5 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full px-5 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition bg-white"
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

      
      </div>
    </section>
  );
}
