import locationMap from '../assets/location-map.jpg';

export default function LocationMap() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#619cdd]">Location</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at Faisal Town Phase 2 for all your housing needs
          </p>
        </div>

        {/* Info Cards - Top Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Address Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#619cdd]/10 p-3 rounded-xl mb-4">
                <svg className="w-7 h-7 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">M-2 Motorway</p>
              <p className="text-gray-600">Islamabad, Pakistan</p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-500/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500/10 p-3 rounded-xl mb-4">
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Saturday</p>
              <p className="text-green-600 font-semibold">9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-500/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500/10 p-3 rounded-xl mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+923165200360" className="text-gray-600 hover:text-[#619cdd] transition">
                +92 316 5200 360
              </a>
              <p className="text-gray-500 text-sm mt-1">24/7 Support</p>
            </div>
          </div>
        </div>

        {/* Map Section with Premium Frame */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          <div className="relative">
            {/* Map Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-2xl p-4 flex items-center justify-between border-4 border-white">
              <div className="flex items-center gap-3">
                <div className="bg-[#619cdd]/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Interactive Map</h3>
                  <p className="text-gray-400 text-xs">Faisal Town Phase 2 Location</p>
                </div>
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Active
              </span>
            </div>

            {/* Map Container */}
            <div className="rounded-b-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] border-4 border-t-0 border-white">
              <img
                src={locationMap}
                alt="Faisal Town Phase 2 Location"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Action Button */}
            <button
              onClick={() => {
                const address = 'Faisal Town Phase 2, M-2 Motorway, Islamabad';
                const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                window.open(googleMapsURL, '_blank');
              }}
              className="absolute bottom-6 right-6 bg-[#619cdd] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4287f6] hover:shadow-[0_0_30px_rgba(97,156,221,0.8)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Get Directions
            </button>
          </div>
        </div>

        {/* Additional Info Banner */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-2xl p-8 shadow-2xl text-white text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to Visit Us?
              </h3>
              <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
                Schedule a site visit and explore the premium amenities and location benefits of Faisal Town Phase 2
              </p>
              <button
                onClick={() => {
                  const phoneNumber = '923390190109';
                  const message = 'Hello, I would like to schedule a site visit to Faisal Town Phase 2.';
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="bg-white text-[#619cdd] px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
