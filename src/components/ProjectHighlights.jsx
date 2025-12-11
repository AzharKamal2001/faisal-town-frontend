
export default function ProjectHighlights() {
  return (
    <section className=" bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
          Project Highlights & Features
        </h2>

        <div className="space-y-8 text-center">
          {/* Strategic Location */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Overseas Block enjoys a <strong>strategic location</strong> at <strong>Thalian Interchange</strong>, directly linked to the <strong>M-2 Lahore-Islamabad Motorway</strong>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              It's only a <strong>10-minute drive from Islamabad International Airport</strong>, ensuring easy access for overseas residents and frequent travelers.
            </p>
          </div>

          {/* Nearby Landmarks */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Nearby Landmarks:</h3>
            <div className="space-y-3 text-gray-600 text-lg">
              <p>Rawalpindi Ring Road (Direct access)</p>
              <p>Capital Smart City & Mumtaz City</p>
              <p>Islamabad International Airport</p>
              <p>Top City-1 & University Town</p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              This unmatched connectivity makes Faisal Town Phase 2 one of the <strong>most promising real estate investments in Pakistan</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
