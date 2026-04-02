import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-alpine-mist px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <h1 className="text-9xl font-display font-bold text-forest-green mb-4">404</h1>
          <h2 className="text-3xl font-bold text-deep-pine mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-forest-green text-white px-8 py-4 rounded-full font-bold hover:bg-deep-pine transition-all shadow-lg shadow-forest-green/20"
          >
            <Home size={20} /> Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
