import React from 'react';
import { 
  Zap, 
  Settings, 
  Activity, 
  ShieldCheck, 
  Boxes, 
  Cpu, 
  BarChart3, 
  Award,
  ChevronRight,
  Target,
  FileText
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit5() {
  return (
    <UnitLayout title="Unit 5: Energy Audit of Motors">
      <Section title="Topic 1: Classification of Motors" moduleLabel="Module 05">
        <p>
          Electric Motors are the "workhorses" of the industry, converting electrical energy into mechanical rotation. 
          They are the single largest consumer of electricity in a typical industrial facility.
        </p>

        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent transition-colors">
            <h4 className="text-app-accent font-bold mb-3 flex items-center gap-2">
              <Zap size={18} /> AC Motors ⭐
            </h4>
            <p className="text-xs text-app-text/70 leading-relaxed">
              <strong>90% of Industrial usage.</strong> Primarily 3-phase Induction motors due to their simple construction, reliability, and low cost.
            </p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent/40 transition-colors">
            <h4 className="text-app-muted font-bold mb-3 flex items-center gap-2">
              <Boxes size={18} /> DC Motors
            </h4>
            <p className="text-xs text-app-text/60 leading-relaxed italic">
              Historically used for speed control, but largely replaced by AC motors with VFDs in modern plants.
            </p>
          </div>
        </Grid>

        <InfoBox title="Why Motors Matter?" type="important" tag="Audit Logic">
          A motor running 24/7 with even a 10% efficiency loss represents a massive annual expense. 
          Small efficiency gains across many motors often result in the highest monetary savings in an audit.
        </InfoBox>
      </Section>

      <Section title="Topic 2: Nameplate Parameters" moduleLabel="Module 05">
        <p>The nameplate is the first document an auditor reads. It defines the <strong>Safe & Efficient</strong> operating region.</p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {[
            { label: "Rated Power", value: "kW / HP", icon: Target },
            { label: "Voltage", value: "415V (3φ)", icon: Zap },
            { label: "Current", value: "Rated Amps", icon: Activity },
            { label: "Speed", value: "RPM", icon: Settings },
            { label: "Power Factor", value: "cos φ", icon: BarChart3 },
            { label: "Insulation", value: "Class F/H", icon: ShieldCheck },
            { label: "Efficiency", value: "η %", icon: Cpu },
            { label: "Duty Cycle", value: "S1 - S9", icon: FileText }
          ].map((param, idx) => (
            <div key={idx} className="bg-app-surface/50 border border-app-border rounded-lg p-3 hover:bg-app-accent/5 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <param.icon size={12} className="text-app-accent opacity-60" />
                <span className="text-[10px] font-mono font-bold text-app-muted uppercase tracking-wider">{param.label}</span>
              </div>
              <div className="text-xs font-bold text-app-text">{param.value}</div>
            </div>
          ))}
        </div>

        <InfoBox title="Insulation Classes" type="viva" tag="Temp Limits">
          <strong>Class A:</strong> 105°C | <strong>Class B:</strong> 130°C | <strong>Class F:</strong> 155°C.<br />
          Higher class insulation allows the motor to tolerate more heat and last longer under heavy load.
        </InfoBox>
      </Section>

      <Section title="Topic 3: Efficiency & Losses" moduleLabel="Module 05">
        <Grid>
          <InfoBox title="Efficiency Formula" type="numerical" tag="Exam Check">
            <div className="text-center font-mono py-2 text-app-accent text-lg">
              η = (Output / Input) × 100
            </div>
            <p className="mt-2 text-xs opacity-60 italic">Output: Mechanical Power | Input: Electrical Power</p>
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-3 flex items-center gap-2 uppercase text-[10px] tracking-widest">The "Loss" Breakdown</h4>
            <ul className="text-xs space-y-2 text-app-text/70">
              <li><span className="font-bold text-app-text">Copper Loss:</span> I²R heating in windings.</li>
              <li><span className="font-bold text-app-text">Iron Loss:</span> Hysteresis & Eddy currents in the core.</li>
              <li><span className="font-bold text-app-text">Mechanical Loss:</span> Bearing friction & Windage.</li>
              <li><span className="font-bold text-app-text">Stray Loss:</span> Minor secondary leakage.</li>
            </ul>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 4: Energy Conservation" moduleLabel="Module 05">
        <p>How do we actually save money on motors? It starts with <strong>Optimization</strong>.</p>
        <Grid>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">1. Proper Motor Sizing</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Avoid oversizing. Efficiency drops sharply below 50% load. Aim for 70-90% loading.</p>
          </div>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">2. Use Efficient Motors (IE3/IE4)</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Energy Efficient motors use better steel and windings to reduce Copper/Iron losses.</p>
          </div>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">3. Speed Control (VFD)</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Controlling speed based on load requirement can save 20-60% energy in centrifugal loads.</p>
          </div>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">4. Load Shifting & Shutdown</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Turn off idle motors during breaks. Shift usage to off-peak TOD tariff hours.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 5: BEE Star Rating & Labelling" moduleLabel="Module 05">
        <div className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-app-accent/10 -rotate-12">
            <Award size={120} />
          </div>
          
          <h3 className="text-xl font-display font-bold text-app-text mb-4">The BEE Framework</h3>
          <p className="text-sm text-app-text/70 mb-6 max-w-2xl">
            Established by the <strong>Bureau of Energy Efficiency (BEE)</strong>, Star Labelling allows customers to quickly identify the most efficient appliances.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[1, 2, 3, 4, 5].map(star => (
              <div key={star} className={`w-8 h-8 rounded flex items-center justify-center ${star === 5 ? 'bg-app-accent text-app-bg' : 'border border-app-border text-app-muted'}`}>
                <ChevronRight size={14} className={star === 5 ? 'rotate-90' : ''} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-app-bg/50 p-4 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-2">Benefit to Consumer</h4>
              <p className="text-[11px] text-app-muted italic">"A 5-star AC has a higher initial cost but yields massive savings on monthly electricity bills compared to a 1st or 2nd star unit."</p>
            </div>
            <div className="bg-app-bg/50 p-4 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-2">Benefit to Industry</h4>
              <p className="text-[11px] text-app-muted italic">Mandatory reporting for 'Designated Consumers' ensures that heavy industries adhere to efficiency benchmarks (PAT Scheme).</p>
            </div>
          </div>
        </div>
      </Section>
    </UnitLayout>
  );
}
