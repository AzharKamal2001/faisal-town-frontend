// Import your block images
import modelBlockImage from '../assets/model-block.gif';
import oBlockImage from '../assets/o-block.gif';
import overseasEnclaveImage from '../assets/overseas-enclave.png';

export default function OurBlocks() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Available Blocks
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#619cdd]">Premium</span> Blocks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest residential and commercial blocks
          </p>
        </div>

        {/* First Row - Model Block Commercial & O Block Residential */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Model Block Commercial */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500 transform hover:scale-[1.02]">
            <div className="relative overflow-hidden">
              <img
                src={modelBlockImage}
                alt="Model Block Commercial Payment Plan"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-[#619cdd] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  Commercial
                </span>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#619cdd]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Model Block</h3>
                    <p className="text-sm text-gray-400">Commercial Properties</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-[#619cdd] transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          {/* O Block Residential */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500 transform hover:scale-[1.02]">
            <div className="relative overflow-hidden">
              <img
                src={oBlockImage}
                alt="O Block Residential Payment Plan"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  Residential
                </span>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#619cdd]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v8h-2v-6H8v6H6v-8l6-5.16z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">O Block</h3>
                    <p className="text-sm text-gray-400">Residential Properties</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-[#619cdd] transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Overseas Enclave Phase 2 (Full Width) */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              <span className="text-[#619cdd]">Overseas Enclave</span> Phase 2
            </h2>
            <p className="text-gray-600">Exclusively designed for overseas Pakistanis</p>
          </div>
          
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <div className="relative">
              <img
                src={overseasEnclaveImage}
                alt="Overseas Enclave Phase 2 Payment Plan"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-[#619cdd] to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  Featured Block
                </span>
              </div>
            </div>
            
            {/* Info Footer */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#619cdd]/20 p-3 rounded-lg">
                    <svg className="w-7 h-7 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Prime Location</h4>
                    <p className="text-sm text-gray-400">Islamabad & Rawalpindi Twin Cities</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    const phoneNumber = '923390190109';
                    const message = 'Hello, I am interested in Overseas Enclave Phase 2.';
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappURL, '_blank');
                  }}
                  className="bg-[#619cdd] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4287f6] hover:shadow-[0_0_20px_rgba(97,156,221,0.6)] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Get Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
