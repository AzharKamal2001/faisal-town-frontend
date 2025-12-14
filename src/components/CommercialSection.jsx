import mainBoulevard from '../assets/main-boulevard-commercial.avif';
import commercialPlan from '../assets/commercial-payment-plan.avif';

export default function CommercialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Commercial Opportunities
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Investment Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium commercial spaces with flexible payment options
          </p>
        </div>

        {/* Main Boulevard Commercial */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500 transform hover:scale-[1.02]">
            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900">
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <svg className="w-8 h-8 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.55c0 4.55-3.08 8.8-8 9.93-4.92-1.13-8-5.38-8-9.93V7.78l8-3.6z"/>
                </svg>
                Main Boulevard Commercial
              </h3>
              <p className="text-gray-300 mt-2">Prime location with high footfall and visibility</p>
            </div>
            <img
              src={mainBoulevard}
              alt="Main Boulevard Commercial Payment Plan"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Commercial Payment Plan */}
        <div>
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500 transform hover:scale-[1.02]">
            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900">
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <svg className="w-8 h-8 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
                </svg>
                Faisal Town Phase II Commercial Plan
              </h3>
              <p className="text-gray-300 mt-2">Flexible payment options for your investment</p>
            </div>
            <img
              src={commercialPlan}
              alt="Faisal Town Phase II Commercial Payment Plan"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">
            Ready to invest in premium commercial property?
          </p>
          <button 
            onClick={() => {
              const phoneNumber = '923390190109';
              const message = 'Hello, I am interested in Faisal Town Phase 2 Commercial Properties.';
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, '_blank');
            }}
            className="bg-[#619cdd] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4287f6] hover:shadow-[0_0_30px_rgba(97,156,221,0.6)] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Contact Us for Details
          </button>
        </div>

      </div>
    </section>
  );
}
