import locationMap from '../assets/location-map.jpg';
export default function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Faisal Town Phase 2 Location
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Faisal Town Phase 2 is strategically located along the M-2 Motorway.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Location Image with Hover Effect */}
<div className="rounded-2xl overflow-hidden shadow-lg h-96">
  <img
    src={locationMap}
    alt="Faisal Town Phase 2 Location"
    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
  />
</div>

          {/* Location Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600 text-lg">M-2 Motorway, Islamabad</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hours</h3>
              <p className="text-gray-600 text-lg">9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Location Highlights */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Faisal Town Phase 2 Location
          </h3>
          <div className="space-y-4 text-center text-gray-600 text-lg">
            <p>
              The Overseas Block enjoys a <strong>strategic location</strong> at <strong>Thalian Interchange</strong>, directly linked to the <strong>M-2 Lahore-Islamabad Motorway</strong>.
            </p>
            <p>
              It's only a <strong>10-minute drive from Islamabad International Airport</strong>, ensuring easy access for overseas residents and frequent travelers.
            </p>
            <div className="mt-8">
              <p className="font-bold text-gray-700 mb-4">Nearby Landmarks:</p>
              <div className="space-y-2">
                <p>Rawalpindi Ring Road (Direct access)</p>
                <p>Capital Smart City & Mumtaz City</p>
                <p>Islamabad International Airport</p>
                <p>Top City-1 & University Town</p>
              </div>
            </div>
            <p className="mt-8 text-gray-700">
              This unmatched connectivity makes Faisal Town Phase 2 one of the <strong>most promising real estate investments in Pakistan</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
