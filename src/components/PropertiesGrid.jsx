import PaymentPlan from "./PaymentPlan";
import WhyInvest from "./WhyInvest";
import GridImage1 from '../assets/PropertiesGrid-image1.avif'
import GridImage2 from '../assets/PropertiesGrid-image2.avif'

export default function PropertiesGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Our Properties
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#619cdd]">Faisal Town</span> Phase 2
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium housing solutions designed for modern living
          </p>
        </div>

        {/* Grid with Images - Premium Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Overseas Enclave Image */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500 transform hover:scale-[1.02]">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#619cdd]/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Overseas Enclave</h3>
              </div>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                Available
              </span>
            </div>
            <div className="p-4">
              <img
                src={GridImage1}
                alt="Overseas Enclave Payment Plan"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Main Boulevard Image */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500 transform hover:scale-[1.02]">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#619cdd]/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Main Boulevard</h3>
              </div>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                Available
              </span>
            </div>
            <div className="p-4">
              <img
                src={GridImage2}
                alt="Main Boulevard Payment Plan"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Description Cards - Enhanced Design */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Residential Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-[#619cdd] to-blue-500 p-4 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v8h-2v-6H8v6H6v-8l6-5.16z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Residential</h3>
                <p className="text-sm text-[#619cdd] font-semibold">Premium Living Spaces</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Faisal Town Phase 2 offers a wide range of <strong className="text-[#619cdd]">residential plots</strong> designed for comfortable living, secure investment, and future growth. Developed by <strong>Zedem International (Pvt) Ltd</strong>, this modern housing society is built on trust, quality, and innovation — making it one of the most promising real estate projects in Islamabad and Rawalpindi.
            </p>
            
            {/* Features List */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Secure gated community</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Modern infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Prime location</span>
              </div>
            </div>
          </div>

          {/* Commercial Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-[#619cdd]/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-[#619cdd] to-blue-500 p-4 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Commercial</h3>
                <p className="text-sm text-[#619cdd] font-semibold">Business Opportunities</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The <strong className="text-[#619cdd]">Commercial Plots</strong> in Faisal Town Phase 2 are strategically located along the <strong>Main Boulevard and Markaz zones</strong>, making them ideal for shops, offices, malls, and mixed-use developments. These plots are perfect for investors and business owners looking to establish their presence in a high-demand real estate market.
            </p>
            
            {/* Features List */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>High footfall areas</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Strategic locations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Investment potential</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <PaymentPlan />
        <WhyInvest />
      </div>
    </section>
  );
}
