import { motion } from 'motion/react';
import { ShieldCheck, Map, Zap } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative img-zoom">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Alaskan mountains representing Alpenglow's local-first approach"
                className="rounded-3xl shadow-2xl w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-forest-green font-bold tracking-widest uppercase text-sm mb-4 block">The Alpenglow Difference</span>
            <h2 className="text-4xl md:text-5xl mb-8 text-deep-pine">Local, Practical, and Grounded in Reality</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We don't do "fluff." We understand the unique challenges of running a business in Alaska. Our systems are built to work for lean teams who need results, not complex reports.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3 card-lift">
                <div className="w-12 h-12 bg-morning-glow/10 text-morning-glow rounded-xl flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-xl">No Fluff</h4>
                <p className="text-gray-500">We focus on metrics that actually drive revenue, not vanity stats.</p>
              </div>
              <div className="space-y-3 card-lift">
                <div className="w-12 h-12 bg-forest-green/10 text-forest-green rounded-xl flex items-center justify-center">
                  <Map size={24} />
                </div>
                <h4 className="font-bold text-xl">Local Understanding</h4>
                <p className="text-gray-500">We know the Anchorage market and what resonates with locals.</p>
              </div>
              <div className="space-y-3 card-lift">
                <div className="w-12 h-12 bg-deep-pine/10 text-deep-pine rounded-xl flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <h4 className="font-bold text-xl">Rapid Execution</h4>
                <p className="text-gray-500">Fast implementation so you can start seeing results quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
