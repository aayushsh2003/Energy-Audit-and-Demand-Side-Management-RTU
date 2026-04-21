import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, AlertCircle, Calculator, ChevronRight } from 'lucide-react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  moduleLabel?: string;
}

export function Section({ title, children, moduleLabel }: SectionProps) {
  return (
    <div className="mb-12">
      {moduleLabel && (
        <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-2">
          <span>{moduleLabel}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400 capitalize">{title.split(':')[0]}</span>
        </div>
      )}
      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        {title}
      </h2>
      <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
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
    viva: { bg: 'bg-emerald-50/50', border: 'border-emerald-100', text: 'text-emerald-900', icon: MessageSquare, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50' },
    important: { bg: 'bg-white', border: 'border-slate-200', text: 'text-slate-900', icon: AlertCircle, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
    numerical: { bg: 'bg-blue-50/30', border: 'border-blue-100', text: 'text-blue-900', icon: Calculator, iconColor: 'text-blue-600', iconBg: 'bg-white' },
    example: { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-900', icon: MessageSquare, iconColor: 'text-slate-500', iconBg: 'bg-white' }
  }[type];

  const Icon = styles.icon;

  return (
    <div className={`${styles.bg} ${styles.border} border rounded-xl p-5 my-6 hover:border-blue-300 transition-colors group relative`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`${styles.iconBg} ${styles.iconColor} w-10 h-10 rounded flex items-center justify-center`}>
          <Icon size={20} />
        </div>
        {tag && (
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded ring-1 ring-slate-200/50 uppercase tracking-tight">
            {tag}
          </span>
        )}
      </div>
      <h3 className={`font-bold ${styles.text} mb-2 flex items-center gap-2`}>
        {title}
      </h3>
      <div className="text-slate-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">{children}</div>;
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 list-none">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 group">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform" />
          <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function UnitLayout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto py-12 px-10">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-2">
          <span>{title.split(':')[0]}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400">Content Overview</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">{title.split(':')[1]?.trim() || title}</h1>
        <div className="h-1 w-20 bg-blue-600 rounded-full mb-6" />
      </header>
      
      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600">
        {children}
      </div>

      <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-900/10">
        <div>
          <h4 className="text-sm font-bold text-blue-400 mb-1 tracking-wider uppercase">Learning Objectives</h4>
          <p className="text-slate-400 text-sm max-w-md">By the end of this module, you will master the core professional standards and technical metrics of this unit.</p>
        </div>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-sm font-bold flex items-center gap-2 whitespace-nowrap shadow-lg shadow-blue-900/40">
          Mark as Complete <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
