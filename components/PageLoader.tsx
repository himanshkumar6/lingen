import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger loading state on location change
    setLoading(true);

    // Ambient simulation: loading bar stays visible briefly before completing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ width: '0%', opacity: 1 }}
          animate={{ width: '70%', opacity: 1 }}
          exit={{ width: '100%', opacity: 0 }}
          transition={{
            width: { duration: 0.4, ease: "easeOut" },
            opacity: { duration: 0.2, delay: 0.4 }
          }}
          className="fixed top-0 left-0 z-[1000] h-[3px] bg-gradient-to-r from-primary via-indigo-500 to-pink-500"
        />
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
