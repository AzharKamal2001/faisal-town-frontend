
import { Link } from 'react-router-dom';
import image2 from '../assets/aboutUs-image2.avif'
import image3 from '../assets/aboutUs-image3.webp'
import image6 from '../assets/aboutUs-image6.webp'
import image7 from '../assets/aboutUs-image7.avif'

export default function PaymentBlocksGrid() {
  return (
    <section className="md:py-20 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Model Block */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-5">
            <img
              src={image6}
              alt="Model Block"
              className="w-full h-80 object-contain"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Model Block
              </h3>
              <p className="text-gray-600 text-lg">
                Luxury living spaces available.
              </p>
            </div>
          </div>

          {/* Overseas Block */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={image2}
              alt="Overseas Block"
              className="w-full h-80 object-contain"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Overseas Block
              </h3>
              <p className="text-gray-600 text-lg">
                Designed for global residents.
              </p>
            </div>
          </div>

          {/* N Block */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={image3}
              alt="N Block"
              className="w-full h-80 object-contain"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                N Block
              </h3>
              <p className="text-gray-600 text-lg">
                Affordable plots for families.
              </p>
            </div>
          </div>

          {/* General Block */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={image7}
              alt="General Block"
              className="w-full h-80 object-contain"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                General Block
              </h3>
              <p className="text-gray-600 text-lg">
                Ideal for investment opportunities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
