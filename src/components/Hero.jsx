import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // WhatsApp handler function for buttons
  const handleWhatsAppClick = () => {
    const phoneNumber = '923481264493'; // Without + or spaces
    const message = 'Hello, I am interested in Faisal Town Phase 2.'; // Optional pre-filled message
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
    
    // Create WhatsApp message with form data
    const phoneNumber = '923481264493';
    const whatsappMessage = `
Hello, I am interested in Faisal Town Phase 2.

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim();
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    // Clear form after submission
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="home" className="bg-linear-to-r from-[#6caef7] to-[#3f6994] text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Faisal Town Phase 2
          </h1>
          <p className="text-lg md:text-xl opacity-100">
            Your dream home awaits in Islamabad's premier society.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button 
            className="bg-white text-[#619cdd] px-8 py-3 rounded-full font-semibold hover:bg-gray-100/20 hover:text-white transition"
            onClick={handleWhatsAppClick}
          >
            +92 348 1264 4493
          </button>
          <button 
            className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100/20 hover:text-white transition"
            onClick={handleWhatsAppClick}
          >
            WhatsApp
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-opacity-10 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
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
                rows="4"
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
    </section>
  );
}
