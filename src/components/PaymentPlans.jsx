import image2 from '../assets/aboutUs-image2.avif'
import image3 from '../assets/aboutUs-image3.webp'
import image4 from '../assets/aboutUs-image4.avif'
import image5 from '../assets/aboutUs-image5.webp'
import image6 from '../assets/aboutUs-image6.webp'
import image7 from '../assets/aboutUs-image7.avif'


export default function PaymentPlans() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Payment Plans
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Easy 4.5-year installment plan with 18 quarterly installments.
        </p>

        <div className="space-y-12">
          {/* Each payment plan gets full width */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            
            <img
              src={image2}
              alt="Overseas Enclave Payment Plan"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            
            <img
              src={image3}
              alt="N Block Payment Plan"
              className="w-full h-auto rounded-lg"
            />
          </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
            
            <img
              src={image4}
              alt="Commercial Payment Plan"
              className="w-full h-auto rounded-lg"
            />
          </div>

           <div className="bg-white rounded-2xl shadow-lg p-6">
           
            <img
              src={image5}
              alt="Model Block Payment Plan"
              className="w-full h-auto rounded-lg"
            />
          </div>

           <div className="bg-white rounded-2xl shadow-lg p-6">
           
            <img
              src={image6}
              alt="Sector O Payment Plan"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
           
            <img
              src={image7}
              alt="Commercial Payment Plan"
              className="w-full h-auto rounded-lg"
            />
          </div>

         

         
        </div>
      </div>
    </section>
  );
}
