import { motion } from 'motion/react';
import { VALUE_PROPS } from '../../constants';

export default function ValueProp() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {VALUE_PROPS.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              className="text-center group card-lift"
            >
              <div className="w-16 h-16 bg-forest-green/10 text-forest-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-forest-green group-hover:text-white transition-all duration-300">
                <prop.icon size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-deep-pine">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
