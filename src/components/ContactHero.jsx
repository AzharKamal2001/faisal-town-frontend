import contactBg from '../assets/contact-page-background-image.jpg';
export default function ContactHero() {
  return (
    <section className="relative bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${contactBg})`
        }}
      ></div>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          Plan To Book, Get in touch with us to help booking to Delivering
        </p>
      </div>
    </section>
  );
}
