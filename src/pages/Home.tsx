import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconBrain, IconWorkflow, IconCRM, IconTarget, IconChat, IconCalendar, IconMail, IconSettings, IconArrowRight, IconZap, IconShield, IconRocket, IconCheck } from '../components/Icons';

// Premium image URLs
const heroImage = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=90&auto=format&fit=crop';

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1];

// Split text animation
function SplitText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const chars = text.split('');
  return (
    <span className={`inline-flex overflow-hidden ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.02,
            ease: easeOutExpo as any,
          }}
          className="inline-block"
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

// Premium image with blur-up
function PremiumImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="absolute inset-0 bg-surface-warm animate-pulse" />}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: easeOutExpo as any }}
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
}

// Magnetic button
function MagneticButton({ children, className = '', to }: { children: React.ReactNode; className?: string; to: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.15);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.15);
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

// Scroll progress
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand via-brand-light to-brand z-[100]"
    />
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <PageTransition>
      <ScrollProgress />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <PremiumImage src={heroImage} alt="AI technology" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </motion.div>

        {/* Floating orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand/15 rounded-full blur-[180px]"
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-32 lg:py-40 w-full">
          <div className="max-w-5xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo as any }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <span className="text-xs font-semibold text-white/90 uppercase tracking-[0.2em]">AI Automation Studio</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(2.75rem,8vw,7rem)] font-display font-bold leading-[0.95] tracking-[-0.03em] mb-8">
              <SplitText text="Automate" className="text-white block" />
              <SplitText text="Repetitive Work." className="text-white block" delay={0.3} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="block"
              >
                <span className="text-gradient-red">Focus on Growth.</span>
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: easeOutExpo as any }}
              className="text-lg sm:text-xl text-white/75 max-w-2xl mb-12 leading-relaxed"
            >
              We design AI-powered automation systems for businesses that want to eliminate manual tasks, streamline operations, and free their teams to focus on growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: easeOutExpo as any }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <MagneticButton
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold overflow-hidden"
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <IconArrowRight width={18} height={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-brand-dark origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: easeOutExpo as any }}
                />
              </MagneticButton>
              <MagneticButton
                to="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white rounded-full text-base font-semibold hover:bg-white/[0.12] transition-all"
              >
                Explore Services
              </MagneticButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <IconCheck width={16} height={16} className="text-brand" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheck width={16} height={16} className="text-brand" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheck width={16} height={16} className="text-brand" />
                <span>Ongoing support</span>
              </div>
            </motion.div>
          </div>
        </div>
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

      {/* Services Grid - Hostinger Style */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand uppercase tracking-[0.2em] mb-4 block">What We Do</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight mb-4">
                Automation <span className="text-gradient-red">Services</span>
              </h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                End-to-end automation solutions tailored to your business needs.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: IconBrain, title: 'AI Automation', desc: 'Intelligent systems that automate decisions and tasks.', link: '/services' },
              { icon: IconWorkflow, title: 'Workflow Automation', desc: 'Connect tools and automate processes end-to-end.', link: '/services' },
              { icon: IconCRM, title: 'CRM Automation', desc: 'Manage leads, customers, and pipelines automatically.', link: '/services' },
              { icon: IconTarget, title: 'Lead Automation', desc: 'Capture, qualify, and distribute leads automatically.', link: '/services' },
              { icon: IconChat, title: 'Customer Support', desc: 'AI chatbots and automated response systems.', link: '/services' },
              { icon: IconCalendar, title: 'Appointments', desc: 'Bookings, reminders, and follow-ups on autopilot.', link: '/services' },
              { icon: IconMail, title: 'Email & Messaging', desc: 'Automated communication across all channels.', link: '/services' },
              { icon: IconSettings, title: 'Custom Systems', desc: 'Automation built around your unique processes.', link: '/services' },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <Link to={service.link} className="group block p-6 rounded-2xl bg-white border border-border hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-300"
                  >
                    <service.icon width={24} height={24} className="text-brand group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-lg font-display font-bold text-ink mb-2 group-hover:text-brand transition-colors">{service.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{service.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works - Hostinger Style */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand uppercase tracking-[0.2em] mb-4 block">Our Process</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight mb-4">
                How It <span className="text-gradient-red">Works</span>
              </h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                A clear, proven process from discovery to deployment.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discover', desc: 'We learn your workflows and identify automation opportunities.' },
              { num: '02', title: 'Design', desc: 'We architect the automation strategy tailored to your needs.' },
              { num: '03', title: 'Build', desc: 'We develop and integrate the automation system.' },
              { num: '04', title: 'Optimize', desc: 'We monitor, test, and continuously improve the system.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-display font-bold text-brand/10 mb-4">{step.num}</div>
                  <h3 className="text-xl font-display font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-border" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <Link to="/process" className="group inline-flex items-center gap-2 text-brand font-semibold link-underline">
                Learn more about our process
                <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
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

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                  <IconZap width={32} height={32} className="text-brand" />
                </div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Save Time</h3>
                <p className="text-ink-muted leading-relaxed">Eliminate repetitive manual work and free your team to focus on high-value activities.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                  <IconShield width={32} height={32} className="text-brand" />
                </div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Reduce Errors</h3>
                <p className="text-ink-muted leading-relaxed">Replace error-prone manual steps with consistent workflows that follow the same rules every time.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                  <IconRocket width={32} height={32} className="text-brand" />
                </div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Scale Faster</h3>
                <p className="text-ink-muted leading-relaxed">Handle more customers and operations without increasing manual workload.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
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
                { q: 'What types of business processes can be automated?', a: 'Many repetitive processes are good candidates — lead management, customer onboarding, data entry, email sequences, appointment scheduling, and reporting. During discovery we map your workflows and identify the best opportunities.' },
                { q: 'Do I need to replace my existing software?', a: 'Not necessarily. We integrate with the tools you already use where possible. We assess your existing stack before recommending any changes.' },
                { q: 'How do you scope and price a project?', a: 'Every project starts with a discovery conversation. After that we provide a scoped proposal with deliverables, timeline, and pricing before any work begins.' },
                { q: 'Can you build custom AI workflows?', a: 'Yes. We design custom workflows that may include AI components such as classification, extraction, or decision support.' },
                { q: 'What happens after launch?', a: 'We hand over documentation and training. Ongoing support can be arranged as a separate engagement based on your needs.' },
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 rounded-xl bg-surface border border-border open:border-brand/30 transition-all"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-base font-display font-semibold text-ink pr-4">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2V12M2 7H12" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-ink-muted leading-relaxed text-sm">{faq.a}</p>
                </motion.details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-ink text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Ready to <span className="text-gradient-red">eliminate</span> repetitive work?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let's identify the tasks slowing your business down and turn them into automated workflows.
            </p>
            <MagneticButton
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brand text-white rounded-full text-lg font-semibold overflow-hidden"
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <IconArrowRight width={20} height={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
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
