export default function ProjectHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="text-[#619cdd]">Highlights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Faisal Town Phase 2 the perfect investment choice
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Strategic Location Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                <svg className="w-7 h-7 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategic Location</h3>
                <span className="inline-block bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  Prime Access
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Located at <strong className="text-[#619cdd]">Thalian Interchange</strong>, directly linked to the <strong>M-2 Lahore-Islamabad Motorway</strong> for seamless connectivity.
              </p>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <p className="text-gray-700 text-sm">Direct motorway access for major city connectivity</p>
              </div>
            </div>
          </div>

          {/* Airport Proximity Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                <svg className="w-7 h-7 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Airport Proximity</h3>
                <span className="inline-block bg-purple-500/10 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                  10 Minutes Away
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Only a <strong className="text-[#619cdd]">10-minute drive from Islamabad International Airport</strong>, perfect for overseas residents and frequent travelers.
              </p>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <p className="text-gray-700 text-sm">Quick access for international travel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Landmarks Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Nearby Landmarks</h3>
            </div>
            <p className="text-gray-600">Surrounded by key developments and essential infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Landmark 1 */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="bg-[#619cdd] p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Rawalpindi Ring Road</span>
            </div>

            {/* Landmark 2 */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="bg-[#619cdd] p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Capital Smart City</span>
            </div>

            {/* Landmark 3 */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="bg-[#619cdd] p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Islamabad Airport</span>
            </div>

            {/* Landmark 4 */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="bg-[#619cdd] p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Mumtaz City</span>
            </div>

            {/* Landmark 5 */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="bg-[#619cdd] p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Top City-1</span>
            </div>

            {/* Landmark 6 */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
              <div className="bg-[#619cdd] p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">University Town</span>
            </div>
          </div>
        </div>

        {/* Investment Highlight */}
        <div className="bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-2xl p-8 md:p-12 shadow-2xl text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-white/20 p-3 rounded-xl mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Premier Investment Opportunity
            </h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              This unmatched connectivity makes Faisal Town Phase 2 one of the <strong>most promising real estate investments in Pakistan</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
