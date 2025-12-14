export default function BookingRequirements() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#619cdd] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#619cdd]/10 text-[#619cdd] px-4 py-2 rounded-full text-sm font-semibold border border-[#619cdd]/20 mb-4">
            Overseas Pakistanis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Booking <span className="text-[#619cdd]">Requirements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple documentation process for overseas clients to secure their investment
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-[#619cdd]/10 p-3 rounded-xl">
                  <svg className="w-7 h-7 text-[#619cdd]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
              </div>
              <p className="text-gray-600">To book a plot in the Overseas Block, you'll need the following:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Document 1 */}
              <div className="bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl p-6 border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#619cdd] p-2 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Identity Document</h4>
                    <p className="text-gray-700 text-sm">Copy of <strong className="text-[#619cdd]">NICOP / Passport</strong></p>
                  </div>
                </div>
              </div>

              {/* Document 2 */}
              <div className="bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl p-6 border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#619cdd] p-2 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Photographs</h4>
                    <p className="text-gray-700 text-sm"><strong className="text-[#619cdd]">2 passport-size</strong> photographs</p>
                  </div>
                </div>
              </div>

              {/* Document 3 */}
              <div className="bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl p-6 border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#619cdd] p-2 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Next of Kin</h4>
                    <p className="text-gray-700 text-sm"><strong className="text-[#619cdd]">Next of Kin's CNIC</strong> copy</p>
                  </div>
                </div>
              </div>

              {/* Document 4 */}
              <div className="bg-gradient-to-br from-[#619cdd]/5 to-blue-50 rounded-xl p-6 border border-[#619cdd]/10 hover:border-[#619cdd]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#619cdd] p-2 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Booking Form</h4>
                    <p className="text-gray-700 text-sm">Available from <strong className="text-[#619cdd]">authorized dealers</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-500/10 p-3 rounded-xl">
              <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Payment Method</h3>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Payment through <strong className="text-green-600">Pay Order / Bank Draft</strong> in favor of:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-900">Zedem International (Pvt) Ltd</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-900">Faisal Town Pvt. Ltd.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-[#619cdd] to-blue-500 rounded-2xl p-8 md:p-10 shadow-2xl text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/20 p-3 rounded-xl mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Need Assistance?
              </h3>
              <p className="text-lg mb-6 opacity-95">
                Our team is ready to guide you through the booking process
              </p>
              <button
                onClick={() => {
                  const phoneNumber = '923390190109';
                  const message = 'Hello, I need help with the booking requirements for Faisal Town Phase 2 Overseas Block.';
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="bg-white text-[#619cdd] px-10 py-4 rounded-full font-bold hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get Booking Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
