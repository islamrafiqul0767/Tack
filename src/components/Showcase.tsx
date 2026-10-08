import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const beforeSteps = [
  { label: 'Customer submits form', icon: '📝' },
  { label: 'Employee checks it', icon: '👤' },
  { label: 'Employee enters CRM', icon: '👤' },
  { label: 'Employee sends email', icon: '👤' },
  { label: 'Employee updates spreadsheet', icon: '👤' },
];

const afterSteps = [
  { label: 'Customer submits form', icon: '📝' },
  { label: 'AI qualifies lead', icon: '🤖' },
  { label: 'CRM updated automatically', icon: '⚡' },
  { label: 'Personalized email sent', icon: '✉️' },
  { label: 'Team notified', icon: '🔔' },
  { label: 'Dashboard updated', icon: '📊' },
];

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeView, setActiveView] = useState<'before' | 'after'>('before');

  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary-light mb-3 block">Transformation</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            From Manual Work to Automated Workflow
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            See the difference automation makes in a typical business process.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-xl bg-surface border border-border">
            <button
              onClick={() => setActiveView('before')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === 'before'
                  ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              Before — Manual
            </button>
            <button
              onClick={() => setActiveView('after')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === 'after'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              After — Automated
            </button>
          </div>
        </motion.div>

        {/* Workflow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`relative p-8 sm:p-10 rounded-2xl border ${
            activeView === 'before' 
              ? 'bg-red-500/[0.02] border-red-500/10' 
              : 'bg-green-500/[0.02] border-green-500/10'
          }`}>
            {/* Status badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 ${
              activeView === 'before' 
                ? 'bg-red-500/10 border border-red-500/20' 
                : 'bg-green-500/10 border border-green-500/20'
            }`}>
              {activeView === 'before' ? (
                <>
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-xs font-medium text-red-400">Manual Process — Slow & Error-Prone</span>
                </>
              ) : (
                <>
                  <Zap size={12} className="text-green-400" />
                  <span className="text-xs font-medium text-green-400">Automated Process — Fast & Reliable</span>
                </>
              )}
            </div>

            {/* Steps */}
            <div className="flex flex-wrap items-center gap-3">
              {(activeView === 'before' ? beforeSteps : afterSteps).map((step, index, arr) => (
                <div key={index} className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${
                      activeView === 'before'
                        ? 'bg-surface border-border'
                        : step.icon === '🤖' || step.icon === '⚡'
                        ? 'bg-primary/10 border-primary/20'
                        : 'bg-surface border-border'
                    }`}
                  >
                    <span className="text-lg">{step.icon}</span>
                    <span className="text-xs sm:text-sm text-text-secondary whitespace-nowrap">{step.label}</span>
                  </motion.div>
                  {index < arr.length - 1 && (
                    <ArrowRight size={14} className="text-text-muted hidden sm:block flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Time comparison */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">Time Required</span>
                  <p className={`text-2xl font-bold mt-1 ${
                    activeView === 'before' ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {activeView === 'before' ? '~45 minutes' : '< 2 seconds'}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">Human Involvement</span>
                  <p className={`text-2xl font-bold mt-1 ${
                    activeView === 'before' ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {activeView === 'before' ? '4+ employees' : 'Zero'}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-wider">Error Rate</span>
                  <p className={`text-2xl font-bold mt-1 ${
                    activeView === 'before' ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {activeView === 'before' ? 'High' : 'Near Zero'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
