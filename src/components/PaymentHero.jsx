export default function PaymentHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20">
            Payment Plans
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our <span className="text-[#619cdd]">Projects</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-8">
          Explore our premium offerings with flexible payment plans
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-100 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            4.5 Year Plans
          </span>
          <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-100 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Easy Installments
          </span>
          <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-100 flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Multiple Options
          </span>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#619cdd] mb-1">6+</div>
            <div className="text-sm text-gray-600">Payment Plans</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-1">18</div>
            <div className="text-sm text-gray-600">Quarterly Installments</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-1">4.5</div>
            <div className="text-sm text-gray-600">Years Duration</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Flexible</div>
          </div>
        </div>
      </div>
    </section>
  );
}
