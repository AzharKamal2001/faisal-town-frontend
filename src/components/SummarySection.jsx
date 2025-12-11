import summaryVideo from '../assets/development-update.mp4';
import { useEffect, useRef } from 'react';

export default function SummarySection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Summary
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Faisal Town Phase 2 Overseas Block is more than just a housing scheme — it's a <strong>gateway for overseas Pakistanis</strong> to reconnect with their homeland through a <strong>secure, profitable, and luxurious investment</strong>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With unmatched location, strong developer reputation, and exceptional amenities, it's one of the <strong>most promising projects</strong> in the Islamabad–Rawalpindi real estate market.
            </p>
          </div>

          {/* Right - Video */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              loop
              playsInline
            >
              <source src={summaryVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
