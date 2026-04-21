/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { Menu, X, BookOpen, GraduationCap, Clock, Award, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeUnit, setActiveUnit] = useState<number>(0); // 0 for Home
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderUnit = () => {
    switch (activeUnit) {
      case 1: return <Unit1 />;
      case 2: return <Unit2 />;
      case 3: return <Unit3 />;
      case 4: return <Unit4 />;
      case 5: return <Unit5 />;
      case 6: return <Unit6 />;
      case 7: return <Unit7 />;
      case 8: return <Unit8 />;
      case 9: return <Unit9 />;
      default: return <HomeView onStart={() => setActiveUnit(1)} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold cursor-pointer"
            onClick={() => setActiveUnit(0)}
          >
            E
          </div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-800">
            Energy Management & Audit <span className="text-slate-400 font-normal ml-2 hidden sm:inline">| Course Syllabus</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Course Progress</span>
            <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-1">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                style={{ width: `${(activeUnit / 9) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors"
              title="Toggle Syllabus"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <button 
              onClick={() => setActiveUnit(0)}
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded shadow-sm hover:bg-slate-800 transition-colors"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          activeUnit={activeUnit} 
          setActiveUnit={(unit) => {
            setActiveUnit(unit);
            if (window.innerWidth < 1024) setSidebarOpen(false);
          }} 
          isOpen={sidebarOpen} 
        />
        
        <main className="flex-1 bg-white overflow-hidden flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUnit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-y-auto no-scrollbar"
            >
              <div className="w-full">
                {renderUnit()}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-10 bg-slate-50 border-t border-slate-200 flex items-center px-8 justify-between shrink-0 z-50">
        <p className="text-[10px] text-slate-400 uppercase font-medium tracking-wide">
          Course Code: EMA-402 • Engineering Study Guide • Academic Year 2026
        </p>
        <div className="flex items-center gap-4 text-[10px] text-slate-400 uppercase font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> 
            Live Updates
          </span>
          <span className="hover:text-slate-600 cursor-pointer transition-colors">Help Center</span>
        </div>
      </footer>
    </div>
  );
}

function HomeView({ onStart }: { onStart: () => void }) {
  return (
    <div className="max-w-4xl mx-auto py-20 px-10">
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/30 mb-8"
        >
          <GraduationCap size={32} />
        </motion.div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Energy Audit & Demand Side Management
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          The complete 6th-semester study guide. Master every concept from basic energy scenarios to complex auditing methodologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <FeatureCard 
          icon={<BookOpen className="text-blue-600" size={20} />}
          title="Structured Content"
          description="9 comprehensive units extracted from core curriculum data, organized for quick learning."
        />
        <FeatureCard 
          icon={<Clock className="text-emerald-600" size={20} />}
          title="Exam Focused"
          description="Highlighting 'Must Know' topics, common viva questions, and essential numerical formulas."
        />
        <FeatureCard 
          icon={<Award className="text-amber-600" size={20} />}
          title="Professional Design"
          description="Clean, technical interface inspired by modern documentation for a distraction-free experience."
        />
        <FeatureCard 
          icon={<Zap className="text-blue-500" size={20} />}
          title="Technical Accuracy"
          description="Correct formulas and units mapped exactly as per the engineering syllabus."
        />
      </div>

      <div className="text-center">
        <button 
          onClick={onStart}
          className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
        >
          Start Studying Now
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all group">
      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

