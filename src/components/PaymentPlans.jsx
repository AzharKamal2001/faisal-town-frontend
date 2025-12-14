import image2 from '../assets/aboutUs-image2.avif'
import image3 from '../assets/aboutUs-image3.webp'
import image4 from '../assets/aboutUs-image4.avif'
import image5 from '../assets/aboutUs-image5.webp'
import image6 from '../assets/aboutUs-image6.webp'
import image7 from '../assets/aboutUs-image7.avif'

export default function PaymentPlans() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Flexible Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Payment <span className="text-[#619cdd]">Plans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easy 4.5-year installment plan with 18 quarterly installments
          </p>
        </div>

        <div className="space-y-8">
          {/* Overseas Enclave Payment Plan */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#619cdd]/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Overseas Enclave</h3>
                  <p className="text-sm text-gray-400">Payment Plan Details</p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs font-bold">
                Available
              </span>
            </div>
            <div className="p-6">
              <img
                src={image2}
                alt="Overseas Enclave Payment Plan"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Model Block Payment Plan */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#619cdd]/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Model Block</h3>
                  <p className="text-sm text-gray-400">Payment Plan Details</p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs font-bold">
                Available
              </span>
            </div>
            <div className="p-6">
              <img
                src={image5}
                alt="Model Block Payment Plan"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Commercial Payment Plan */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#619cdd]/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Commercial Plot</h3>
                  <p className="text-sm text-gray-400">Payment Plan Details</p>
                </div>
              </div>
              <span className="bg-[#619cdd]/20 text-[#619cdd] px-4 py-2 rounded-full text-xs font-bold">
                Premium
              </span>
            </div>
            <div className="p-6">
              <img
                src={image7}
                alt="Commercial Payment Plan"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* N Block Payment Plan */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#619cdd]/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">N Block</h3>
                  <p className="text-sm text-gray-400">Payment Plan Details</p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs font-bold">
                Available
              </span>
            </div>
            <div className="p-6">
              <img
                src={image3}
                alt="N Block Payment Plan"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Commercial Phase 2 Payment Plan */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#619cdd]/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Commercial Phase 2</h3>
                  <p className="text-sm text-gray-400">Payment Plan Details</p>
                </div>
              </div>
              <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-xs font-bold">
                New Launch
              </span>
            </div>
            <div className="p-6">
              <img
                src={image4}
                alt="Commercial Payment Plan"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Sector O Payment Plan */}
          <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#619cdd]/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sector O</h3>
                  <p className="text-sm text-gray-400">Payment Plan Details</p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs font-bold">
                Available
              </span>
            </div>
            <div className="p-6">
              <img
                src={image6}
                alt="Sector O Payment Plan"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-2xl p-8 md:p-12 shadow-2xl text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-lg mb-6 opacity-95">
                Our team is ready to assist you in finding the perfect payment plan for your investment
              </p>
              <button
                onClick={() => {
                  const phoneNumber = '923390190109';
                  const message = 'Hello, I need help choosing a payment plan for Faisal Town Phase 2.';
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="bg-white text-[#619cdd] px-10 py-4 rounded-full font-bold hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
