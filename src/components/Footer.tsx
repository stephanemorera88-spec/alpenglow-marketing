import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY } from '../config';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-deep-pine text-alpine-mist pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={COMPANY.logo}
                alt="Alpenglow Marketing"
                className="h-10 w-auto"
              />
              <span className="font-display font-bold text-2xl tracking-tight">Alpenglow</span>
            </Link>
            <p className="text-alpine-mist/70 leading-relaxed">
              Practical, no-fluff marketing systems for local businesses in Anchorage, Alaska. We help you get found, trusted, and recommended.
            </p>
            {Object.entries(COMPANY.social).some(([, url]) => url) && (
              <div className="flex gap-4">
                {COMPANY.social.facebook && (
                  <a href={COMPANY.social.facebook} aria-label="Alpenglow Marketing on Facebook" className="hover:text-morning-glow transition-colors">
                    <Facebook size={20} />
                  </a>
                )}
                {COMPANY.social.instagram && (
                  <a href={COMPANY.social.instagram} aria-label="Alpenglow Marketing on Instagram" className="hover:text-morning-glow transition-colors">
                    <Instagram size={20} />
                  </a>
                )}
                {COMPANY.social.linkedin && (
                  <a href={COMPANY.social.linkedin} aria-label="Alpenglow Marketing on LinkedIn" className="hover:text-morning-glow transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-morning-glow transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-morning-glow transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-morning-glow transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-morning-glow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-alpine-mist/70">Done-For-You Social</li>
              <li className="text-alpine-mist/70">Google Business Optimization</li>
              <li className="text-alpine-mist/70">AI Search Visibility (AEO)</li>
              <li className="text-alpine-mist/70">Lead Capture Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-morning-glow shrink-0 mt-1" size={18} />
                <span className="text-alpine-mist/70">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-morning-glow shrink-0" size={18} />
                <a
                  href={COMPANY.phoneHref}
                  aria-label="Call Alpenglow Marketing"
                  className="text-alpine-mist/70 hover:text-morning-glow transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-morning-glow shrink-0" size={18} />
                <a
                  href={COMPANY.emailHref}
                  aria-label="Email Alpenglow Marketing"
                  className="text-alpine-mist/70 hover:text-morning-glow transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-sm text-alpine-mist/50">
          <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
