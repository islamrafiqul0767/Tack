import { Link } from 'react-router-dom';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { Logo } from '../components/Logo';
import { IconArrowRight, IconZap, IconShield, IconRocket, IconBrain } from '../components/Icons';

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">About Us</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6">
                We build the <span className="text-gradient-red">future</span> of work.
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                VECTRAL is an AI automation agency that helps businesses eliminate repetitive work and focus on what matters most — growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-ink-muted leading-relaxed mb-6">
                  We believe that businesses should be run by humans doing human work — creative thinking, strategic decisions, and meaningful relationships. Everything else should be automated.
                </p>
                <p className="text-lg text-ink-muted leading-relaxed">
                  Our mission is to make advanced AI automation accessible to businesses of all sizes. We don't just build systems — we transform how businesses operate, giving teams back the time to focus on what truly matters.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-surface border border-border flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-64 h-64 bg-brand/5 rounded-full blur-[60px]" />
                    <Logo size={120} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                Our core values shape every project we deliver.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
                  <IconZap width={32} height={32} className="text-brand" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-3">Speed</h3>
                <p className="text-ink-muted leading-relaxed">We move fast without sacrificing quality. Your automation should be live in weeks, not months.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
                  <IconShield width={32} height={32} className="text-brand" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-3">Reliability</h3>
                <p className="text-ink-muted leading-relaxed">Our systems are built to last. We engineer for stability, security, and consistent performance.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
                  <IconBrain width={32} height={32} className="text-brand" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-3">Innovation</h3>
                <p className="text-ink-muted leading-relaxed">We stay at the cutting edge of AI and automation, bringing the latest technology to your business.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed mb-8">
                We don't believe in one-size-fits-all solutions. Every business is unique, and every automation system we build is tailored specifically to your workflows, tools, and goals.
              </p>
              <p className="text-lg text-ink-muted leading-relaxed">
                We work closely with your team throughout the entire process — from discovery to deployment and beyond. Our goal isn't just to deliver a system, but to empower your team with the tools and knowledge to thrive in an automated future.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Let's build something <span className="text-gradient-red">extraordinary</span>.
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Ready to transform your business with AI automation?
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-light transition-all duration-300 shadow-2xl shadow-brand/30"
            >
              Get in Touch
              <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
