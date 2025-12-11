
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import ProjectHighlights from '../components/ProjectHighlights';
import PaymentPlans from '../components/PaymentPlans';
import BookingRequirements from '../components/BookingRequirements';
import WhyInvestSection from '../components/WhyInvestSection';
import LocationSection from '../components/LocationSection';
import SummarySection from '../components/SummarySection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="w-full">
      <Navbar />
      <AboutHero />
      <LocationSection />
      <ProjectHighlights />
      <PaymentPlans />
      <BookingRequirements />
      <WhyInvestSection />
      <SummarySection />
      <ContactForm />
      <Footer />
    </div>
  );
}
