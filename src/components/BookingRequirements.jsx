
export default function BookingRequirements() {
  return (
    <section className=" bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Booking Requirements */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
            Booking Requirements for Overseas Clients
          </h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            To book a plot in the Overseas Block, overseas Pakistanis need the following documents:
          </p>

          <div className="space-y-4 text-center text-gray-600 text-lg max-w-2xl mx-auto">
            <p>Copy of <strong>NICOP / Passport</strong></p>
            <p><strong>2 passport-size photographs</strong></p>
            <p><strong>Next of Kin's CNIC</strong> copy</p>
            <p><strong>Booking Form</strong> (available from authorized dealers)</p>
            <p className="text-sm mt-6">
              Payment through <strong>Pay Order / Bank Draft</strong> in favor of <em>Zedem International (Pvt) Ltd</em> or <em>Faisal Town Pvt. Ltd.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
