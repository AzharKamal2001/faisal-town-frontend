import { Link } from 'react-router-dom';
import image2 from '../assets/aboutUs-image2.avif'
import image3 from '../assets/aboutUs-image3.webp'
import image6 from '../assets/aboutUs-image6.webp'
import image7 from '../assets/aboutUs-image7.avif'

export default function PaymentBlocksGrid() {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Overseas Block */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500 border border-gray-100">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
              <img
                src={image2}
                alt="Overseas Block Payment Plan"
                className="w-full h-80 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-[#619cdd] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Premium
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#619cdd]/10 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Overseas Block
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Designed exclusively for global residents with flexible payment options.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#619cdd] font-semibold">
                <span>View Payment Plan</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Model Block */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_20px_50px_rgba(34,197,94,0.3)] transition-all duration-500 border border-gray-100">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white p-5">
              <img
                src={image6}
                alt="Model Block Payment Plan"
                className="w-full h-80 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Badge Overlay */}
              <div className="absolute top-8 right-8 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Popular
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Model Block
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Luxury living spaces with modern amenities and premium finishes.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                <span>View Payment Plan</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          {/* N Block */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)] transition-all duration-500 border border-gray-100">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
              <img
                src={image3}
                alt="N Block Payment Plan"
                className="w-full h-80 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Affordable
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  N Block
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Affordable residential plots perfect for families and first-time buyers.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
                <span>View Payment Plan</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          {/* General Block */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_20px_50px_rgba(249,115,22,0.3)] transition-all duration-500 border border-gray-100">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
              <img
                src={image7}
                alt="General Block Payment Plan"
                className="w-full h-80 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Investment
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  General Block
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Ideal for investment opportunities with high ROI potential.
              </p>
              <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold">
                <span>View Payment Plan</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
