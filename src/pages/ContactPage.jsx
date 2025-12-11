
import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import LocationMap from '../components/LocationMap';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="w-full">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <LocationMap />
      <ContactForm/>
      <Footer />
    </div>
  );
}
