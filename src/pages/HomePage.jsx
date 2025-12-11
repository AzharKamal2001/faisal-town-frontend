
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CommercialSection from '../components/CommercialSection';
import AboutSection from '../components/AboutSection';
import PropertiesGrid from '../components/PropertiesGrid';
import OurBlocks from '../components/OurBlocks';
import OverseasEnclave from '../components/OverseasEnclave';
import PredictFuture from '../components/PredictFuture';
import PaymentPlan from '../components/PaymentPlan';
import WhyInvest from '../components/WhyInvest';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <CommercialSection />
      <AboutSection />
      <PropertiesGrid />
      <OurBlocks />
      {/* <OverseasEnclave /> */}
      {/* <PredictFuture /> */}
      {/* <PaymentPlan /> */}
      {/* <WhyInvest /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}
