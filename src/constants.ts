import { Target, CheckCircle, Users, Globe, Search, Megaphone, Layout, PhoneCall, RefreshCw, Star } from 'lucide-react';

export const SERVICES = [
  {
    id: 'gbp',
    title: 'Google Business Profile Optimization',
    description: 'Claim, optimize, and manage your local presence where it matters most.',
    icon: Globe,
  },
  {
    id: 'aeo',
    title: 'AEO (AI Search Visibility)',
    description: 'Ensure your business is the answer when people ask AI assistants for recommendations.',
    icon: Search,
  },
  {
    id: 'seo',
    title: 'Local SEO',
    description: 'Rank higher in local search results and drive more organic traffic to your site.',
    icon: Target,
  },
  {
    id: 'web',
    title: 'Website Support',
    description: 'Fast, secure, and mobile-friendly websites that convert visitors into customers.',
    icon: Layout,
  },
  {
    id: 'lead',
    title: 'Lead Catchers',
    description: 'Smart forms and pop-ups that capture intent and build your database.',
    icon: Megaphone,
  },
  {
    id: 'missed-call',
    title: 'Missed Call Assistants',
    description: 'Never lose a lead again with automated text-back for missed calls.',
    icon: PhoneCall,
  },
  {
    id: 'automation',
    title: 'Follow-up Automations',
    description: 'Nurture leads automatically until they are ready to buy.',
    icon: RefreshCw,
  },
  {
    id: 'reputation',
    title: 'Reputation Management',
    description: 'Get more 5-star reviews and manage your online reputation effortlessly.',
    icon: Star,
  },
];

export const FAQS = [
  {
    question: "How much time will this take from me?",
    answer: "We aim for a 'done-for-you' approach. After an initial 30-minute strategy call, we handle the heavy lifting. You'll just need a few minutes a month to review results.",
  },
  {
    question: "Do I need to provide the content?",
    answer: "We can create everything for you. However, if you have specific photos or updates, we'll incorporate them to keep things authentic to your local brand.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "We believe in earning your business every month. Most of our services are month-to-month with no long-term lock-ins.",
  },
  {
    question: "What is AI Search Visibility (AEO)?",
    answer: "AEO stands for Answer Engine Optimization. It's about ensuring your business data is structured so AI models like Gemini, ChatGPT, and Perplexity can find and recommend you.",
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Simple Consultation',
    description: 'We talk about your goals and current challenges in a quick, no-pressure call.',
  },
  {
    number: '02',
    title: 'Practical Plan',
    description: 'We build a custom marketing system tailored to your specific local business needs.',
  },
  {
    number: '03',
    title: 'We Get to Work',
    description: 'Our team implements the plan, and you start seeing more visibility and leads.',
  },
];

export const VALUE_PROPS = [
  {
    title: 'Get Found',
    description: 'Be where your customers are looking, from Google Maps to AI search results.',
    icon: Target,
  },
  {
    title: 'Get Trusted',
    description: 'Build authority with consistent social presence and a professional reputation.',
    icon: CheckCircle,
  },
  {
    title: 'Get Recommended',
    description: 'Turn happy customers into your best advocates with automated referral systems.',
    icon: Users,
  },
];
