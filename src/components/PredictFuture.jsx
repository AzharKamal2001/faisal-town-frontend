export default function PredictFuture() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
    
        {/* Main Boulevard Table */}
        <h3 className="text-3xl font-bold text-yellow-500 text-center mb-8 mt-12">MAIN BOULEVARD</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-3">Plot Size</th>
                <th className="border border-gray-300 px-4 py-3">VALUES PER SQYD</th>
                <th className="border border-gray-300 px-4 py-3">PLOT VALUE WIH DEVELOPMENT COST</th>
                <th className="border border-gray-300 px-4 py-3">DEVELOPMENT 25% OFF PLOT VALUE</th>
                <th className="border border-gray-300 px-4 py-3">16 Quarterly Installment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-3 font-bold bg-blue-700 text-white">25×50 (139 Sq.Yds)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">140,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">31,171,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">7,840,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">1,455,000</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3 font-bold bg-blue-700 text-white">30×60 (200 Sq.Yds)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">140,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">42,837,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">10,740,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2,005,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-3 font-bold bg-blue-700 text-white">35×70 (272 Sq.Yds)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">140,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">46,726,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">11,730,000</td>
                <td className="border border-gray-300 px-4 py-3 text-center">2,185,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Terms */}
        <div className="mt-6 bg-blue-700 text-white p-4 rounded">
          <p className="text-sm">-The prices are inclusive of development charges.</p>
          <p className="text-sm">-Payment will received in the shape of Pay Order/ Demand Draft, cash and online transfer in favor of Faisal Town PVT Ltd NTN</p>
        </div>
      </div>
    </section>
  );
}
