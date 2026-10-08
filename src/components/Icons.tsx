import { motion } from 'framer-motion';

// Base icon props
const baseProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Animated wrapper for icons
function AnimatedIcon({ children, className, style, onClick, ...props }: { children: React.ReactNode } & React.SVGProps<SVGSVGElement>) {
  return (
    <motion.svg
      width={props.width || baseProps.width}
      height={props.height || baseProps.height}
      viewBox={baseProps.viewBox}
      fill={baseProps.fill}
      stroke={baseProps.stroke}
      strokeWidth={baseProps.strokeWidth}
      strokeLinecap={baseProps.strokeLinecap}
      strokeLinejoin={baseProps.strokeLinejoin}
      className={className}
      style={style}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.svg>
  );
}

export function IconBrain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M12 2C9 2 7 4 7 6.5C7 4 5 3 3.5 4C2 5 2 7.5 3 9C1.5 9.5 1 11.5 2 13C3 14.5 5 14.5 6 14C5.5 16 6.5 18 8.5 18.5C10.5 19 12 17.5 12 17.5" />
      <path d="M12 2C15 2 17 4 17 6.5C17 4 19 3 20.5 4C22 5 22 7.5 21 9C22.5 9.5 23 11.5 22 13C21 14.5 19 14.5 18 14C18.5 16 17.5 18 15.5 18.5C13.5 19 12 17.5 12 17.5" />
      <path d="M12 2V22" />
    </AnimatedIcon>
  );
}

export function IconWorkflow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M9 6H15" />
      <path d="M6 9V12H12" />
      <path d="M18 9V12H15" />
    </AnimatedIcon>
  );
}

export function IconCRM(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20C3 16.5 5.5 14 9 14C10.5 14 11.8 14.5 12.8 15.3" />
      <path d="M14 20C14 17.5 15.5 16 17 16C18.5 16 21 17.5 21 20" />
    </AnimatedIcon>
  );
}

export function IconTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 3V5" />
      <path d="M12 19V21" />
      <path d="M3 12H5" />
      <path d="M19 12H21" />
    </AnimatedIcon>
  );
}

export function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M21 12C21 16.5 17 20 12 20C10.5 20 9.1 19.7 7.9 19.2L4 20L5.2 17.2C4.4 15.8 4 14 4 12C4 7.5 7.5 4 12 4C16.5 4 21 7 21 12Z" />
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    </AnimatedIcon>
  );
}

export function IconCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10H21" />
      <path d="M8 3V6" />
      <path d="M16 3V6" />
      <circle cx="8" cy="15" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15" r="1.5" />
      <circle cx="16" cy="15" r="1.5" />
    </AnimatedIcon>
  );
}

export function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7L12 13L22 7" />
    </AnimatedIcon>
  );
}

export function IconSettings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </AnimatedIcon>
  );
}

export function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </AnimatedIcon>
  );
}

export function IconPen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </AnimatedIcon>
  );
}

export function IconCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </AnimatedIcon>
  );
}

export function IconChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </AnimatedIcon>
  );
}

export function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IconZap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </AnimatedIcon>
  );
}

export function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </AnimatedIcon>
  );
}

export function IconRocket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </AnimatedIcon>
  );
}

export function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </AnimatedIcon>
  );
}

export function IconStore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M3 9l1-5h16l1 5" />
      <path d="M3 9a3 3 0 0 0 3 3 3 3 0 0 0 3-3" />
      <path d="M9 9a3 3 0 0 0 3 3 3 3 0 0 0 3-3" />
      <path d="M15 9a3 3 0 0 0 3 3 3 3 0 0 0 3-3" />
      <path d="M3 9v11h18V9" />
      <path d="M9 20v-6h6v6" />
    </AnimatedIcon>
  );
}

export function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <line x1="8" y1="6" x2="8" y2="6" />
      <line x1="12" y1="6" x2="12" y2="6" />
      <line x1="16" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="16" y1="14" x2="16" y2="14" />
    </AnimatedIcon>
  );
}

export function IconScissors(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </AnimatedIcon>
  );
}

export function IconUtensils(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </AnimatedIcon>
  );
}

export function IconMegaphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </AnimatedIcon>
  );
}

export function IconCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </AnimatedIcon>
  );
}

export function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </AnimatedIcon>
  );
}

export function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function IconSend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </AnimatedIcon>
  );
}

export function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconMail2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </AnimatedIcon>
  );
}

export function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </AnimatedIcon>
  );
}

export function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </AnimatedIcon>
  );
}

export function IconPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <AnimatedIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </AnimatedIcon>
  );
}

export function IconAlertCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
