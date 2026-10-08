import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What kind of business processes can you automate?',
    answer: 'We can automate virtually any repetitive business process — from lead management and customer onboarding to data entry, email sequences, appointment scheduling, reporting, and more. If a task follows a predictable pattern, it can likely be automated.',
  },
  {
    question: 'Do I need to replace my existing software?',
    answer: 'No. Our automation systems are designed to work alongside your existing tools. We integrate with the software you already use — CRMs, email platforms, calendars, project management tools, and more — rather than replacing them.',
  },
  {
    question: 'Can you connect my existing tools?',
    answer: 'Yes. We specialize in connecting disparate tools and creating seamless workflows between them. Whether you use HubSpot, Salesforce, Google Workspace, Slack, or any other platform, we can build integrations that make them work together automatically.',
  },
  {
    question: 'How long does an automation project take?',
    answer: 'Project timelines vary based on complexity. A simple workflow automation might take 1-2 weeks, while a comprehensive business automation system could take 4-8 weeks. We provide clear timelines during the discovery phase.',
  },
  {
    question: 'Can you build custom AI workflows?',
    answer: 'Absolutely. We design custom AI-powered workflows tailored to your specific business needs. This includes AI agents for decision-making, natural language processing for customer interactions, and intelligent data processing systems.',
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer: 'Yes. We offer ongoing maintenance and optimization services to ensure your automation systems continue to perform at their best. This includes monitoring, updates, troubleshooting, and continuous improvement based on your evolving needs.',
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-medium text-white group-hover:text-primary-light transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed pb-5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary-light mb-3 block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Common Questions
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Everything you need to know about our automation services.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-2xl bg-surface border border-border"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
