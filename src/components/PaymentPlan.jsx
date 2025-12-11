
export default function PaymentPlan() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Payment Plan</h3>
            <p className="text-gray-700 leading-relaxed">
              The society offers a <strong>flexible 4.5-year payment plan</strong> with <strong>18 quarterly installments</strong>, making it easy for families and investors to own a plot without financial burden.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Buyers can also avail a <strong>20% discount</strong> on full payment at the time of booking.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Payment Plan</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>4-year installment plan</strong> with convenient quarterly payments</li>
              <li><strong>Down payment</strong> starting from 20–25% of total plot value</li>
              <li><strong>Discounts</strong> on full upfront payment</li>
              <li>Prices starting from around <strong>PKR 13 million</strong> for smaller plots</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
