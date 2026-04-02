import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainOffer() {
  return (
    <section className="py-24 bg-alpine-mist">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            {/* Image */}
            <div className="img-zoom rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"
                alt="Done-for-you social media posting for local businesses"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Offer card — separate from image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-morning-glow animate-pulse-glow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-xl text-forest-green mb-1">Special Offer</h4>
                  <p className="text-gray-600">Get 2 Free Sample Posts with custom captions and image concepts.</p>
                </div>
                <Link to="/contact" className="btn-secondary bg-morning-glow text-deep-pine px-6 py-3 rounded-full font-bold whitespace-nowrap hover:bg-opacity-90 transition-all inline-flex items-center gap-2 shrink-0">
                  Claim Now <CheckCircle2 size={18} />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-forest-green font-bold tracking-widest uppercase text-sm mb-4 block">Core Service</span>
            <h2 className="text-4xl md:text-5xl mb-6 text-deep-pine">Done-For-You <br />Social Posting</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Consistency is the biggest challenge for local businesses. We take the burden off your plate by creating and scheduling high-quality, authentic social content that keeps your brand top-of-mind.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Custom Image Concepts & Design',
                'Local-Focused Copywriting',
                'Multi-Platform Scheduling',
                'Engagement Monitoring',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-morning-glow" size={24} />
                  <span className="text-deep-pine font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-secondary bg-forest-green text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-deep-pine transition-all shadow-lg shadow-forest-green/20 inline-block">
              Get Started with 2 Free Posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
