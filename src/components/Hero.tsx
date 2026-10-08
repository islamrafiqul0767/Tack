import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

function AutomationVisual() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      </div>
      <div className="absolute top-1/4 right-1/4">
        <div className="w-48 h-48 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      {/* SVG Workflow */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" fill="none">
        {/* Connection lines */}
        <path d="M 100 200 C 150 200, 150 120, 200 120" stroke="url(#grad1)" strokeWidth="1.5" className="animate-flow" opacity="0.6" />
        <path d="M 200 120 C 250 120, 250 200, 300 200" stroke="url(#grad1)" strokeWidth="1.5" className="animate-flow" opacity="0.6" style={{ animationDelay: '0.5s' }} />
        <path d="M 300 200 C 350 200, 350 280, 400 280" stroke="url(#grad1)" strokeWidth="1.5" className="animate-flow" opacity="0.6" style={{ animationDelay: '1s' }} />
        <path d="M 400 280 C 450 280, 450 200, 500 200" stroke="url(#grad1)" strokeWidth="1.5" className="animate-flow" opacity="0.6" style={{ animationDelay: '1.5s' }} />
        
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute left-[8%] top-[42%] sm:left-[10%] sm:top-[45%]"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface border border-border flex items-center justify-center animate-pulse-glow">
          <span className="text-lg">📥</span>
        </div>
        <p className="text-[10px] sm:text-xs text-text-muted mt-2 text-center">Lead</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-[27%] top-[22%] sm:left-[28%] sm:top-[25%]"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface border border-primary/30 flex items-center justify-center glow-primary">
          <span className="text-lg">🤖</span>
        </div>
        <p className="text-[10px] sm:text-xs text-text-muted mt-2 text-center">AI Process</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute left-[44%] top-[42%] sm:left-[45%] sm:top-[45%]"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface border border-border flex items-center justify-center">
          <span className="text-lg">📊</span>
        </div>
        <p className="text-[10px] sm:text-xs text-text-muted mt-2 text-center">CRM</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute left-[61%] top-[62%] sm:left-[62%] sm:top-[65%]"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface border border-border flex items-center justify-center">
          <span className="text-lg">✉️</span>
        </div>
        <p className="text-[10px] sm:text-xs text-text-muted mt-2 text-center">Email</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute left-[78%] top-[42%] sm:left-[78%] sm:top-[45%]"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface border border-accent/30 flex items-center justify-center glow-accent">
          <span className="text-lg">📈</span>
        </div>
        <p className="text-[10px] sm:text-xs text-text-muted mt-2 text-center">Analytics</p>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-6"
            >
              <Sparkles size={14} className="text-primary-light" />
              <span className="text-xs font-medium text-primary-light">AI-Powered Business Automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              <span className="gradient-text">Automate Your Business.</span>
              <br />
              <span className="gradient-text-primary">Work Smarter.</span>
              <br />
              <span className="gradient-text">Grow Faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed"
            >
              We design AI-powered automation systems that eliminate repetitive work, streamline operations, and give businesses more time to focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-sm font-medium text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <AutomationVisual />
          </motion.div>
        </div>

        {/* Mobile visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden mt-8"
        >
          <AutomationVisual />
        </motion.div>
      </div>
    </section>
  );
}
