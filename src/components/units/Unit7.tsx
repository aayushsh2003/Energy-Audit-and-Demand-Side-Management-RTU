import React from 'react';
import { 
  Home, 
  Droplets, 
  Search, 
  Zap, 
  Sun, 
  Wind, 
  ShieldCheck, 
  BarChart3, 
  FileText,
  Compass,
  Thermometer,
  Settings,
  ArrowUpRight
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit7() {
  return (
    <UnitLayout title="Unit 7: Buildings & Water Audit">
      <Section title="Topic 1: Energy Saving in New Buildings" moduleLabel="Module 07">
        <p>
          "Energy Efficient Building Design" focuses on minimizing consumption from the <strong>design phase</strong>. 
          Modifying a building after construction is significantly more expensive and less effective.
        </p>

        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent transition-all">
            <Compass className="text-app-accent mb-3 opacity-60 group-hover:opacity-100" size={20} />
            <h4 className="font-bold text-sm text-app-text mb-1">1. Orientation</h4>
            <p className="text-xs text-app-muted leading-relaxed">Aligning building axis to minimize direct solar heat gain while maximizing natural daylight (e.g., North-facing windows).</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent transition-all">
            <Sun className="text-app-accent mb-3 opacity-60 group-hover:opacity-100" size={20} />
            <h4 className="font-bold text-sm text-app-text mb-1">2. Daylighting</h4>
            <p className="text-xs text-app-muted leading-relaxed">Using skylights and large high-efficiency windows to reduce reliance on artificial lighting during the day.</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent transition-all">
            <Wind className="text-app-accent mb-3 opacity-60 group-hover:opacity-100" size={20} />
            <h4 className="font-bold text-sm text-app-text mb-1">3. Passive Ventilation</h4>
            <p className="text-xs text-app-muted leading-relaxed">Designing for cross-ventilation and 'stack effect' to cool the building naturally without heavy AC usage.</p>
          </div>
        </Grid>

        <div className="bg-app-surface border border-app-border p-6 rounded-xl mt-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5"><ShieldCheck size={64} /></div>
          <h4 className="text-app-accent font-bold mb-4 flex items-center gap-2">
            <ShieldCheck size={18} /> Thermal Insulation & Envelope
          </h4>
          <p className="text-sm text-app-text/70 mb-4">
            Insulating roofs and walls prevents heat entry in summer and preserves warmth in winter. 
            This drastically reduces the <strong>Cooling Load (Tonnage)</strong> required for HVAC systems.
          </p>
          <List items={[
            "Double-glazed or low-e glass windows.",
            "Reflective roof coatings (Cool Roofs).",
            "Cavity wall insulation for minimal heat transfer."
          ]} />
        </div>
      </Section>

      <Section title="Topic 2: Water Audit" moduleLabel="Module 07">
        <p>A systematic study of water consumption and losses. <strong>Water Saving = Energy Saving</strong> because less water pumped means less electricity consumed.</p>
        
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-t-2 border-t-blue-500/50">
            <h4 className="text-blue-400 font-mono text-[10px] uppercase font-bold mb-4 tracking-widest flex items-center gap-2">
              <Droplets size={14} /> The Audit Logic
            </h4>
            <div className="space-y-4">
              <div className="relative pl-6 border-l border-app-border">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                <h5 className="text-[11px] font-bold text-app-text">Detection</h5>
                <p className="text-[10px] text-app-muted">Finding dripping taps, pipe leaks, and overflowing tanks.</p>
              </div>
              <div className="relative pl-6 border-l border-app-border">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                <h5 className="text-[11px] font-bold text-app-text">Measurement</h5>
                <p className="text-[10px] text-app-muted">Using ultrasonic flow meters to track departmental usage.</p>
              </div>
            </div>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-t-2 border-t-blue-500/50">
            <h4 className="text-blue-400 font-mono text-[10px] uppercase font-bold mb-4 tracking-widest flex items-center gap-2">
              <ArrowUpRight size={14} /> Conservation Methods
            </h4>
            <List items={[
              "Low-flow fixtures & aerators.",
              "Rainwater Harvesting (RWH) systems.",
              "Grey-water recycling for gardening.",
              "Dual-flush toilet systems."
            ]} />
          </div>
        </Grid>
      </Section>

      <Section title="Topic 3: Building Audit Procedure" moduleLabel="Module 07">
        <p>A step-by-step technical framework for analyzing building energy performance.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
          {[
            { s: "Collect Data", d: "Utility bills & layouts", i: FileText },
            { s: "Walk-Through", d: "Visual waste detection", i: Search },
            { s: "Measurement", d: "V, I, Lux, & Temp tests", i: Settings },
            { s: "Analysis", d: "Saving & ROI results", i: BarChart3 }
          ].map((item, idx) => (
            <div key={idx} className="bg-app-surface/50 border border-app-border p-4 rounded-xl text-center flex flex-col items-center">
              <item.i className="text-app-accent mb-2 opacity-50" size={24} />
              <h5 className="text-[10px] font-mono font-bold text-app-text uppercase">{item.s}</h5>
              <p className="text-[10px] text-app-muted mt-1">{item.d}</p>
            </div>
          ))}
        </div>

        <InfoBox title="Doctor Analogy" type="viva" tag="Memorize">
          "Factory → Energy Auditor → Diagnosis of Loss → Prescription of Solution." 
          The auditor identifies 'illnesses' like over-lighting or AC leaks and provides technical cures.
        </InfoBox>
      </Section>

      <Section title="Topic 4: General Energy Saving Tips" moduleLabel="Module 07">
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-3 text-sm flex items-center gap-2"><Zap size={16} /> Operational Efficiency</h4>
            <ul className="text-xs space-y-3 text-app-text/70">
              <li className="flex gap-2">
                <span className="text-app-accent">01.</span>
                <span>Maintain <strong>AC at 24–26°C</strong> for optimal comfort vs. cost balance.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-app-accent">02.</span>
                <span>Switch OFF idle appliances (Phantom load management).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-app-accent">03.</span>
                <span>Regular maintenance: Cleaning AC filters & lamp surfaces.</span>
              </li>
            </ul>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-3 text-sm flex items-center gap-2"><Sun size={16} /> Renewable Integration</h4>
            <ul className="text-xs space-y-3 text-app-text/70">
              <li className="flex gap-2">
                <span className="text-app-accent">01.</span>
                <span>Install <strong>Rooftop Solar PV</strong> to reduce grid reliance.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-app-accent">02.</span>
                <span>Use Solar Water Heaters for dorms/canteens.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-app-accent">03.</span>
                <span>Adopt Light & Motion sensors for automated savings.</span>
              </li>
            </ul>
          </div>
        </Grid>
      </Section>
    </UnitLayout>
  );
}
