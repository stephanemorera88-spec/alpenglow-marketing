import { FAQS } from '../../constants';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-forest-green font-bold tracking-widest uppercase text-sm mb-4 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl mb-6 text-deep-pine leading-tight">Everything You Need to Know</h2>
            <p className="text-lg text-gray-600 mb-8">
              Still have questions? We're here to help you understand how our systems can work for your specific business.
            </p>
            <Link to="/contact" className="btn-primary bg-forest-green text-white px-8 py-3 rounded-full font-bold hover:bg-deep-pine transition-all inline-block">
              Contact Support
            </Link>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-alpine-mist/30 transition-colors"
                >
                  <span className="text-lg font-bold text-deep-pine">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-forest-green" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
