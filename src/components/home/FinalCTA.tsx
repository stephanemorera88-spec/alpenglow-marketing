import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-deep-pine/85 z-10"></div>
      </div>

      <div className="absolute top-1/3 right-1/6 w-72 h-72 bg-morning-glow/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-forest-green/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight">
            Ready to Scale Your <br />
            <span className="text-morning-glow">Local Presence?</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop worrying about your marketing and start focusing on your business. Let us build the systems that bring you more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="btn-secondary bg-morning-glow text-deep-pine px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all shadow-xl shadow-morning-glow/10"
            >
              Get 2 Free Sample Posts
            </Link>
            <Link
              to="/contact"
              className="btn-primary bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all"
            >
              Book a Quick Call
            </Link>
          </div>
          <p className="mt-8 text-white/40 text-sm">
            No long-term contracts. No fluff. Just results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
