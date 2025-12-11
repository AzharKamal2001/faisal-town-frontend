import testimonialImage from '../assets/testimonial-background-image.jpeg'
import testimonialuserImage from '../assets/testimonial-userImage.jpeg'


export default function TestimonialSection() {
  return (
    <section className="pb-15 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left - Image */}
          <div className="h-full">
            <img
              src={testimonialImage}
              alt="Faisal Town Construction Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Testimonial */}
          <div className="bg-[#2d4c6b] text-white p-12 flex flex-col justify-center">
            {/* Stars */}
            <div className="flex gap-2 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-white fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-2xl md:text-3xl font-semibold text-center mb-8">
              Faisal Town Phase 2 is the best investment choice!
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white">
                <img
                  src={testimonialuserImage}
                  alt="Ali Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-semibold">Ali Khan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
