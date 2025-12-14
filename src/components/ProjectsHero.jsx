import image1 from '../assets/projects-image1.png'
import image2 from '../assets/projects-image2.jpg'
import image3 from '../assets/projects-image3.jpeg'
import deliveredProjects from '../assets/delivered-projects-image.jpg';

export default function ProjectsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#619cdd]">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our successful real estate developments across Islamabad and Rawalpindi
          </p>
        </div>

        {/* Project 1 - Faisal Town Phase 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <div className="inline-block bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20 mb-4">
              COMPLETED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faisal Town <span className="text-[#619cdd]">Phase 1</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Faisal Town Phase 1 is a <strong className="text-gray-900">well-positioned, mature housing scheme</strong> in Islamabad/Rawalpindi with strong connectivity, solid infrastructure and an appealing mix of residential/commercial offerings.
            </p>
            
            {/* Key Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Strong connectivity to major areas</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Solid infrastructure development</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Residential & commercial options</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={image1}
                alt="Faisal Town Phase 1"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Project 2 - Faisal Hills */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="md:order-2">
            <div className="inline-block bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/20 mb-4">
              ESTABLISHED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faisal <span className="text-[#619cdd]">Hills</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Faisal Hills stands out as a <strong className="text-gray-900">well-connected, approved housing society</strong> near Islamabad / Rawalpindi with modern infrastructure, scenic views, and a mix of residential and commercial options.
            </p>
            
            {/* Key Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Approved housing society</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Scenic mountain views</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Flexible plot sizes available</span>
              </div>
            </div>
          </div>

          <div className="md:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={image2}
                alt="Faisal Hills"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Project 3 - Faisal Residencia */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block bg-purple-500/10 text-purple-700 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/20 mb-4">
              GROWING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faisal <span className="text-[#619cdd]">Residencia</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Faisal Hills stands out as a <strong className="text-gray-900">well-connected, approved housing society</strong> near Islamabad / Rawalpindi with modern infrastructure, scenic views, and a mix of residential and commercial options.
            </p>
            
            {/* Key Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Modern infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Investment opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#619cdd] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">High growth potential</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={image3}
                alt="Faisal Residencia"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Delivered Projects Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Delivered <span className="text-[#619cdd]">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record of successfully completed projects speaks for itself
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(97,156,221,0.3)] transition-all duration-500">
            <img
              src={deliveredProjects}
              alt="Delivered Projects Overview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
