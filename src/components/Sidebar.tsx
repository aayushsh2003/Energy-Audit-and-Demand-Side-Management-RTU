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
  Scale
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
        width: isOpen ? '288px' : '0px',
        opacity: isOpen ? 1 : 0
      }}
      className="h-full bg-slate-100 border-r border-slate-200 flex flex-col shrink-0 overflow-hidden"
    >
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-[11px] uppercase font-bold text-slate-500 tracking-widest mb-4 px-3">Module Directory</h2>
        <nav className="space-y-1">
          {units.map((unit) => {
            const isActive = activeUnit === unit.id;
            const unitNumber = unit.id < 10 ? `0${unit.id}` : unit.id;
            
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnit(unit.id)}
                className={`w-full text-left px-3 py-2.5 rounded text-sm flex items-center gap-3 transition-all ${
                  isActive 
                    ? 'bg-white border border-slate-200 shadow-sm text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className={`w-6 h-6 rounded flex items-center justify-center text-[10px] ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'bg-slate-200 text-slate-500'
                }`}>
                  {unitNumber}
                </span>
                <span className="truncate">Unit {unit.id}: {unit.title}</span>
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t border-slate-200">
        <div className="bg-blue-600 rounded-lg p-3 text-white shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl" />
          <p className="text-[10px] font-bold uppercase opacity-80 mb-1 relative z-10">Current Focus</p>
          <p className="text-xs leading-relaxed relative z-10 italic">
            Professional Audit Prep & DSM Strategy Implementation
          </p>
        </div>
      </div>
    </motion.aside>
  );
}
