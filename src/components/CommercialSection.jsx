import mainBoulevard from '../assets/main-boulevard-commercial.avif';
import commercialPlan from '../assets/commercial-payment-plan.avif';

export default function CommercialSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* First Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Predict the future
          </h2>
          

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <img
              src={mainBoulevard}
              alt="Main Boulevard Commercial Payment Plan"
              className="w-full h-auto object-contain"
            />
          </div>

      
         
        </div>

        {/* Second Section */}
        <div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <img
              src={commercialPlan}
              alt="Faisal Town Phase II Commercial Payment Plan"
              className="w-full h-auto object-contain"
            />
          </div>

         
          
        </div>

      </div>
    </section>
  );
}
