import aboutImage from '../assets/aboutSectionImage.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#619cdd]">Faisal Town</span> Phase 2
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A landmark development designed exclusively for Overseas Pakistanis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#619cdd]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Developer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Overseas Block of <strong className="text-[#619cdd]">Faisal Town Phase 2</strong> is a landmark development by <strong>Zedem International (Pvt) Ltd</strong>, the trusted name behind successful projects like <em>Faisal Hills</em>, <em>Faisal Margalla City</em>, and <em>Faisal Town Phase 1</em>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#619cdd]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Designed for Overseas Pakistanis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This block is exclusively designed for <strong className="text-[#619cdd]">Overseas Pakistanis</strong> who seek a luxurious lifestyle, safe investment, and long-term property value in the twin cities of Islamabad and Rawalpindi.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gradient-to-br from-[#619cdd]/10 to-blue-100/50 rounded-xl">
                <div className="text-3xl font-bold text-[#619cdd]">20+</div>
                <div className="text-sm text-gray-700 font-medium mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#619cdd]/10 to-blue-100/50 rounded-xl">
                <div className="text-3xl font-bold text-[#619cdd]">5+</div>
                <div className="text-sm text-gray-700 font-medium mt-1">Successful Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#619cdd]/10 to-blue-100/50 rounded-xl">
                <div className="text-3xl font-bold text-[#619cdd]">100%</div>
                <div className="text-sm text-gray-700 font-medium mt-1">Customer Trust</div>
              </div>
            </div>
          </div>

          {/* Image with Decorative Frame */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Faisal Town Construction Site"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-[#619cdd] p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Under Development</div>
                    <div className="text-xs text-gray-600">Fast Track Project</div>
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
