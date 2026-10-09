import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconBrain, IconWorkflow, IconCRM, IconTarget, IconChat, IconCalendar, IconMail, IconSettings, IconArrowRight, IconZap, IconShield, IconRocket, IconPlay } from '../components/Icons';

// Premium image URLs
const heroImage = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=90&auto=format&fit=crop';
const heroImage2 = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=90&auto=format&fit=crop';
const showcaseImage1 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop';
const showcaseImage2 = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=90&auto=format&fit=crop';
const ctaImage = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=90&auto=format&fit=crop';

// Premium easing curves
const easeOutExpo = [0.16, 1, 0.3, 1];
const easeInOutQuint = [0.83, 0, 0.17, 1];

// Split text into characters for premium animation
function SplitText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const chars = text.split('');
  return (
    <span className={`inline-flex overflow-hidden ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0, rotateX: -80 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.025,
            ease: easeOutExpo as any,
          }}
          className="inline-block will-change-transform"
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

// Word reveal animation
function WordReveal({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.08,
              ease: easeOutExpo as any,
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Premium image with blur-up loading
function PremiumImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-surface-warm animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: easeOutExpo as any }}
        className="w-full h-full object-cover will-change-transform"
        loading="eager"
      />
    </div>
  );
}

// Parallax image with smooth transform
function ParallaxImage({ src, alt, className = '', speed = 0.3 }: { src: string; alt: string; className?: string; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y: smoothY, scale: 1.15 }}
        className="w-full h-[130%] object-cover will-change-transform"
        loading="lazy"
      />
    </div>
  );
}

// Magnetic cursor effect for buttons
function MagneticButton({ children, className = '', to }: { children: React.ReactNode; className?: string; to: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

// Floating gradient orbs
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
        animate={{
          opacity: [0, 0.4, 0.2, 0.4, 0],
          scale: [0.5, 1.2, 1, 1.3, 0.8],
          x: [0, 100, -50, 80, 0],
          y: [0, -80, 50, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[20%] right-[15%] w-[600px] h-[600px] bg-brand/15 rounded-full blur-[180px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 0.3, 0.15, 0.3, 0],
          scale: [0.5, 1, 1.2, 0.9, 0.5],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 5 }}
        className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[160px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 10 }}
        className="absolute top-[50%] left-[50%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]"
      />
    </div>
  );
}

// Scroll progress indicator
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand via-brand-light to-brand z-[100] will-change-transform"
    />
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], ['0%', '20%']);

  return (
    <PageTransition>
      <ScrollProgress />

      {/* Hero Section - Cinematic */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
        {/* Background Image with parallax */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="absolute inset-0 will-change-transform"
        >
          <PremiumImage
            src={heroImage}
            alt="Abstract AI technology visualization"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>

        {/* Floating orbs */}
        <FloatingOrbs />

        {/* Animated grid overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-32 lg:py-40 w-full">
          <div className="max-w-5xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo as any }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <span className="text-xs font-semibold text-white/90 uppercase tracking-[0.2em]">AI-Powered Automation Studio</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(2.75rem,8vw,8rem)] font-display font-bold leading-[0.92] tracking-[-0.03em] mb-10">
              <SplitText text="Automate" className="text-white block" />
              <SplitText text="Repetitive Work." className="text-white block" delay={0.4} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="block"
              >
                <span className="text-gradient-red">Focus on Growth.</span>
              </motion.span>
            </h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: easeOutExpo as any }}
              className="max-w-xl mb-12"
            >
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light">
                We design AI-powered automation systems for businesses that want to eliminate manual tasks, streamline operations, and free their teams to focus on growth.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: easeOutExpo as any }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold overflow-hidden"
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <IconArrowRight width={18} height={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 bg-brand-dark origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: easeOutExpo as any }}
                />
              </MagneticButton>
              <MagneticButton
                to="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.06] backdrop-blur-md border border-white/[0.15] text-white rounded-full text-base font-semibold hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-500"
              >
                Explore Services
                <IconPlay width={16} height={16} className="group-hover:scale-110 transition-transform duration-300" />
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 lg:py-32 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOutExpo as any }}
                className="h-[3px] bg-brand mx-auto mb-8 rounded-full"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink mb-6 leading-[1.1] tracking-tight">
                We help businesses <span className="text-gradient-red">eliminate repetitive work</span> through intelligent automation.
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed max-w-3xl mx-auto">
                From lead management to customer support, we design AI-powered systems that streamline your operations and give your team time to focus on what matters most.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value Proposition with Image */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <Reveal>
              <div>
                <span className="text-sm font-semibold text-brand uppercase tracking-[0.2em] mb-4 block">The Problem</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                  Your team shouldn't do work that <span className="text-gradient-red">software</span> can handle.
                </h2>
                <p className="text-lg text-ink-muted leading-relaxed mb-8">
                  Businesses lose countless hours on repetitive tasks — data entry, follow-ups, scheduling, reporting. These don't need human intelligence. They need automation.
                </p>
                <Link
                  to="/process"
                  className="group inline-flex items-center gap-2 text-brand font-semibold link-underline"
                >
                  See Our Process
                  <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <ParallaxImage
                  src={heroImage2}
                  alt="AI technology visualization"
                  className="rounded-2xl aspect-[4/5] shadow-2xl shadow-black/10"
                  speed={0.2}
                />
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: easeOutExpo as any }}
                  className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-white shadow-2xl shadow-black/10 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                      <IconZap width={24} height={24} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-lg font-display font-bold text-ink">AI-Powered</p>
                      <p className="text-xs text-ink-muted">Automation Systems</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand uppercase tracking-[0.2em] mb-4 block">Why Automate</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
                The <span className="text-gradient-red">Advantage</span>
              </h2>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: easeOutExpo as any }}
                className="p-8 rounded-2xl bg-white border border-border card-lift group h-full"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: easeOutExpo as any }}
                  className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-500"
                >
                  <IconZap width={32} height={32} className="text-brand group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Save Time</h3>
                <p className="text-ink-muted leading-relaxed">Eliminate repetitive manual work and free your team to focus on high-value activities that drive growth.</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: easeOutExpo as any }}
                className="p-8 rounded-2xl bg-white border border-border card-lift group h-full"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: easeOutExpo as any }}
                  className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-500"
                >
                  <IconShield width={32} height={32} className="text-brand group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Reduce Errors</h3>
                <p className="text-ink-muted leading-relaxed">Replace error-prone manual steps with consistent workflows that follow the same rules every time.</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: easeOutExpo as any }}
                className="p-8 rounded-2xl bg-white border border-border card-lift group h-full"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: easeOutExpo as any }}
                  className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-500"
                >
                  <IconRocket width={32} height={32} className="text-brand group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Scale Faster</h3>
                <p className="text-ink-muted leading-relaxed">Handle more customers and operations without increasing manual workload or hiring more staff.</p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
              <div>
                <span className="text-sm font-semibold text-brand uppercase tracking-[0.2em] mb-4 block">What We Do</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
                  Automation <span className="text-gradient-red">Services</span>
                </h2>
              </div>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-brand font-semibold link-underline"
              >
                View All Services
                <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: IconBrain, title: 'AI Automation', desc: 'Intelligent systems that automate decisions.' },
              { icon: IconWorkflow, title: 'Workflow Automation', desc: 'Connect tools end-to-end.' },
              { icon: IconCRM, title: 'CRM Automation', desc: 'Manage leads and pipelines.' },
              { icon: IconTarget, title: 'Lead Automation', desc: 'Capture and qualify leads.' },
              { icon: IconChat, title: 'Customer Support', desc: 'AI chatbots 24/7.' },
              { icon: IconCalendar, title: 'Appointments', desc: 'Bookings on autopilot.' },
              { icon: IconMail, title: 'Email & Messaging', desc: 'Automated communication.' },
              { icon: IconSettings, title: 'Custom Systems', desc: 'Built for your needs.' },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <Link to="/services" className="group block p-6 rounded-xl bg-surface border border-border card-lift">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4, ease: easeOutExpo as any }}
                    className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center mb-4 group-hover:border-brand group-hover:bg-brand-50 transition-all duration-500"
                  >
                    <service.icon width={24} height={24} className="text-ink group-hover:text-brand transition-colors duration-500" />
                  </motion.div>
                  <h3 className="text-lg font-display font-bold text-ink mb-2 group-hover:text-brand transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{service.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-24 lg:py-32 bg-ink">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand uppercase tracking-[0.2em] mb-4 block">Our Work</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
                Real <span className="text-gradient-red">Results</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <Reveal>
              <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
                <PremiumImage
                  src={showcaseImage1}
                  alt="Dashboard analytics visualization"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">E-commerce</p>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Lead Management System</h3>
                  <div className="flex items-center gap-2 text-brand font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    View Case Study <IconArrowRight width={16} height={16} />
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
                <PremiumImage
                  src={showcaseImage2}
                  alt="Business automation workspace"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">Real Estate</p>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Appointment Automation</h3>
                  <div className="flex items-center gap-2 text-brand font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    View Case Study <IconArrowRight width={16} height={16} />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <MagneticButton
                to="/work"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-ink rounded-full text-base font-semibold hover:bg-brand hover:text-white transition-all duration-500"
              >
                View All Case Studies
                <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-border overflow-hidden bg-white">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 px-6">
              {['AI Automation', 'Workflow Systems', 'CRM Integration', 'Lead Management', 'Customer Support', 'Email Automation', 'Appointment Booking', 'Data Processing', 'Custom AI Agents', 'Business Intelligence'].map((item, i) => (
                <span key={`${setIndex}-${i}`} className="flex items-center gap-12">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-ink/[0.06] hover:text-brand transition-colors duration-500 cursor-default">{item}</span>
                  <span className="w-3 h-3 rounded-full bg-brand/20" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-brand uppercase tracking-[0.2em] mb-4 block">FAQ</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink tracking-tight">
                Common Questions
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-3">
              {[
                { q: 'What types of business processes can be automated?', a: 'Many repetitive processes are good candidates — lead management, customer onboarding, data entry between tools, email sequences, appointment scheduling, and reporting. During discovery we map your workflows and identify the best opportunities.' },
                { q: 'Do I need to replace my existing software?', a: 'Not necessarily. Our approach is to integrate with the tools you already use where possible. We assess your existing stack before recommending any changes.' },
                { q: 'How do you scope and price a project?', a: 'Every project starts with a discovery conversation to understand your workflows and goals. After that we provide a scoped proposal with deliverables, timeline, and pricing before any work begins.' },
                { q: 'Can you build custom AI workflows?', a: 'Yes. We design custom workflows that may include AI components such as classification, extraction, or decision support. We discuss the right approach for each use case and review outputs with you.' },
                { q: 'What happens after launch?', a: 'We hand over documentation and training for your team. Ongoing support, monitoring, and iteration can be arranged as a separate engagement based on your needs.' },
                { q: 'How do you handle data privacy and security?', a: 'We follow standard security practices and discuss data handling, access, and storage requirements during discovery. Specific policies depend on the tools and integrations involved.' },
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: easeOutExpo as any }}
                  className="group p-6 rounded-xl bg-surface border border-border open:border-brand/30 open:bg-brand-50/30 transition-all duration-500"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-base font-display font-semibold text-ink pr-4">{faq.q}</span>
                    <motion.span
                      className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2V12M2 7H12" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/></svg>
                    </motion.span>
                  </summary>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-ink-muted leading-relaxed text-sm"
                  >
                    {faq.a}
                  </motion.p>
                </motion.details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <PremiumImage
            src={ctaImage}
            alt="Abstract technology background"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-ink/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/20 via-transparent to-brand/10" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.05] tracking-tight">
              Ready to <span className="text-gradient-red">eliminate</span> repetitive work?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's identify the tasks slowing your business down and turn them into automated workflows.
            </p>
            <MagneticButton
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brand text-white rounded-full text-lg font-semibold overflow-hidden glow-red"
            >
              <span className="relative z-10">Book a Free Automation Audit</span>
              <IconArrowRight width={20} height={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 bg-brand-dark origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: easeOutExpo as any }}
              />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
