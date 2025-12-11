import { useState } from 'react';
import faisalLogo from '../assets/logo.png';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // WhatsApp handler function for buttons
  const handleWhatsAppClick = () => {
    const phoneNumber = '923481264493';
    const message = 'Hello, I am interested in Faisal Town Phase 2.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  // Gmail handler function
  const handleGmailClick = () => {
    const email = 'shamsullahbaig999@gmail.com';
    const subject = 'Inquiry about Faisal Town Phase 2';
    const body = 'Hello, I am interested in Faisal Town Phase 2.';
    
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailURL, '_blank');
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission - Send to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = '923481264493';
    const whatsappMessage = `Hello, I am interested in Faisal Town Phase 2.

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-linear-to-r from-[#6caef7] to-[#3f6994] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Logo & Info */}
          <div>
            <img src={faisalLogo} alt="Faisal Town" className="h-32 w-auto mb-8" />
            
            <div className="space-y-6">
              <div>
                <button 
                  type="button"
                  className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition" 
                  onClick={handleWhatsAppClick}
                >
                  WhatsApp
                </button>
              </div>

              <div>
                <p className="text-2xl font-bold">+92 348 1264 4493</p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleGmailClick}
                  className="text-white text-lg underline hover:text-gray-200 transition bg-transparent border-none cursor-pointer"
                >
                  azharkamal552@gmail.com
                </button>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none resize-none bg-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-black hover:text-white transition"
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
