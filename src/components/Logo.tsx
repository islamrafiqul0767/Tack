import { motion } from 'framer-motion';

// Premium Animated Brand Logo
export function Logo({ className = '', size = 32, animated = true }: { className?: string; size?: number; animated?: boolean }) {
  const scale = size / 32;
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring - animated */}
      {animated && (
        <motion.circle
          cx="16"
          cy="16"
          r="14"
          stroke="#DC2626"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 0.4 }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, opacity: { duration: 1 } }}
          style={{ transformOrigin: 'center' }}
        />
      )}
      
      {/* Main V shape - animated draw */}
      <motion.path
        d="M8 8L16 24L24 8"
        stroke="#DC2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      
      {/* Inner accent line */}
      <motion.path
        d="M11 12L16 22L21 12"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      />
      
      {/* Center dot - animated pulse */}
      <motion.circle
        cx="16"
        cy="16"
        r="1.5"
        fill="#DC2626"
        initial={animated ? { scale: 0 } : { scale: 1 }}
        animate={animated ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ 
          scale: animated ? { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 } : { duration: 0.3 }
        }}
        style={{ transformOrigin: 'center' }}
      />
      
      {/* Top accent */}
      <motion.circle
        cx="16"
        cy="6"
        r="1"
        fill="#DC2626"
        initial={animated ? { scale: 0 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        style={{ transformOrigin: 'center' }}
      />
    </svg>
  );
}

// Animated Wordmark
export function Wordmark({ className = '', animated = true }: { className?: string; animated?: boolean }) {
  const letters = 'VECTRAL'.split('');
  
  if (!animated) {
    return (
      <span className={`font-display font-bold tracking-[-0.02em] ${className}`}>
        VECTRAL
      </span>
    );
  }

  return (
    <span className={`font-display font-bold tracking-[-0.02em] inline-flex ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={letter === 'V' ? 'text-brand' : ''}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

// Full brand mark with text
export function BrandMark({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={size} />
      <Wordmark className="text-ink text-xl" />
    </div>
  );
}
