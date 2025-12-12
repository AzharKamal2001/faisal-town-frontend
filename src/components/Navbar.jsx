import { useState } from 'react';
import { Link } from 'react-router-dom';
import faisalLogo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp handler function
  const handleWhatsAppClick = () => {
    const phoneNumber = '923390190109'; // Without + or spaces
    const message = 'Hello, I am interested in Faisal Town Phase 2.'; // Optional pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={faisalLogo} alt="Faisal Town" className="h-25 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-[#619cdd] font-medium">
            Home
          </Link>
          <Link to="/overseas-enclave" className="text-gray-700 hover:text-[#619cdd] font-medium">
            Overseas Enclave
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-[#619cdd] font-medium">
            Projects
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#619cdd] font-medium">
            About
          </Link>
          <Link to="/payment" className="text-gray-700 hover:text-[#619cdd] font-medium">
            Payment
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#619cdd] font-medium">
            Contact
          </Link>
          
          {/* Call Us Button - Opens WhatsApp */}
          <button 
            onClick={handleWhatsAppClick}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-500 font-medium transition"
          >
            Call Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t py-4 px-6">
          <Link to="/" className="block py-2 text-gray-700 font-medium">Home</Link>
          <Link to="/overseas-enclave" className="block py-2 text-gray-700 font-medium">Overseas Enclave</Link>
          <Link to="/projects" className="block py-2 text-gray-700 font-medium">Projects</Link>
          <Link to="/about" className="block py-2 text-gray-700 font-medium">About</Link>
          <Link to="/payment" className="block py-2 text-gray-700 font-medium">Payment</Link>
          <Link to="/contact" className="block py-2 text-gray-700 font-medium">Contact</Link>
          
          {/* Mobile Call Us Button */}
          <button 
            onClick={handleWhatsAppClick}
            className="w-full mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 font-medium transition"
          >
            Call Us
          </button>
        </div>
      )}
    </nav>
  );
}
