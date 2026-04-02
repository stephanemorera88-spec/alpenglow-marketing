import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { COMPANY } from '../config';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={COMPANY.logo}
            alt="Alpenglow Marketing"
            className="h-10 w-auto"
          />
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
            isScrolled ? 'text-forest-green' : 'text-white'
          }`}>
            Alpenglow
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link font-medium transition-colors hover:text-morning-glow ${
                location.pathname === link.path
                  ? 'active text-morning-glow'
                  : isScrolled ? 'text-forest-green' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-secondary bg-morning-glow text-deep-pine px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-forest-green' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-forest-green' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-forest-green font-semibold text-lg py-2 border-b border-gray-100"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary bg-forest-green text-white text-center py-3 rounded-lg font-bold mt-2"
          >
            Get Started
          </Link>
        </motion.nav>
      )}
    </header>
  );
}
