import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainOffer() {
  return (
    <section className="py-24 bg-alpine-mist">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative img-zoom">
              <img
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"
                alt="Done-for-you social media posting for local businesses"
                className="rounded-3xl shadow-2xl w-full h-auto"
                loading="lazy"
              />
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border-t-4 border-morning-glow animate-pulse-glow"
              >
                <h4 className="font-display font-bold text-xl mb-2 text-forest-green">Special Offer</h4>
                <p className="text-gray-600 mb-4">Get 2 Free Sample Posts with custom captions and image concepts.</p>
                <Link to="/contact" className="text-forest-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Claim Now <CheckCircle2 size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile-only offer card */}
            <div className="md:hidden bg-white rounded-2xl p-6 shadow-lg border-t-4 border-morning-glow -mt-8 relative z-10 mx-4">
              <p className="text-sm font-bold text-morning-glow mb-1">Special Offer</p>
              <p className="text-deep-pine font-semibold text-lg">Get 2 Free Sample Posts</p>
              <Link to="/contact" className="inline-block mt-3 text-forest-green font-bold text-sm hover:text-morning-glow transition-colors">
                Claim Now &rarr;
              </Link>
            </div>
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
