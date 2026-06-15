import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={clsx(
        'glass-card rounded-3xl p-8 shadow-2xl transition-shadow duration-300 hover:shadow-gold/20',
        className
      )}
    >
      {children}
    </motion.div>
  );
};