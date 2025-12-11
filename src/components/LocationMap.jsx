import locationMap from '../assets/location-map.jpg';

export default function LocationMap() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Location</h2>
        <p className="text-gray-600 text-lg mb-12">
          Visit us at Faisal Town Phase 2 for your housing needs.
        </p>

        {/* Address and Hours - Top Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
            <p className="text-gray-600 text-lg">M-2 Motorway, Islamabad</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hours</h3>
            <p className="text-gray-600 text-lg">9 AM - 5 PM</p>
          </div>
        </div>

        {/* Map Image - Bottom Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-96 md:h-[500px]">
          <img
            src={locationMap}
            alt="Faisal Town Phase 2 Location"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
