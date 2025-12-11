import aboutImage from '../assets/aboutSectionImage.jpeg';
export default function AboutSection() {
  return (
    <section id="about" className="bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="md:text-4xl text-2xl font-bold mb-6">About Faisal Town Phase 2</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Overseas Block of <strong>Faisal Town Phase 2</strong> is a landmark development by <strong>Zedem International (Pvt) Ltd</strong>, the trusted name behind successful projects like <em>Faisal Hills</em>, <em>Faisal Margalla City</em>, and <em>Faisal Town Phase 1</em>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This block is exclusively designed for <strong>Overseas Pakistanis</strong> who seek a luxurious lifestyle, safe investment, and long-term property value in the twin cities of Islamabad and Rawalpindi.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Faisal Town Construction Site"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
