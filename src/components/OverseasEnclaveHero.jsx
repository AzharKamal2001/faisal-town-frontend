import overseasImage from '../assets/overseasSectionImage.jpeg'
export default function OverseasEnclaveHero() {
  // WhatsApp handler function for buttons
  const handleWhatsAppClick = () => {
    const phoneNumber = '923481264493'; // Without + or spaces
    const message = 'Hello, I am interested in Faisal Town Phase 2.'; // Optional pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Faisal Town Overseas Block
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Faisal Town Phase 2 Overseas Block is a well-planned community that offers modern residential options in a prime location. It features a blend of contemporary design and natural beauty, ensuring a high quality of life for its residents. The block is equipped with essential amenities such as parks, schools, shopping areas, and healthcare facilities, making it an ideal choice for families and investors alike. Its strategic positioning provides easy access to major roads and commercial hubs, enhancing the convenience and appeal of living in this vibrant community.
            </p>
            <button className="bg-green-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition text-lg "onClick={handleWhatsAppClick}>
              WhatsApp
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={overseasImage}
                alt="Faisal Town Construction Site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
