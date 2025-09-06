import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
              O.SZN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-100 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900 border-t border-blue-800 shadow-lg">
              <Link
                to="/"
                className="text-blue-100 hover:text-white hover:bg-blue-800 block px-3 py-3 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-blue-100 hover:text-white hover:bg-blue-800 block px-3 py-3 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-blue-100 hover:text-white hover:bg-blue-800 block px-3 py-3 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-blue-100 hover:text-white hover:bg-blue-800 block px-3 py-3 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

