import React, { useState } from 'react';
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
  Menu,
  X,
  BookOpen,
  ArrowRight,
  Cpu,
  Terminal,
  Activity,
  Box,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationProvider } from './context/NavigationContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Unit1 from './components/units/Unit1';
import Unit2 from './components/units/Unit2';
import Unit3 from './components/units/Unit3';
import Unit4 from './components/units/Unit4';
import Unit5 from './components/units/Unit5';
import Unit6 from './components/units/Unit6';
import Unit7 from './components/units/Unit7';
import Unit8 from './components/units/Unit8';
import Unit9 from './components/units/Unit9';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
    className="group p-8 border border-app-border hover:border-app-accent/50 transition-all duration-500 bg-app-surface relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 group-hover:opacity-10 transition-opacity">
      <Icon size={64} strokeWidth={1} />
    </div>
    <div className="text-app-accent mb-6">
      <Icon size={24} strokeWidth={2} />
    </div>
    <h3 className="font-display text-lg font-bold text-app-text mb-3">{title}</h3>
    <p className="text-app-muted text-sm leading-relaxed font-normal">{description}</p>
  </motion.div>
);

const HomeView = ({ onStart }: { onStart: () => void }) => (
  <div className="max-w-6xl mx-auto py-24 px-10 md:px-20 overflow-hidden">
    <header className="mb-32 relative">
      <div className="flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-app-accent mb-8">
        <Terminal size={14} />
        <span>System Initialization // EMA_8EE6-60.1</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-display font-black text-app-text leading-[0.9] tracking-tighter mb-12">
        Audit & <span className="text-app-accent">DSM</span>
      </h1>
      
      <div className="max-w-xl">
        <p className="text-lg md:text-xl font-normal text-app-muted leading-relaxed mb-12 border-l-2 border-app-accent/30 pl-6">
          Official study interface for <strong>8EE6-60.1</strong>. 
          High-precision analysis of Energy Audit protocols and industrial Demand Side Management.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <button 
            onClick={onStart}
            className="group px-8 py-4 bg-app-accent text-app-bg font-bold rounded-xl flex items-center gap-4 hover:shadow-2xl hover:shadow-app-accent/20 transition-all duration-500"
          >
            Launch System <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4 px-6 border border-app-border rounded-xl bg-app-surface/50 font-mono text-[10px] text-app-muted">
            <Activity size={14} className="text-app-accent animate-pulse" />
            <span>ALL_SYSTEMS_OPERATIONAL</span>
          </div>
        </div>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-app-border border border-app-border rounded-2xl overflow-hidden shadow-2xl">
      <FeatureCard 
        icon={Cpu}
        title="Diagnostic Engine" 
        description="Comprehensive audit methodologies mapped to industrial standards."
        delay={0.1}
      />
      <FeatureCard 
        icon={Box}
        title="Modular Units" 
        description="9 technical modules covering conservation, motors, and lighting grid audit."
        delay={0.2}
      />
      <FeatureCard 
        icon={TrendingDown}
        title="Optimization Labs" 
        description="Load management and efficiency strategies for large-scale infrastructure."
        delay={0.3}
      />
    </div>
  </div>
);

function AppContent() {
  const [activeUnit, setActiveUnit] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const unitsCount = 9;

  const units: Record<number, React.ReactNode> = {
    1: <Unit1 />,
    2: <Unit2 />,
    3: <Unit3 />,
    4: <Unit4 />,
    5: <Unit5 />,
    6: <Unit6 />,
    7: <Unit7 />,
    8: <Unit8 />,
    9: <Unit9 />,
  };

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [activeUnit]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeUnit) return;
      
      if (e.key === 'ArrowRight' && activeUnit < unitsCount) {
        setActiveUnit(activeUnit + 1);
      } else if (e.key === 'ArrowLeft' && activeUnit > 1) {
        setActiveUnit(activeUnit - 1);
      } else if (e.key === 'Escape') {
        setActiveUnit(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeUnit]);

  return (
    <NavigationProvider activeUnit={activeUnit} setActiveUnit={setActiveUnit} unitsCount={unitsCount}>
      <div className="h-screen flex flex-col font-sans bg-app-bg selection:bg-app-accent/40 selection:text-white overflow-hidden transition-colors duration-300">
        {/* Precision Header */}
        <header className="h-14 border-b border-app-border bg-app-surface/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-app-text hover:text-app-accent transition-colors p-2 -ml-2"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div 
              onClick={() => setActiveUnit(null)}
              className="cursor-pointer font-display font-black text-lg tracking-tight text-app-text flex items-center gap-2"
            >
              <div className="w-6 h-6 bg-app-accent rounded-md flex items-center justify-center text-app-bg">
                <Zap size={14} strokeWidth={3} />
              </div>
              <span>EnergyMaster</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] font-bold tracking-[0.2em] text-app-muted">
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1 bg-app-surface border border-app-border rounded-lg hover:border-app-accent/40 transition-colors text-app-text"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={12} className="text-yellow-500" /> : <Moon size={12} className="text-blue-500" />}
              <span>{isDarkMode ? "LIGHT_MODE" : "DARK_MODE"}</span>
            </button>
            <span className="hover:text-app-accent transition-colors cursor-pointer border-b border-transparent hover:border-app-accent pb-1">DATABASE_8EE6-60.1</span>
            <span className="hover:text-app-accent transition-colors cursor-pointer border-b border-transparent hover:border-app-accent pb-1">SECURE_INDEX</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-app-accent/10 border border-app-accent/20 rounded-full text-app-accent">
              <div className="w-1.5 h-1.5 bg-app-accent rounded-full animate-pulse" />
              <span>LIVE_STATUS</span>
            </div>
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden relative">
          <Sidebar 
            activeUnit={activeUnit || 0} 
            setActiveUnit={setActiveUnit} 
            isOpen={isSidebarOpen} 
          />
          
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto bg-app-bg custom-scrollbar overflow-x-hidden relative"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUnit || 'home'}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="relative z-10"
              >
                {activeUnit ? units[activeUnit] : <HomeView onStart={() => setActiveUnit(1)} />}
              </motion.div>
            </AnimatePresence>
            
            <footer className="px-10 md:px-20 py-10 border-t border-app-border mt-20 relative z-10 bg-app-surface/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-app-text">
                  &copy; ACADEMIC_REF_SYS_2026
                </span>
                <div className="flex gap-12 font-mono text-[9px] tracking-widest uppercase text-app-muted">
                  <span>Node: EMA-6S</span>
                  <span>Sub: DSM-PROTOCOL</span>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </NavigationProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
