import React from 'react';
import { motion } from 'motion/react';
import { 
  SquareTerminal, 
  Binary, 
  ChevronRight, 
  ChevronLeft,
  ArrowUpRight,
  Target,
  Hash
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  moduleLabel?: string;
}

export function Section({ title, children, moduleLabel }: SectionProps) {
  return (
    <div className="mb-20 last:mb-0">
      {moduleLabel && (
        <div className="flex items-center gap-3 text-app-accent font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          <Hash size={12} />
          <span>{moduleLabel}</span>
          <div className="h-px flex-1 bg-app-border" />
        </div>
      )}
      <h2 className="text-2xl font-display font-bold text-app-text mb-8 tracking-tight flex items-center gap-3">
        <span className="w-1.5 h-6 bg-app-accent rounded-full" />
        {title}
      </h2>
      <div className="space-y-6 text-app-text/90 leading-relaxed text-[15px] font-normal">
        {children}
      </div>
    </div>
  );
}

interface InfoBoxProps {
  title: string;
  type: 'viva' | 'important' | 'numerical' | 'example';
  children: React.ReactNode;
  tag?: string;
}

export function InfoBox({ title, type, children, tag }: InfoBoxProps) {
  const styles = {
    viva: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', color: 'text-emerald-400', icon: SquareTerminal },
    important: { border: 'border-blue-500/20', bg: 'bg-blue-500/5', color: 'text-blue-400', icon: Binary },
    numerical: { border: 'border-app-border', bg: 'bg-app-text/5', color: 'text-app-text', icon: Hash },
    example: { border: 'border-app-border', bg: 'bg-app-text/2', color: 'text-app-muted', icon: Target }
  }[type];

  const Icon = styles.icon;

  return (
    <div className={`p-6 my-10 border ${styles.border} ${styles.bg} rounded-xl relative overflow-hidden group`}>
      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${styles.color}`}>
        <Icon size={48} strokeWidth={1} />
      </div>
      
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex justify-between items-center">
          {tag && (
            <span className={`text-[9px] font-mono font-bold uppercase tracking-[0.2em] px-2 py-1 rounded border border-current ${styles.color} bg-current/5`}>
              {tag}
            </span>
          )}
          <span className="text-[9px] font-mono text-app-muted uppercase tracking-widest opacity-80">
            Node://{type.toUpperCase()}
          </span>
        </div>
        
        <h3 className={`font-display text-lg font-bold ${styles.color}`}>
          {title}
        </h3>
        
        <div className="text-app-text/80 text-sm leading-relaxed font-normal">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">{children}</div>;
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 py-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 group">
          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-app-accent/60 group-hover:bg-app-accent transition-colors" />
          <span className="text-[14px] text-app-text/80 group-hover:text-app-text transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function UnitLayout({ title, children }: { title: string, children: React.ReactNode }) {
  const { activeUnit, setActiveUnit, unitsCount } = useNavigation();
  const { isDarkMode } = useTheme();

  const handleNext = () => {
    if (activeUnit && activeUnit < unitsCount) {
      setActiveUnit(activeUnit + 1);
    }
  };

  const handlePrev = () => {
    if (activeUnit && activeUnit > 1) {
      setActiveUnit(activeUnit - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-8 md:px-12 lg:px-16">
      <header className="mb-20 pb-12 border-b border-app-border relative">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-app-accent uppercase px-2 py-1 bg-app-accent/10 border border-app-accent/20 rounded">
            {title.split(':')[0]}
          </span>
          <div className="h-px flex-1 bg-app-border/50" />
          <span className="text-[10px] font-mono text-app-muted opacity-40">8EE6-60.1_PROTOCOL</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-app-text tracking-tight mb-4">
          {title.split(':')[1]?.trim() || title}
        </h1>
        <p className="text-app-muted text-sm font-mono tracking-tight opacity-60 italic">
          [SECURE_ACCESS_GRANTED] // Technical analysis and audit documentation
        </p>
      </header>
      
      <div className={`prose ${isDarkMode ? 'prose-invert' : ''} max-w-none prose-headings:text-app-text font-sans selection:bg-app-accent/40`}>
        {children}
      </div>

      <div className="mt-32 pt-12 border-t border-app-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 items-center md:items-start order-2 md:order-1">
          <span className="text-[10px] font-mono font-bold text-app-muted uppercase tracking-[0.2em] opacity-50">
            Navigation Console
          </span>
          <p className="text-[11px] text-app-text/40 font-mono italic">
            {activeUnit ? `Node ${activeUnit} of ${unitsCount}` : 'System Overview'}
          </p>
        </div>

        <div className="flex items-center gap-4 order-1 md:order-2">
          {activeUnit && activeUnit > 1 && (
            <button 
              onClick={handlePrev}
              className="group flex items-center gap-2 px-6 py-3 border border-app-border bg-app-surface text-app-text text-sm font-bold rounded-xl hover:border-app-accent/50 transition-all duration-300"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Previous Unit
            </button>
          )}
          
          {activeUnit && activeUnit < unitsCount ? (
            <button 
              onClick={handleNext}
              className="group flex items-center gap-3 px-8 py-3 bg-app-accent text-app-bg text-sm font-bold rounded-xl hover:translate-x-1 transition-all duration-300 shadow-xl shadow-app-accent/20"
            >
              Next Unit <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : activeUnit === unitsCount ? (
            <button 
              onClick={() => { setActiveUnit(null); }}
              className="group flex items-center gap-3 px-8 py-3 bg-app-surface border border-app-accent/30 text-app-accent text-sm font-bold rounded-xl hover:bg-app-accent/5 transition-all duration-300"
            >
              Main Terminal <Hash size={16} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
