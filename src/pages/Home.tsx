import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { Logo, IconBrain, IconWorkflow, IconCRM, IconTarget, IconChat, IconCalendar, IconMail, IconSettings, IconArrowRight, IconZap, IconShield, IconRocket } from '../components/Icons';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand/3 rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6"
              >
                <IconZap width={14} height={14} className="text-brand" />
                <span className="text-xs font-semibold text-brand uppercase tracking-wider">AI-Powered Automation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6"
              >
                <span className="text-ink">Automate</span>
                <br />
                <span className="text-ink">Your</span>{' '}
                <span className="text-gradient-red">Business.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-ink-muted max-w-lg mb-8 leading-relaxed"
              >
                We design AI-powered automation systems that eliminate repetitive work, streamline operations, and give businesses more time to focus on growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand text-white rounded-full text-sm font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20"
                >
                  Book a Free Consultation
                  <IconArrowRight width={16} height={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border-2 border-ink text-ink rounded-full text-sm font-semibold hover:bg-ink hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right visual - Animated workflow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Central glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-brand/10 rounded-full blur-[80px] animate-pulse" />
                </div>

                {/* Workflow nodes */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-[20%] left-[10%] w-16 h-16 rounded-2xl bg-white border-2 border-border shadow-xl flex items-center justify-center animate-float"
                >
                  <IconTarget width={24} height={24} className="text-brand" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-[15%] right-[25%] w-16 h-16 rounded-2xl bg-white border-2 border-brand shadow-xl flex items-center justify-center animate-float"
                  style={{ animationDelay: '0.5s' }}
                >
                  <IconBrain width={24} height={24} className="text-brand" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute top-[45%] left-[30%] w-20 h-20 rounded-2xl bg-brand text-white shadow-2xl flex items-center justify-center animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <IconWorkflow width={32} height={32} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute bottom-[25%] left-[15%] w-16 h-16 rounded-2xl bg-white border-2 border-border shadow-xl flex items-center justify-center animate-float"
                  style={{ animationDelay: '1.5s' }}
                >
                  <IconMail width={24} height={24} className="text-brand" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="absolute bottom-[20%] right-[20%] w-16 h-16 rounded-2xl bg-white border-2 border-border shadow-xl flex items-center justify-center animate-float"
                  style={{ animationDelay: '2s' }}
                >
                  <IconCRM width={24} height={24} className="text-brand" />
                </motion.div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
                  <motion.line
                    x1="18%" y1="30%" x2="40%" y2="50%"
                    stroke="#DC2626" strokeWidth="2" strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                  <motion.line
                    x1="60%" y1="25%" x2="45%" y2="50%"
                    stroke="#DC2626" strokeWidth="2" strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.7 }}
                  />
                  <motion.line
                    x1="40%" y1="55%" x2="25%" y2="75%"
                    stroke="#DC2626" strokeWidth="2" strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.9 }}
                  />
                  <motion.line
                    x1="45%" y1="55%" x2="70%" y2="75%"
                    stroke="#DC2626" strokeWidth="2" strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.1 }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-6">
                Your team shouldn't be doing work that <span className="text-gradient-red">software</span> can handle.
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed">
                Businesses lose countless hours on repetitive tasks — data entry, follow-ups, scheduling, reporting. These don't need human intelligence. They need automation.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border card-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <IconZap width={28} height={28} className="text-brand" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-3">Save Time</h3>
                <p className="text-ink-muted leading-relaxed">Eliminate repetitive manual work and free your team to focus on high-value activities.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border card-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <IconShield width={28} height={28} className="text-brand" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-3">Reduce Errors</h3>
                <p className="text-ink-muted leading-relaxed">Create consistent, reliable automated workflows that never miss a step.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border card-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <IconRocket width={28} height={28} className="text-brand" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-3">Scale Faster</h3>
                <p className="text-ink-muted leading-relaxed">Handle more customers and operations without increasing manual workload.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">What We Do</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-4">
                Automation Services
              </h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                End-to-end automation solutions tailored to your business needs.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: IconBrain, title: 'AI Automation', desc: 'Intelligent systems that automate decisions and tasks.' },
              { icon: IconWorkflow, title: 'Workflow Automation', desc: 'Connect tools and automate processes end-to-end.' },
              { icon: IconCRM, title: 'CRM Automation', desc: 'Manage leads, customers, and pipelines automatically.' },
              { icon: IconTarget, title: 'Lead Automation', desc: 'Capture, qualify, and distribute leads automatically.' },
              { icon: IconChat, title: 'Customer Support', desc: 'AI chatbots and automated response systems.' },
              { icon: IconCalendar, title: 'Appointment Automation', desc: 'Bookings, reminders, and follow-ups on autopilot.' },
              { icon: IconMail, title: 'Email & Messaging', desc: 'Automated communication across all channels.' },
              { icon: IconSettings, title: 'Custom Systems', desc: 'Automation built around your unique processes.' },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <Link to="/services" className="group p-6 rounded-xl bg-surface border border-border card-lift block">
                  <div className="w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center mb-4 group-hover:border-brand group-hover:bg-brand-50 transition-all duration-300">
                    <service.icon width={22} height={22} className="text-ink group-hover:text-brand transition-colors" />
                  </div>
                  <h3 className="text-base font-display font-bold text-ink mb-2 group-hover:text-brand transition-colors">{service.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{service.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal>
            <div className="text-center mt-12">
              <Link to="/services" className="group inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
                View All Services
                <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Automations Built' },
              { number: '50+', label: 'Businesses Served' },
              { number: '10M+', label: 'Tasks Automated' },
              { number: '99.9%', label: 'System Uptime' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-display font-bold text-gradient-red mb-2">{stat.number}</p>
                  <p className="text-sm text-ink-muted font-medium">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 border-y border-border overflow-hidden bg-surface">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 px-6">
              {['AI Automation', 'Workflow Systems', 'CRM Integration', 'Lead Management', 'Customer Support', 'Email Automation', 'Appointment Booking', 'Data Processing', 'Custom AI Agents', 'Business Intelligence'].map((item, i) => (
                <span key={`${setIndex}-${i}`} className="flex items-center gap-12">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-ink/10">{item}</span>
                  <span className="w-2 h-2 rounded-full bg-brand/30" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">FAQ</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink">
                Common Questions
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-4">
              {[
                { q: 'What kind of business processes can you automate?', a: 'We can automate virtually any repetitive business process — from lead management and customer onboarding to data entry, email sequences, appointment scheduling, reporting, and more. If a task follows a predictable pattern, it can likely be automated.' },
                { q: 'Do I need to replace my existing software?', a: 'No. Our automation systems are designed to work alongside your existing tools. We integrate with the software you already use — CRMs, email platforms, calendars, project management tools, and more.' },
                { q: 'How long does an automation project take?', a: 'Project timelines vary based on complexity. A simple workflow automation might take 1-2 weeks, while a comprehensive business automation system could take 4-8 weeks. We provide clear timelines during the discovery phase.' },
                { q: 'Can you build custom AI workflows?', a: 'Absolutely. We design custom AI-powered workflows tailored to your specific business needs. This includes AI agents for decision-making, natural language processing, and intelligent data processing systems.' },
                { q: 'Do you provide maintenance after launch?', a: 'Yes. We offer ongoing maintenance and optimization services to ensure your automation systems continue to perform at their best, including monitoring, updates, and continuous improvement.' },
              ].map((faq, i) => (
                <details key={i} className="group p-6 rounded-xl bg-white border border-border open:border-brand/30 transition-all">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-base font-display font-semibold text-ink pr-4">{faq.q}</span>
                    <span className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2V10M2 6H10" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-ink-muted leading-relaxed text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-ink text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Ready to <span className="text-gradient-red">eliminate</span> repetitive work?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let's identify the tasks slowing your business down and turn them into automated workflows.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-light transition-all duration-300 shadow-2xl shadow-brand/30"
            >
              Book a Free Automation Audit
              <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
