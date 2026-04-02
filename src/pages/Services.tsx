import { SERVICES } from '../constants';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../seo';
import { COMPANY } from '../config';

const SERVICE_IMAGES: Record<string, string> = {
  gbp: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  aeo: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  seo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  web: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  lead: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
  'missed-call': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  automation: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  reputation: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
};

const SERVICE_ALT: Record<string, string> = {
  gbp: 'Google Business Profile dashboard on a smartphone',
  aeo: 'AI assistant interface representing answer engine optimization',
  seo: 'Search engine results page showing local SEO rankings',
  web: 'Modern website displayed on a laptop screen',
  lead: 'Lead capture form and marketing funnel graphic',
  'missed-call': 'Smartphone with automated text-back notification',
  automation: 'Automated workflow and follow-up system visualization',
  reputation: 'Five-star review notification on a mobile device',
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Alpenglow Marketing Services',
  description: 'Marketing services for local Anchorage, Alaska businesses',
  itemListElement: SERVICES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'LocalBusiness',
        name: COMPANY.name,
        url: COMPANY.url,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Anchorage',
          addressRegion: 'AK',
          addressCountry: 'US',
        },
      },
    },
  })),
};

export default function Services() {
  return (
    <div className="pt-20">
      <SEO
        title="Marketing Services for Anchorage Businesses | Alpenglow Marketing"
        description="Google Business Profile optimization, AEO, local SEO, lead capture, and more — practical marketing systems for Alaskan small businesses."
        canonical="/services"
        schema={servicesSchema}
      />

      {/* Hero Section */}
      <section className="bg-deep-pine py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6">Our Services</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Practical marketing systems designed to solve the real-world visibility and lead capture challenges of local Alaskan businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 lg:space-y-32">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group img-zoom">
                    <div className="absolute -inset-4 bg-morning-glow/10 rounded-3xl group-hover:bg-morning-glow/20 transition-all duration-500"></div>
                    <img
                      src={SERVICE_IMAGES[service.id]}
                      alt={SERVICE_ALT[service.id]}
                      loading="lazy"
                      className="rounded-2xl shadow-xl relative z-10 w-full h-auto"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-forest-green/10 text-forest-green rounded-2xl flex items-center justify-center mb-8">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-6 text-deep-pine">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description} We don't just set it up and walk away; we build systems that integrate with your daily operations to ensure long-term success.
                  </p>

                  <ul className="space-y-4 mb-10">
                    {[
                      'Custom strategy for your niche',
                      'Ongoing optimization and updates',
                      'Monthly performance reporting',
                      'Direct support from our local team',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-deep-pine font-medium">
                        <CheckCircle2 className="text-morning-glow" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center gap-2 bg-forest-green text-white px-8 py-3 rounded-full font-bold hover:bg-deep-pine transition-all"
                  >
                    Get a Custom Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-alpine-mist mesh-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-gray-100 card-lift">
            <h2 className="text-4xl md:text-5xl mb-8 text-deep-pine leading-tight">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Every business is different. We'll help you identify the highest-impact marketing systems for your specific goals and budget.
            </p>
            <Link
              to="/contact"
              className="btn-secondary bg-morning-glow text-deep-pine px-12 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all shadow-lg shadow-morning-glow/20"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
