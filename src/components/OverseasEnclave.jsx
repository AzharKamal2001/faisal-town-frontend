
export default function OverseasEnclave() {
  const overseasData = [
    { size: '5 MARLA (25×50)', totalPrice: '3,495,000', downPayment: '690,000', quarterly: '175,000', final: '180,000', discount: '2,790,000' },
    { size: '8 MARLA (30×60)', totalPrice: '4,665,000', downPayment: '750,000', quarterly: '245,000', final: '2,40,000', discount: '3,730,000' },
    { size: '10 MARLA (35×70)', totalPrice: '6,065,000', downPayment: '890,000', quarterly: '320,000', final: '375,000', discount: '4,850,000' },
    { size: '14 MARLA (40×80)', totalPrice: '7,585,000', downPayment: '1,160,000', quarterly: '400,000', final: '425,000', discount: '6,060,000' },
    { size: '1 KANAL (50×90)', totalPrice: '10,115,000', downPayment: '1,315,000', quarterly: '550,000', final: '590,000', discount: '8,120,000' },
    { size: '2 KANAL (75×120)', totalPrice: '19,295,000', downPayment: '1,595,000', quarterly: '1,105,000', final: '1,125,000', discount: '15,430,000' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h5 className="text-xl font-bold text-center mb-4">350'WIDE</h5>
        <h2 className="text-4xl font-bold text-center mb-4">OVERSEAS ENCLAVE</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mt-8">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-3">Plot Size</th>
                <th className="border border-gray-300 px-4 py-3">TOTAL PRICE</th>
                <th className="border border-gray-300 px-4 py-3">DOWN PAYMENT</th>
                <th className="border border-gray-300 px-4 py-3">15 Quarterly Installment</th>
                <th className="border border-gray-300 px-4 py-3">FINAL Installment</th>
                <th className="border border-gray-300 px-4 py-3 bg-yellow-500 text-black">20% DISCOUNT</th>
              </tr>
            </thead>
            <tbody>
              {overseasData.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className="border border-gray-300 px-4 py-3 font-bold bg-blue-700 text-white">{item.size}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.totalPrice}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.downPayment}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.quarterly}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.final}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.discount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terms */}
        <div className="mt-6 bg-blue-700 text-white p-4 rounded">
          <p className="text-sm">- The prices are inclusive of development charges.</p>
          <p className="text-sm">- Payment will received in the shape of Pay Order/ Demand Draft, cash and online transfer in favor of Faisal Town PVT Ltd NTN # 7243972-7</p>
        </div>
      </div>
    </section>
  );
}
