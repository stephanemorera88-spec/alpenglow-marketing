import { SERVICES } from '../../constants';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SupportingServices() {
  return (
    <section className="py-24 bg-alpine-mist">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-deep-pine">Comprehensive Local Marketing Systems</h2>
          <p className="text-lg text-gray-600">
            Beyond social posting, we provide the technical foundation and automation tools your business needs to dominate the local market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-morning-glow/20 card-glow"
            >
              <div className="w-14 h-14 bg-forest-green/5 text-forest-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest-green group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-deep-pine group-hover:text-forest-green transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/services" className="btn-primary text-forest-green font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
