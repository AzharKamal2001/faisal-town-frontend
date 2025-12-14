import testimonialImage from '../assets/testimonial-background-image.jpeg'
import testimonialuserImage from '../assets/testimonial-userImage.jpeg'

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#619cdd]">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from satisfied investors who chose Faisal Town Phase 2
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          {/* Left - Image */}
          <div className="relative h-full group overflow-hidden">
            <img
              src={testimonialImage}
              alt="Faisal Town Construction"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-gray-900">Verified Review</span>
              </div>
            </div>
          </div>

          {/* Right - Testimonial Content */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <svg className="w-32 h-32 text-[#619cdd]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center relative z-10">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-7 h-7 text-yellow-400 fill-current drop-shadow-lg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Rating Badge */}
            <div className="text-center mb-6">
              <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold border border-yellow-500/30">
                5.0 Star Rating
              </span>
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl font-semibold text-center mb-8 leading-relaxed relative z-10">
              "Faisal Town Phase 2 is the <span className="text-[#619cdd]">best investment choice</span>! The location, amenities, and payment plans are exceptional."
            </p>

            {/* Author */}
            <div className="flex flex-col items-center relative z-10">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#619cdd] shadow-lg">
                  <img
                    src={testimonialuserImage}
                    alt="Ali Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verified Badge */}
                <div className="absolute -bottom-1 -right-1 bg-[#619cdd] rounded-full p-1 border-2 border-gray-800">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <p className="text-xl font-bold">Ali Khan</p>
              <p className="text-sm text-gray-400 mt-1">Overseas Investor, UK</p>
            </div>
          </div>
        </div>

        {/* Additional Trust Badges */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="inline-block bg-green-500/10 p-3 rounded-lg mb-3">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="inline-block bg-yellow-500/10 p-3 rounded-lg mb-3">
              <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="inline-block bg-[#619cdd]/10 p-3 rounded-lg mb-3">
              <svg className="w-8 h-8 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-600">Verified Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
