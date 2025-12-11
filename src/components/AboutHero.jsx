import image1 from '../assets/aboutUs-image1.png';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Faisal Town Phase 2 Overseas Block is a <strong>premium residential zone</strong> developed by <em>Zedem International (Pvt) Ltd</em>, led by the renowned developer <strong>Chaudhry Abdul Majeed</strong>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              This block is <strong>specially designed for overseas Pakistanis</strong> who want to invest or settle in Pakistan while enjoying international living standards, luxurious amenities, and long-term financial security.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The Overseas Block represents the <strong>most exclusive sector</strong> within Faisal Town Phase 2 — offering advanced infrastructure, a peaceful environment, and direct access to key routes in the twin cities.
            </p>
                  <Link 
              to="/contact"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image1}
                alt="Faisal Town Development Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
