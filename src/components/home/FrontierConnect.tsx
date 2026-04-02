import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FrontierConnect() {
  return (
    <section className="py-20 bg-frontier-blue text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-frontier-yellow/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex flex-col items-center justify-center gap-3 p-6">
                <div className="w-16 h-16 bg-frontier-yellow rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-10 h-10">
                    <polygon points="16,4 6,28 26,28" fill="#FABC2A"/>
                    <polygon points="20,14 12,28 28,28" fill="#1F3F32"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-lg text-white leading-tight">Frontier</p>
                  <p className="font-display font-semibold text-white/80 leading-tight">Connect</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-frontier-yellow text-frontier-blue font-bold px-4 py-1.5 rounded-full text-xs tracking-wide uppercase transform rotate-12 shadow-lg">
                Exclusive
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
              Exclusive Value-Add: <span className="text-frontier-yellow">Frontier Connect</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              As an Alpenglow Marketing client, you get priority placement on <strong className="text-white">AK Frontier Connect</strong>, Anchorage's premier local business directory. Improve your local SEO and get found by residents looking for trusted local services.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Priority Directory Listing',
                'Verified Local Badge',
                'Direct Lead Routing',
                'Local SEO Backlink',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5 bg-frontier-yellow rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight size={12} className="text-frontier-blue" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-secondary bg-frontier-yellow text-frontier-blue px-8 py-3 rounded-full font-bold hover:bg-white transition-all inline-flex items-center gap-2">
              Learn More About Frontier Connect <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
