import Navbar from '../components/Navbar';
import ProjectsHero from '../components/ProjectsHero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <Navbar />
      <ProjectsHero />
      <ContactForm />
      <Footer />
    </div>
  );
}
