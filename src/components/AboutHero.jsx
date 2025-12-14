import image1 from '../assets/aboutUs-image1.png';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Page Badge */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20">
            Our Story
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-[#619cdd]">Us</span>
            </h1>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-xs font-bold border border-[#619cdd]/20 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                Overseas Focused
              </span>
              <span className="bg-green-500/10 text-green-700 px-4 py-2 rounded-full text-xs font-bold border border-green-500/20 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Premium Development
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  Faisal Town Phase 2 Overseas Block is a <strong className="text-gray-900">premium residential zone</strong> developed by <em>Zedem International (Pvt) Ltd</em>, led by the renowned developer <strong className="text-[#619cdd]">Chaudhry Abdul Majeed</strong>.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  This block is <strong className="text-gray-900">specially designed for overseas Pakistanis</strong> who want to invest or settle in Pakistan while enjoying international living standards, luxurious amenities, and long-term financial security.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  The Overseas Block represents the <strong className="text-gray-900">most exclusive sector</strong> within Faisal Town Phase 2 — offering advanced infrastructure, a peaceful environment, and direct access to key routes in the twin cities.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-[#619cdd]/10 to-blue-100/50 rounded-xl">
                <div className="text-3xl font-bold text-[#619cdd]">20+</div>
                <div className="text-xs text-gray-700 font-medium mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#619cdd]/10 to-blue-100/50 rounded-xl">
                <div className="text-3xl font-bold text-[#619cdd]">5+</div>
                <div className="text-xs text-gray-700 font-medium mt-1">Successful Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#619cdd]/10 to-blue-100/50 rounded-xl">
                <div className="text-3xl font-bold text-[#619cdd]">100%</div>
                <div className="text-xs text-gray-700 font-medium mt-1">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#619cdd] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4287f6] hover:shadow-[0_0_20px_rgba(97,156,221,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={image1}
                  alt="Faisal Town Development Team"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Info Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-[#619cdd] p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Trusted Developer</div>
                    <div className="text-xs text-gray-600">Zedem International</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
