// Import your block images
import modelBlockImage from '../assets/model-block.gif';
import oBlockImage from '../assets/o-block.gif';
import overseasEnclaveImage from '../assets/overseas-enclave.png';


export default function OurBlocks() {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blocks
          </h2>
          <p className="text-gray-600 text-lg">
            Having Many Latest Blocks
          </p>
        </div>

        {/* First Row - Model Block Commercial & O Block Residential */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Model Block Commercial */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={modelBlockImage}
              alt="Model Block Commercial Payment Plan"
              className="w-full h-auto object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Model Block Commercial
              </h3>
            </div>
          </div>

          {/* O Block Residential */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={oBlockImage}
              alt="O Block Residential Payment Plan"
              className="w-full h-auto object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                O Block Residential
              </h3>
            </div>
          </div>
        </div>

        {/* Second Row - Overseas Enclave Phase 2 (Full Width) */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Overseas Enclave Phase 2
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-5xl mx-auto">
            <img
              src={overseasEnclaveImage}
              alt="Overseas Enclave Phase 2 Payment Plan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
