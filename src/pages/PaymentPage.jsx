
import Navbar from '../components/Navbar';
import PaymentHero from '../components/PaymentHero';
import PaymentBlocksGrid from '../components/PaymentBlocksGrid';
import TestimonialSection from '../components/TestimonialSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function PaymentPage() {
  return (
    <div className="w-full">
      <Navbar />
      <PaymentHero />
      <PaymentBlocksGrid />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
