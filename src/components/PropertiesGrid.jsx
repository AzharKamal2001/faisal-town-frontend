import PaymentPlan from "./PaymentPlan";
import WhyInvest from "./WhyInvest";
import GridImage1 from '../assets/PropertiesGrid-image1.avif'
import GridImage2 from '../assets/PropertiesGrid-image2.avif'


export default function PropertiesGrid() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Faisal Town Phase 2
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Explore our premium housing solutions.
        </p>

        {/* Grid with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Overseas Enclave Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
            <div className="p-4">
              <img
                src={GridImage1}
                alt="Overseas Enclave Payment Plan"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Main Boulevard Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">

            <div className="p-4">
              <img
                src={GridImage2}
                alt="Main Boulevard Payment Plan"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Description Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Residential</h3>
            <p className="text-gray-700 leading-relaxed">
              Faisal Town Phase 2 offers a wide range of <strong>residential plots</strong> designed for comfortable living, secure investment, and future growth. Developed by <strong>Zedem International (Pvt) Ltd</strong>, this modern housing society is built on trust, quality, and innovation — making it one of the most promising real estate projects in Islamabad and Rawalpindi.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Commercial</h3>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Commercial Plots</strong> in Faisal Town Phase 2 are strategically located along the <strong>Main Boulevard and Markaz zones</strong>, making them ideal for shops, offices, malls, and mixed-use developments. These plots are perfect for investors and business owners looking to establish their presence in a high-demand real estate market.
            </p>
          </div>
        </div>

        {/* Additional Sections */}
        <PaymentPlan />
        <WhyInvest />
      </div>
    </section>
  );
}
