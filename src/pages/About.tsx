import { motion } from 'motion/react';
import { MapPin, Users, Heart, ShieldCheck, Zap } from 'lucide-react';
import SEO from '../seo';

export default function About() {
  return (
    <div className="pt-20">
      <SEO
        title="About Alpenglow Marketing | Anchorage, Alaska Local Marketing Agency"
        description="Alpenglow Marketing is an Anchorage-based agency helping local Alaskan businesses build practical, no-fluff marketing systems that drive real results."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="bg-forest-green py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6">About Alpenglow</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We're a local Anchorage agency dedicated to helping Alaskan small businesses thrive in a digital-first world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 img-zoom">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Alpenglow Marketing team at work"
                loading="lazy"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-forest-green font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
              <h2 className="text-4xl mb-8 text-deep-pine">Practical Marketing for Practical People</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Alpenglow Marketing was founded on a simple realization: most local businesses don't need complex, expensive agency retainers. They need practical systems that work reliably to bring in customers.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We focus on the "no-fluff" approach. We build the infrastructure—Google Business Profiles, social consistency, AI search visibility, and lead capture—so you can focus on running your business.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-morning-glow/10 text-morning-glow rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-pine">Local First</h4>
                    <p className="text-sm text-gray-500">Based in Anchorage, serving Alaska.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-green/10 text-forest-green rounded-lg flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-pine">Small Teams</h4>
                    <p className="text-sm text-gray-500">Built for lean, owner-operated businesses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-alpine-mist">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl mb-6 text-deep-pine">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide every marketing system we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'No hidden fees, no complex jargon. You always know exactly what we are doing and why.',
                icon: ShieldCheck,
              },
              {
                title: 'Practicality',
                description: 'We only implement systems that have a clear, direct impact on your business growth.',
                icon: Zap,
              },
              {
                title: 'Authenticity',
                description: 'We help your business tell its real story to the local community.',
                icon: Heart,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl text-center shadow-sm card-glow"
              >
                <div className="w-16 h-16 bg-forest-green/5 text-forest-green rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-deep-pine">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
