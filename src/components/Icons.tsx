import { motion } from 'framer-motion';

// Custom Brand Logo
export function Logo({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M4 6L16 28L28 6"
        stroke="#DC2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx="16"
        cy="16"
        r="2.5"
        fill="#DC2626"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.path
        d="M10 14L16 8L22 14"
        stroke="#0a0a0a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </svg>
  );
}

// Custom Wordmark
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-[-0.03em] ${className}`}>
      VECTRAL
    </span>
  );
}

// Custom Icons - All hand-crafted SVG
const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconBrain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 2C9 2 7 4 7 6.5C7 4 5 3 3.5 4C2 5 2 7.5 3 9C1.5 9.5 1 11.5 2 13C3 14.5 5 14.5 6 14C5.5 16 6.5 18 8.5 18.5C10.5 19 12 17.5 12 17.5" />
      <path d="M12 2C15 2 17 4 17 6.5C17 4 19 3 20.5 4C22 5 22 7.5 21 9C22.5 9.5 23 11.5 22 13C21 14.5 19 14.5 18 14C18.5 16 17.5 18 15.5 18.5C13.5 19 12 17.5 12 17.5" />
      <path d="M12 2V22" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconWorkflow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M9 6H15" />
      <path d="M6 9V12H12" />
      <path d="M18 9V12H15" />
    </svg>
  );
}

export function IconCRM(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20C3 16.5 5.5 14 9 14C10.5 14 11.8 14.5 12.8 15.3" />
      <path d="M14 20C14 17.5 15.5 16 17 16C18.5 16 21 17.5 21 20" />
      <path d="M12 11L14 13" strokeDasharray="2 2" />
    </svg>
  );
}

export function IconTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 3V5" />
      <path d="M12 19V21" />
      <path d="M3 12H5" />
      <path d="M19 12H21" />
    </svg>
  );
}

export function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M21 12C21 16.5 17 20 12 20C10.5 20 9.1 19.7 7.9 19.2L4 20L5.2 17.2C4.4 15.8 4 14 4 12C4 7.5 7.5 4 12 4C16.5 4 21 7 21 12Z" />
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M17 7L19 5" />
      <path d="M19 5L21 7" />
    </svg>
  );
}

export function IconCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10H21" />
      <path d="M8 3V6" />
      <path d="M16 3V6" />
      <circle cx="8" cy="15" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15" r="1.5" />
      <circle cx="16" cy="15" r="1.5" />
    </svg>
  );
}

export function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7L12 13L22 7" />
      <path d="M6 19L10 15" strokeDasharray="2 2" />
      <path d="M18 19L14 15" strokeDasharray="2 2" />
    </svg>
  );
}

export function IconSettings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
      <path d="M19.4 15C19.2 15.4 19.3 15.9 19.6 16.2L19.7 16.3C20 16.6 20 17.1 19.7 17.4C19.4 17.7 18.9 17.7 18.6 17.4L18.5 17.3C18.2 17 17.7 16.9 17.3 17.1C16.9 17.3 16.7 17.7 16.8 18.2V18.5C16.8 18.9 16.5 19.3 16 19.3C15.6 19.3 15.2 18.9 15.2 18.5V18.3C15.2 17.8 14.8 17.4 14.3 17.3H14.2C13.8 17.3 13.4 17.5 13.2 17.9L13.1 18C12.8 18.3 12.3 18.3 12 18C11.7 17.7 11.7 17.2 12 16.9L12.1 16.8C12.4 16.5 12.5 16 12.3 15.6" />
      <path d="M7.6 14C7.2 13.8 6.7 13.9 6.4 14.2L6.3 14.3C6 14.6 5.5 14.6 5.2 14.3C4.9 14 4.9 13.5 5.2 13.2L5.3 13.1C5.6 12.8 5.7 12.3 5.5 11.9C5.3 11.5 4.9 11.3 4.4 11.4H4.1C3.7 11.4 3.3 11.1 3.3 10.6C3.3 10.2 3.7 9.8 4.1 9.8H4.3C4.8 9.8 5.2 9.4 5.3 8.9V8.8C5.3 8.4 5.1 8 4.7 7.8L4.6 7.7C4.3 7.4 4.3 6.9 4.6 6.6C4.9 6.3 5.4 6.3 5.7 6.6L5.8 6.7C6.1 7 6.6 7.1 7 6.9" />
      <path d="M16.4 10C16.8 10.2 17.3 10.1 17.6 9.8L17.7 9.7C18 9.4 18.5 9.4 18.8 9.7C19.1 10 19.1 10.5 18.8 10.8L18.7 10.9C18.4 11.2 18.3 11.7 18.5 12.1C18.7 12.5 19.1 12.7 19.6 12.6H19.9C20.3 12.6 20.7 12.9 20.7 13.4C20.7 13.8 20.3 14.2 19.9 14.2H19.7C19.2 14.2 18.8 14.6 18.7 15.1V15.2C18.7 15.6 18.9 16 19.3 16.2L19.4 16.3C19.7 16.6 19.7 17.1 19.4 17.4C19.1 17.7 18.6 17.7 18.3 17.4L18.2 17.3C17.9 17 17.4 16.9 17 17.1" />
    </svg>
  );
}

export function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16L21 21" />
      <path d="M8 11H14" />
      <path d="M11 8V14" />
    </svg>
  );
}

export function IconPen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M17 3L21 7L8 20L4 21L5 17L17 3Z" />
      <path d="M15 5L19 9" />
      <path d="M4 21L8 20" />
    </svg>
  );
}

export function IconCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M8 6L3 12L8 18" />
      <path d="M16 6L21 12L16 18" />
      <path d="M14 4L10 20" />
    </svg>
  );
}

export function IconChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 21H21" />
      <path d="M5 21V14" />
      <path d="M10 21V10" />
      <path d="M15 21V6" />
      <path d="M20 21V3" />
      <path d="M5 14L10 10L15 6L20 3" strokeDasharray="3 3" />
    </svg>
  );
}

export function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 12H19" />
      <path d="M14 7L19 12L14 17" />
    </svg>
  );
}

export function IconZap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" />
    </svg>
  );
}

export function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 3L4 7V12C4 17 7.5 20.5 12 22C16.5 20.5 20 17 20 12V7L12 3Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  );
}

export function IconRocket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 2C12 2 7 7 7 14L12 19L17 14C17 7 12 2 12 2Z" />
      <circle cx="12" cy="11" r="2" />
      <path d="M7 14L3 16L5 18" />
      <path d="M17 14L21 16L19 18" />
      <path d="M10 19V22H14V19" />
    </svg>
  );
}

export function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12H21" />
      <path d="M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21" />
      <path d="M12 3C9.5 5.5 8.5 8.5 8.5 12C8.5 15.5 9.5 18.5 12 21" />
    </svg>
  );
}

export function IconStore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 9L5 4H19L21 9" />
      <path d="M3 9C3 11 4 12 5.5 12C7 12 8 11 8 9" />
      <path d="M8 9C8 11 9 12 10.5 12C12 12 13 11 13 9" />
      <path d="M13 9C13 11 14 12 15.5 12C17 12 18 11 18 9" />
      <path d="M21 9C21 11 20 12 18.5 12" />
      <rect x="5" y="12" width="14" height="9" rx="0" />
      <rect x="9" y="16" width="6" height="5" />
    </svg>
  );
}

export function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <rect x="8" y="7" width="3" height="3" />
      <rect x="13" y="7" width="3" height="3" />
      <rect x="8" y="12" width="3" height="3" />
      <rect x="13" y="12" width="3" height="3" />
      <rect x="10" y="18" width="4" height="3" />
    </svg>
  );
}

export function IconScissors(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.5 8.5L20 18" />
      <path d="M8.5 15.5L20 6" />
    </svg>
  );
}

export function IconUtensils(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M7 3V10C7 12 9 13 9 13V21" />
      <path d="M7 3C7 3 5 5 5 8C5 10 7 10 7 10" />
      <path d="M7 3C7 3 9 5 9 8C9 10 7 10 7 10" />
      <path d="M17 3V9C17 11 15 12 15 12V21" />
      <path d="M13 3V7C13 9 15 10 15 10" />
      <path d="M13 3C13 3 11 5 11 7C11 9 13 10 13 10" />
      <path d="M17 3C17 3 19 5 19 7C19 9 17 10 17 10" />
    </svg>
  );
}

export function IconMegaphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M19 5L8 10H4V14H8L19 19V5Z" />
      <path d="M19 5C20.5 6 21.5 8 21.5 12C21.5 16 20.5 18 19 19" />
      <path d="M8 14L6 21" />
    </svg>
  );
}

export function IconCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 3H5L8 15H18L21 7H6" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
    </svg>
  );
}

export function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M8 8V5C8 4 9 3 10 3H14C15 3 16 4 16 5V8" />
      <path d="M3 13H21" />
      <rect x="10" y="11" width="4" height="4" rx="1" />
    </svg>
  );
}

export function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 8H20" />
      <path d="M4 16H20" />
    </svg>
  );
}

export function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function IconSend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

export function IconChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M6 9L12 15L18 9" />
    </svg>
  );
}

export function IconPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 12L10 17L20 7" />
    </svg>
  );
}

export function IconMail2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7L12 13L22 7" />
    </svg>
  );
}

export function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 4H9L11 9L8.5 10.5C10 13.5 12.5 16 15.5 17.5L17 15L22 17V21C22 22 21 23 19 23C10 23 3 16 3 7C3 5 4 4 5 4Z" />
    </svg>
  );
}

export function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 22C12 22 20 15 20 9C20 4.58 16.42 1 12 1C7.58 1 4 4.58 4 9C4 15 12 22 12 22Z" />
      <circle cx="12" cy="9" r="3" />
    </svg>
  );
}
