import { useState } from 'react';

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // Gmail handler function
  const handleGmailClick = () => {
    const email = 'azharkamal552@gmail.com';
    const subject = 'Inquiry about Faisal Town Phase 2';
    const body = 'Hello, I am interested in Faisal Town Phase 2.';
    
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailURL, '_blank');
  };

  // WhatsApp handler function
  const handleWhatsAppClick = () => {
    const phoneNumber = '923481264493';
    const message = 'Hello, I am interested in Faisal Town Phase 2.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Contact Details */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 text-lg text-center md:text-left mb-8">
                WhatsApp and Call Support 24/7 Available
              </p>

              {/* Phone Number */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-xl font-semibold">
                  +92 348 1264 4493
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="flex justify-center md:justify-start mb-6">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition text-lg"
                >
                  WhatsApp
                </button>
              </div>

              {/* Email */}
              <div className="text-center md:text-left">
                <button
                  type="button"
                  onClick={handleGmailClick}
                  className="text-black text-lg underline hover:text-gray-600 transition bg-transparent border-none cursor-pointer"
                >
                  azharkamal552@gmail.com
                </button>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 text-lg mb-6 text-center">
              Get in touch with us today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 resize-none transition"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition text-lg"
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
