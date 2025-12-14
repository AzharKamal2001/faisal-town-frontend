import { useState } from 'react';

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // Gmail handler function
  const handleGmailClick = () => {
    const email = 'jaweriazameer1@gmail.com';
    const subject = 'Inquiry about Faisal Town Phase 2';
    const body = 'Hello, I am interested in Faisal Town Phase 2.';
    
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailURL, '_blank');
  };

  // WhatsApp handler function
  const handleWhatsAppClick = () => {
    const phoneNumber = '923390190109';
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left - Contact Details */}
          <div className="space-y-6">
            {/* Support Badge */}
            <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 text-center">
              <div className="inline-block bg-green-500 p-3 rounded-full mb-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <p className="text-gray-700 font-semibold mb-2">WhatsApp & Call Support</p>
              <p className="text-green-700 text-sm font-bold">Available 24/7</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                  <svg className="w-7 h-7 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Call Us Directly</h3>
                  <a href="tel:+923165200360" className="text-2xl font-bold text-gray-900 hover:text-[#619cdd] transition">
                    +92 316 5200 360
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Instant Messaging</h3>
                  <p className="text-gray-700 text-sm mb-4">Get quick responses on WhatsApp</p>
                </div>
              </div>
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Open WhatsApp
              </button>
            </div>

            {/* Email Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                  <svg className="w-7 h-7 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Email Us</h3>
                  <p className="text-gray-700 text-sm mb-4">Send detailed inquiries</p>
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

          {/* Right - Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#619cdd]/10 p-3 rounded-xl mb-4">
                <svg className="w-8 h-8 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Get in touch with us today - we'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#619cdd] focus:ring-2 focus:ring-[#619cdd]/30 transition bg-white"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#619cdd] focus:ring-2 focus:ring-[#619cdd]/30 transition bg-white"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry"
                  rows="5"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#619cdd] focus:ring-2 focus:ring-[#619cdd]/30 resize-none transition bg-white"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#619cdd] text-white py-4 rounded-full font-bold hover:bg-[#4287f6] hover:shadow-[0_0_20px_rgba(97,156,221,0.6)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
