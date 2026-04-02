import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Aerial view of Anchorage, Alaska"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/65 z-10"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-morning-glow/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-forest-green/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="animate-pulse-glow inline-flex items-center gap-2 bg-morning-glow/20 border border-morning-glow/30 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-morning-glow rounded-full animate-pulse"></span>
            <span className="text-morning-glow font-semibold text-sm tracking-wide uppercase">Based in Anchorage, Alaska</span>
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Get Found. Get Trusted. <br />
            <span className="text-morning-glow">Get Recommended.</span>
          </h1>

          <p className="text-xl text-alpine-mist/80 mb-10 leading-relaxed max-w-2xl">
            Practical, no-fluff marketing systems designed for local small businesses who need to improve visibility, consistency, and lead capture without the overhead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="btn-secondary bg-morning-glow text-deep-pine px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all text-center"
            >
              Get 2 Free Sample Posts
            </Link>
            <Link
              to="/contact"
              className="btn-primary bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-deep-pine transition-all text-center"
            >
              Book a Quick Call
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
