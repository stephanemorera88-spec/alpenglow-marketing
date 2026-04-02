import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import SEO from '../seo';
import { COMPANY } from '../config';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      setFormState(res.ok ? 'success' : 'error');
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="pt-20">
      <SEO
        title="Contact Alpenglow Marketing | Get 2 Free Social Posts | Anchorage, AK"
        description="Contact Alpenglow Marketing for a free strategy call or 2 free sample social posts. Local SEO, AEO, and marketing systems for Anchorage businesses."
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="bg-deep-pine py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
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
            <h1 className="text-5xl md:text-6xl mb-6">Let's Talk</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Ready to improve your local visibility? Reach out for a quick, no-pressure call or to claim your 2 free sample posts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-deep-pine">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 transition-all duration-300 hover:translate-x-1">
                    <div className="w-12 h-12 bg-forest-green/10 text-forest-green rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-deep-pine">Email Us</h4>
                      <a
                        href={COMPANY.emailHref}
                        className="text-gray-500 hover:text-forest-green transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 transition-all duration-300 hover:translate-x-1">
                    <div className="w-12 h-12 bg-morning-glow/10 text-morning-glow rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-deep-pine">Call Us</h4>
                      <a
                        href={COMPANY.phoneHref}
                        className="text-gray-500 hover:text-forest-green transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 transition-all duration-300 hover:translate-x-1">
                    <div className="w-12 h-12 bg-deep-pine/10 text-deep-pine rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-deep-pine">Location</h4>
                      <p className="text-gray-500">{COMPANY.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-alpine-mist p-8 rounded-3xl"
              >
                <h4 className="font-bold text-xl mb-4 text-deep-pine flex items-center gap-2">
                  <Clock size={20} className="text-forest-green" /> Response Time
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We're a local team and we value your time. You can expect a response within 24 business hours.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[2.5rem] p-8 md:p-12">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-forest-green text-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-deep-pine mb-4">Message Sent!</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Thank you for reaching out. We'll be in touch very soon to discuss your marketing goals.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormState('idle')}
                      className="text-forest-green font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Register at web3forms.com to get your free access key */}
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="full-name" className="text-sm font-bold text-deep-pine ml-1">Full Name</label>
                        <input
                          id="full-name"
                          name="full-name"
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="business-name" className="text-sm font-bold text-deep-pine ml-1">Business Name</label>
                        <input
                          id="business-name"
                          name="business-name"
                          required
                          type="text"
                          placeholder="Local Business LLC"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-deep-pine ml-1">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-deep-pine ml-1">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(907) 555-0123"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-deep-pine ml-1">What can we help you with?</label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:bg-white transition-all appearance-none"
                      >
                        <option>Claim 2 Free Sample Posts</option>
                        <option>Book a Strategy Call</option>
                        <option>Google Business Optimization</option>
                        <option>AI Search Visibility (AEO)</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-deep-pine ml-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us a bit about your business goals..."
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:bg-white transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="btn-primary w-full bg-forest-green text-white py-5 rounded-2xl font-bold text-xl hover:bg-deep-pine transition-all shadow-xl shadow-forest-green/20 flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {formState === 'submitting' ? 'Sending...' : (
                        <>Send Message <Send size={20} /></>
                      )}
                    </button>
                    {formState === 'error' && (
                      <p className="text-center text-red-600 text-sm font-medium bg-red-50 py-3 rounded-xl">
                        Something went wrong. Please try again or email us directly at {COMPANY.email}.
                      </p>
                    )}
                    <p className="text-center text-gray-400 text-sm">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
