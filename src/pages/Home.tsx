import SEO from '../seo';
import { FAQS } from '../constants';
import Hero from '../components/home/Hero';
import ValueProp from '../components/home/ValueProp';
import FrontierConnect from '../components/home/FrontierConnect';
import MainOffer from '../components/home/MainOffer';
import WhyUs from '../components/home/WhyUs';
import SupportingServices from '../components/home/SupportingServices';
import Process from '../components/home/Process';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <SEO
        title="Alpenglow Marketing | Local SEO & AEO for Anchorage, Alaska Businesses"
        description="Practical, no-fluff marketing systems for local Alaskan businesses. Google Business Profile optimization, AEO, local SEO, and lead capture — built to drive real results."
        canonical="/"
        schema={faqSchema}
      />
      <Hero />
      <ValueProp />
      <FrontierConnect />
      <MainOffer />
      <WhyUs />
      <SupportingServices />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
