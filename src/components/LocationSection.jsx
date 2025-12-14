import locationMap from '../assets/location-map.jpg';

export default function LocationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Location
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Faisal Town Phase 2 <span className="text-[#619cdd]">Location</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategically located along the M-2 Motorway with unmatched connectivity
          </p>
        </div>

        {/* Map and Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Location Image with Premium Frame */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-96">
              <img
                src={locationMap}
                alt="Faisal Town Phase 2 Location"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Map Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-900">M-2 Motorway</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">M-2 Motorway, Thalian Interchange</p>
                  <p className="text-gray-600">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Saturday</p>
                  <p className="text-[#619cdd] font-semibold">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Distance Card */}
            <div className="bg-gradient-to-br from-[#619cdd]/10 to-blue-100/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#619cdd]/20">
              <div className="flex items-start gap-4">
                <div className="bg-[#619cdd] p-3 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Airport Distance</h3>
                  <p className="text-gray-700 font-semibold">Only 10 minutes from Islamabad International Airport</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Highlights */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic <span className="text-[#619cdd]">Connectivity</span>
            </h3>
            <p className="text-lg text-gray-600">
              The Overseas Block enjoys unmatched connectivity to major landmarks and routes
            </p>
          </div>

          {/* Key Points */}
          <div className="space-y-4 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#619cdd]/30 transition-all duration-300">
              <p className="text-gray-700 leading-relaxed">
                Located at <strong className="text-[#619cdd]">Thalian Interchange</strong>, directly linked to the <strong className="text-gray-900">M-2 Lahore-Islamabad Motorway</strong> for seamless travel across major cities.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#619cdd]/30 transition-all duration-300">
              <p className="text-gray-700 leading-relaxed">
                Just a <strong className="text-[#619cdd]">10-minute drive from Islamabad International Airport</strong>, ensuring easy access for overseas residents and frequent travelers.
              </p>
            </div>
          </div>

          {/* Nearby Landmarks Grid */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Nearby <span className="text-[#619cdd]">Landmarks</span>
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Rawalpindi Ring Road</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Capital Smart City</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Islamabad Airport</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Top City-1</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Mumtaz City</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">University Town</span>
              </div>
            </div>
          </div>

          {/* Final Statement */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#619cdd]/10 via-blue-100/50 to-[#619cdd]/10 rounded-2xl p-8 border border-[#619cdd]/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                This unmatched connectivity makes Faisal Town Phase 2 one of the <strong className="text-[#619cdd]">most promising real estate investments in Pakistan</strong> 🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
