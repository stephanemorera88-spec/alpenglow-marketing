import { PROCESS_STEPS } from '../../constants';
import { motion } from 'motion/react';

export default function Process() {
  return (
    <section className="py-24 bg-deep-pine text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">How We Work</h2>
          <p className="text-lg text-white/70">
            We've streamlined our process to be as efficient as possible, respecting your time and focusing on results.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl text-center relative group hover:bg-white/10 transition-all card-lift"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-morning-glow text-deep-pine rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-morning-glow/20 animate-pulse-glow">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
