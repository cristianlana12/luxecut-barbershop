import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 rounded-full';
  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };
  const variantStyles = {
    primary: 'bg-gold text-black hover:bg-gold-light shadow-gold',
    secondary: 'bg-dark-light text-white hover:bg-dark border border-gold/30',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};