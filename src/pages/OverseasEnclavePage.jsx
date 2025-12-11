
import Navbar from '../components/Navbar';
import OverseasEnclaveHero from '../components/OverseasEnclaveHero';
import OverseasEnclaveContact from '../components/OverseasEnclaveContact';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function OverseasEnclavePage() {
  return (
    <div className="w-full">
      <Navbar />
      <OverseasEnclaveHero />
      <ContactForm/>
      <Footer />
    </div>
  );
}
