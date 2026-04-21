import React from 'react';
import { 
  Zap, 
  Search, 
  BarChart3, 
  Lightbulb, 
  Home, 
  Factory, 
  TrendingDown, 
  ShieldCheck,
  Scale,
  Cpu,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeUnit: number;
  setActiveUnit: (unit: number) => void;
  isOpen: boolean;
}

const units = [
  { id: 1, title: "Energy Scenarios", icon: Zap },
  { id: 2, title: "Audit Methodology", icon: Search },
  { id: 3, title: "Instrumentation", icon: BarChart3 },
  { id: 4, title: "Load Management", icon: TrendingDown },
  { id: 5, title: "Motor Efficiency", icon: Factory },
  { id: 6, title: "Lighting Systems", icon: Lightbulb },
  { id: 7, title: "Buildings Audit", icon: Home },
  { id: 8, title: "Demand Side Mgmt", icon: ShieldCheck },
  { id: 9, title: "Energy Conservation", icon: Scale },
];

export default function Sidebar({ activeUnit, setActiveUnit, isOpen }: SidebarProps) {
  return (
    <motion.aside 
      initial={false}
      animate={{ 
        width: isOpen ? '280px' : '0px',
        opacity: isOpen ? 1 : 0
      }}
      className="h-full bg-app-surface border-r border-app-border flex flex-col shrink-0 overflow-hidden relative z-40"
    >
      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 rounded-lg bg-app-accent flex items-center justify-center text-app-bg shadow-lg shadow-app-accent/20">
            <Cpu size={18} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight leading-none mb-1">EnergyMaster</span>
            <span className="text-[10px] font-mono text-app-muted uppercase tracking-widest bg-app-bg px-1.5 py-0.5 rounded border border-app-border leading-none"> v2.4.0</span>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-[10px] font-mono font-bold text-app-muted uppercase tracking-[0.2em] mb-4 px-2 flex items-center gap-2">
              <Activity size={12} className="text-app-accent" />
              Syllabus Core
            </h2>
            <nav className="space-y-1">
              {units.map((unit) => {
                const isActive = activeUnit === unit.id;
                const Icon = unit.icon;
                
                return (
                  <button
                    key={unit.id}
                    onClick={() => setActiveUnit(unit.id)}
                    className={`w-full text-left group transition-all duration-200 px-3 py-2 rounded-lg flex items-center gap-3 relative ${
                      isActive 
                        ? 'bg-app-accent/10 border border-app-accent/20 text-app-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]' 
                        : 'text-app-muted hover:bg-app-text/5 hover:text-app-text'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="sidebar-active"
                        className="absolute left-0 w-1 h-4 bg-app-accent rounded-r-full"
                      />
                    )}
                    <Icon size={16} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'text-app-accent' : 'opacity-50 group-hover:opacity-100 transition-opacity'} />
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono opacity-50 font-bold tracking-tighter">0{unit.id}</span>
                      <span className="text-xs font-medium tracking-tight">
                        {unit.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </section>
        </div>
      </div>
      
      <div className="p-6 border-t border-app-border bg-app-bg/50">
        <div className="flex items-center justify-between text-[10px] font-mono text-app-muted">
          <span>SYSTEM_READY</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-app-accent rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-app-accent/40 rounded-full" />
            <div className="w-1 h-1 bg-app-accent/10 rounded-full" />
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
