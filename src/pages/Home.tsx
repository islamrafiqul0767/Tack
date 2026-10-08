import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconBrain, IconWorkflow, IconCRM, IconTarget, IconChat, IconCalendar, IconMail, IconSettings, IconArrowRight, IconZap, IconShield, IconRocket, IconPlay } from '../components/Icons';

// Hero images
const heroImage = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80';
const heroImage2 = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80';

// Text animation variants
const letterAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.03,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const wordAnimation = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AnimatedText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className={`inline-flex flex-wrap gap-x-3 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            custom={i}
            initial="hidden"
            animate="visible"
            variants={wordAnimation}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function ParallaxImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover"
        loading="lazy"
      />
    </div>
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
      {/* Hero Section - Cinematic */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="AI Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Animated red glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[150px]"
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-32 lg:py-40 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-brand"
              />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">AI-Powered Automation</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-8">
              <AnimatedText text="Automate" className="text-white" />
              <br />
              <AnimatedText text="Repetitive Work." className="text-white" delay={0.3} />
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-gradient-red"
              >
                Focus on Growth.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
            >
              We design AI-powered automation systems for businesses that want to eliminate manual tasks, streamline operations, and free their teams to focus on growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold overflow-hidden magnetic-btn"
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <IconArrowRight width={18} height={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-brand-dark"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-base font-semibold hover:bg-white/20 transition-all magnetic-btn"
              >
                Explore Services
                <IconPlay width={16} height={16} className="group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-brand"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink mb-6 leading-tight">
                We help businesses <span className="text-gradient-red">eliminate repetitive work</span> through intelligent automation.
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed max-w-3xl mx-auto">
                From lead management to customer support, we design AI-powered systems that streamline your operations and give your team time to focus on what matters most.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-4 block">The Problem</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink mb-6 leading-tight">
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
                  <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <ParallaxImage
                  src={heroImage2}
                  alt="AI Technology"
                  className="rounded-2xl aspect-[4/5] shadow-2xl"
                />
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 p-5 rounded-xl bg-white shadow-xl border border-border"
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
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-4 block">Why Automate</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink">
                The <span className="text-gradient-red">Advantage</span>
              </h2>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white border border-border card-lift group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300"
                >
                  <IconZap width={32} height={32} className="text-brand group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Save Time</h3>
                <p className="text-ink-muted leading-relaxed">Eliminate repetitive manual work and free your team to focus on high-value activities that drive growth.</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white border border-border card-lift group"
              >
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300"
                >
                  <IconShield width={32} height={32} className="text-brand group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">Reduce Errors</h3>
                <p className="text-ink-muted leading-relaxed">Replace error-prone manual steps with consistent workflows that follow the same rules every time.</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white border border-border card-lift group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300"
                >
                  <IconRocket width={32} height={32} className="text-brand group-hover:text-white transition-colors" />
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
                <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-4 block">What We Do</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink">
                  Automation <span className="text-gradient-red">Services</span>
                </h2>
              </div>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-brand font-semibold link-underline"
              >
                View All Services
                <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center mb-4 group-hover:border-brand group-hover:bg-brand-50 transition-all duration-300"
                  >
                    <service.icon width={24} height={24} className="text-ink group-hover:text-brand transition-colors" />
                  </motion.div>
                  <h3 className="text-lg font-display font-bold text-ink mb-2 group-hover:text-brand transition-colors">{service.title}</h3>
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
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-4 block">Our Work</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
                Real <span className="text-gradient-red">Results</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Dashboard"
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/70 text-sm mb-2">E-commerce</p>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Lead Management System</h3>
                  <div className="flex items-center gap-2 text-brand font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <IconArrowRight width={16} height={16} />
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Automation"
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/70 text-sm mb-2">Real Estate</p>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Appointment Automation</h3>
                  <div className="flex items-center gap-2 text-brand font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <IconArrowRight width={16} height={16} />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-ink rounded-full text-base font-semibold hover:bg-brand hover:text-white transition-all magnetic-btn"
              >
                View All Case Studies
                <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
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
                  <span className="text-3xl sm:text-4xl font-display font-bold text-ink/10 hover:text-brand transition-colors cursor-default">{item}</span>
                  <span className="w-3 h-3 rounded-full bg-brand/30" />
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
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-4 block">FAQ</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink">
                Common Questions
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-4">
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
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 rounded-xl bg-surface border border-border open:border-brand/30 open:bg-brand-50/30 transition-all"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-base font-display font-semibold text-ink pr-4">{faq.q}</span>
                    <motion.span
                      className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform"
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
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-8">
              Ready to <span className="text-gradient-red">eliminate</span> repetitive work?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's identify the tasks slowing your business down and turn them into automated workflows.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brand text-white rounded-full text-lg font-semibold overflow-hidden magnetic-btn glow-red"
            >
              <span className="relative z-10">Book a Free Automation Audit</span>
              <IconArrowRight width={20} height={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-brand-dark"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
