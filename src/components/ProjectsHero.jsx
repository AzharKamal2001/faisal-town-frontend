import image1 from '../assets/projects-image1.png'
import image2 from '../assets/projects-image2.jpg'
import image3 from '../assets/projects-image3.jpeg'
import deliveredProjects from '../assets/delivered-projects-image.jpg';





export default function ProjectsHero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-20">
          Our projects
        </h1>

        {/* Project 1 - Faisal Town Phase 1 (Image Right) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faisal Town Phase 1
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Faisal Town Phase 1 is a <strong>well-positioned, mature housing scheme</strong> in Islamabad/Rawalpindi with strong connectivity, solid infrastructure and an appealing mix of residential/commercial offerings. It presents a good option for both living and investment, especially for those who value convenience, access to the city and a planned community environment.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={image1}
              alt="Faisal Town Phase 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Project 2 - Faisal Hills (Image Left) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faisal Hills
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Faisal Hills stands out as a <strong>well-connected, approved housing society</strong> near Islamabad / Rawalpindi with modern infrastructure, scenic views, and a mix of residential and commercial options. It appeals to both end-users and investors, offering flexibility in plot sizes and budget. While it may not yet match the inner-city convenience of some older societies, its growth potential is considerable.
            </p>
          </div>
          <div className="md:order-1 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={image2}
              alt="Faisal Hills"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Project 3 - Faisal Residencia (Image Right) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Faisal Residencia
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Faisal Hills stands out as a <strong>well-connected, approved housing society</strong> near Islamabad / Rawalpindi with modern infrastructure, scenic views, and a mix of residential and commercial options. It appeals to both end-users and investors, offering flexibility in plot sizes and budget. While it may not yet match the inner-city convenience of some older societies, its growth potential is considerable.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={image3}
              alt="Faisal Residencia"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

         <div className="m-12">
          
          
        </div>
        <div className=" bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-7xl">
            <img
              src={deliveredProjects}
              alt="Overseas Enclave Phase 2 Payment Plan"
              className="w-full h-auto object-cover"
            />
          </div>
      </div>
    </section>
  );
}
