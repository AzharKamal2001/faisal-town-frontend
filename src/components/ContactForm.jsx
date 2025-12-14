import { useState } from 'react';
import faisalLogo from '../assets/logo.png';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = '923390190109';
    const message = 'Hello, I am interested in Faisal Town Phase 2.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleGmailClick = () => {
    const email = 'jaweriazameer1@gmail.com';
    const subject = 'Inquiry about Faisal Town Phase 2';
    const body = 'Hello, I am interested in Faisal Town Phase 2.';
    
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailURL, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = '923390190109';
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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-[#619cdd]">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help with all your real estate needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Logo & Info */}
          <div className="space-y-8">
            {/* Logo Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <img src={faisalLogo} alt="Faisal Town" className="h-32 w-auto mb-6" />
              <p className="text-gray-700 leading-relaxed">
                Your trusted partner in finding the perfect property in Islamabad's premier housing society.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-500/10 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">Chat with us instantly</p>
                  </div>
                </div>
                <button 
                  type="button"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-105"
                  onClick={handleWhatsAppClick}
                >
                  Open WhatsApp
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a href="tel:+923165200360" className="text-xl font-bold text-[#619cdd] hover:text-blue-700 transition">
                      +92 316 5200 360
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">Send us an email</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleGmailClick}
                  className="w-full bg-[#619cdd] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4287f6] hover:shadow-[0_0_20px_rgba(97,156,221,0.6)] transition-all duration-300 transform hover:scale-105"
                >
                  ContactSales@gmail.com
                </button>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:border-[#619cdd] focus:ring-2 focus:ring-[#619cdd]/30 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:border-[#619cdd] focus:ring-2 focus:ring-[#619cdd]/30 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:border-[#619cdd] focus:ring-2 focus:ring-[#619cdd]/30 resize-none transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#619cdd] text-white py-3 rounded-full font-bold hover:bg-[#4287f6] hover:shadow-[0_0_20px_rgba(97,156,221,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
