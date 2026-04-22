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

      <Section title="Topic 3: Motor Efficiency & Loss Analysis" moduleLabel="Module 05">
        <p>A motor's efficiency is not constant; it depends heavily on the <strong>Percentage Loading</strong>.</p>
        <Grid>
          <InfoBox title="Efficiency Formula" type="numerical" tag="Exam Check">
            <div className="text-center font-mono py-2 text-app-accent text-lg">
              η = (Output / Input) × 100
            </div>
            <p className="mt-2 text-xs opacity-60 italic text-center">Output: Mechanical (W) | Input: Electrical (V×I×√3×PF)</p>
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-3 flex items-center gap-2 uppercase text-[10px] tracking-widest">The "Loss" Breakdown</h4>
            <ul className="text-xs space-y-2 text-app-text/70">
              <li><span className="font-bold text-app-text">Fixed Losses:</span> Iron/Core losses (Hysteresis & Eddy) + Friction + Windage. Constant regardless of load.</li>
              <li><span className="font-bold text-app-text">Variable Losses:</span> Copper Loss (I²R). It increase with the square of the current.</li>
              <li><span className="font-bold text-app-text">Stray Losses:</span> Leakage fluxes, usually assumed ~1% of input.</li>
            </ul>
          </div>
        </Grid>

        <div className="bg-app-surface border border-app-border rounded-xl p-8 my-8">
           <h4 className="text-app-accent font-mono text-[10px] uppercase mb-4">The Loading Sweet Spot</h4>
           <p className="text-xs text-app-muted mb-6">Efficiency in Induction Motors peaks between <strong>75% to 80% load</strong>. Below 50% load, the efficiency drops sharply while the Power Factor degrades significantly.</p>
           <div className="h-4 w-full bg-app-bg border border-app-border rounded-full overflow-hidden flex">
              <div className="h-full bg-red-500/20 w-1/2 flex items-center justify-center text-[8px] font-bold">POOR (OVERSIZED)</div>
              <div className="h-full bg-emerald-500/40 w-1/4 flex items-center justify-center text-[8px] font-bold">PEAK η</div>
              <div className="h-full bg-amber-500/20 w-1/4 flex items-center justify-center text-[8px] font-bold">HIGH HEAT</div>
           </div>
           <div className="flex justify-between mt-2 text-[10px] font-mono text-app-muted">
              <span>0%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
           </div>
        </div>
      </Section>

      <Section title="Topic 4: Audit Methodology - Loading & Speed" moduleLabel="Module 05">
        <p>In the field, an auditor cannot easily measure "Mechanical Output". We use indirect methods instead.</p>
        
        <Grid>
           <div className="bg-app-surface border border-app-border p-5 rounded-xl">
              <h4 className="text-sm font-bold text-app-text mb-3 flex items-center gap-2">
                 <Activity size={16} className="text-blue-400" /> Input Power Method
              </h4>
              <p className="text-[11px] text-app-muted leading-relaxed">
                 Measure Input Power (Pi) using a Power Analyzer. <br />
                 <strong>Loading % = (Pi / P_rated) × η_rated × 100 </strong><br />
                 This is the most accurate field method for auditors.
              </p>
           </div>
           <div className="bg-app-surface border border-app-border p-5 rounded-xl">
              <h4 className="text-sm font-bold text-app-text mb-3 flex items-center gap-2">
                 <Settings size={16} className="text-orange-400" /> Slip Method
              </h4>
              <p className="text-[11px] text-app-muted leading-relaxed">
                 Measure Actual Speed (N) using a Stroboscope.<br />
                 <strong>Loading % = (Slip_actual / Slip_rated) × 100 </strong><br />
                 Where Slip = (Sync_Speed - Actual_Speed).
              </p>
           </div>
        </Grid>

        <InfoBox title="Rewinding Impact" type="important" tag="Audit Alert">
           Poor motor rewinding can reduce efficiency by <strong>1.5% to 5%</strong> per rewind. If a motor has been rewound multiple times, it is often more economical to replace it with a new IE3 motor than to keep running it.
        </InfoBox>
      </Section>

      <Section title="Topic 5: BEE Motor Standards (IE Classes)" moduleLabel="Module 05">
        <p>BEE and International standards classify motor efficiency into "IE" (International Efficiency) classes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
           {[
             { c: "IE1", t: "Standard Efficiency", d: "Phase out in many regions." },
             { c: "IE2", t: "High Efficiency", d: "Minimum for most industrial apps." },
             { c: "IE3", t: "Premium Efficiency", d: "Mandatory for most new industry motors." },
             { c: "IE4", t: "Super Premium", d: "State of the art (Permanent Magnet)." }
           ].map((ie, i) => (
             <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between ${i >= 2 ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-app-border'}`}>
                <h4 className="font-bold text-lg text-app-text">{ie.c}</h4>
                <div className="text-[10px] text-app-muted uppercase font-bold tracking-tighter mb-2">{ie.t}</div>
                <p className="text-[10px] opacity-70 leading-tight">{ie.d}</p>
             </div>
           ))}
        </div>
      </Section>

      <Section title="Topic 6: Energy Efficient Starters" moduleLabel="Module 05">
        <p>Starting a motor requires 6-8 times the rated current, leading to voltage dips and energy spikes.</p>
        <Grid>
           <div className="p-4 bg-app-surface border border-app-border rounded-xl">
              <h4 className="text-xs font-bold text-app-text mb-2">1. Soft Starters</h4>
              <p className="text-[10px] text-app-muted">Uses thyristors to ramp up voltage smoothly. Avoids mechanical and electrical stress.</p>
           </div>
           <div className="p-4 bg-app-surface border border-app-border rounded-xl">
              <h4 className="text-xs font-bold text-app-text mb-2">2. VFD Starters</h4>
              <p className="text-[10px] text-app-muted">The ultimate starter. Provides 100% torque at 0 speed without high current drawing.</p>
           </div>
           <div className="p-4 bg-app-surface border border-app-border rounded-xl">
              <h4 className="text-xs font-bold text-app-text mb-2">3. Automatic Delta-Star</h4>
              <p className="text-[10px] text-app-muted">If a motor is running {` < `} 50% load, the controller shifts it from Delta to Star to reduce copper losses.</p>
           </div>
        </Grid>
      </Section>

      <Section title="Topic 7: Predictive Maintenance in Motor Audits" moduleLabel="Module 05">
        <p>Auditors use high-tech non-contact tools to find hidden inefficiencies before failure.</p>
        <Grid>
           <div className="bg-app-bg/50 border border-app-border p-5 rounded-xl">
              <h4 className="text-xs font-bold text-app-accent mb-3 flex items-center gap-2">
                 <ShieldCheck size={16} /> Thermal Imaging
              </h4>
              <p className="text-[10px] text-app-muted font-mono leading-relaxed">
                 DETECTION: Hot spots in terminals (loose connections) or asymmetrical heating in the stator (shorted windings).
              </p>
           </div>
           <div className="bg-app-bg/50 border border-app-border p-5 rounded-xl">
              <h4 className="text-xs font-bold text-app-accent mb-3 flex items-center gap-2">
                 <Activity size={16} /> Vibration Analysis
              </h4>
              <p className="text-[10px] text-app-muted font-mono leading-relaxed">
                 DETECTION: Misalignment or bearing wear. High vibration translates directly to wasted energy and reduced life.
              </p>
           </div>
        </Grid>
      </Section>
      <Section title="Topic 8: Energy Conservation Measures (ECM)" moduleLabel="Module 05">
        <p>How do we actually save money on motors? It starts with <strong>Optimization</strong> and <strong>Maintenance</strong>.</p>
        <Grid>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">1. Proper Motor Sizing</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Avoid oversizing. Efficiency drops sharply below 50% load. Aim for 70-90% loading. Use 'Downsizing' where possible.</p>
          </div>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">2. Use Efficient Motors (IE3/IE4)</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Energy Efficient motors use better steel and windings to reduce Copper/Iron losses. Payback is usually {` < `} 2 years.</p>
          </div>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">3. Speed Control (VFD)</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Controlling speed based on load requirement can save 20-60% energy in centrifugal loads (Pumps/Fans).</p>
          </div>
          <div className="bg-app-surface border-t-2 border-t-emerald-500/50 border border-app-border p-5 rounded-xl">
            <h4 className="font-bold text-app-text mb-2 text-sm">4. Voltage Optimization</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Ensure balanced supply voltage. Unbalance {` > `} 1% increases losses and heating significantly.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 9: BEE Star Rating & Labelling" moduleLabel="Module 05">
        <div className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-app-accent/10 -rotate-12">
            <Award size={120} />
          </div>
          
          <h3 className="text-xl font-display font-bold text-app-text mb-4">The Star Labelling Framework</h3>
          <p className="text-sm text-app-text/70 mb-6 max-w-2xl">
            Established by the <strong>Bureau of Energy Efficiency (BEE)</strong>, Star Labelling allows customers to quickly identify the most efficient motors and appliances.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[1, 2, 3, 4, 5].map(star => (
              <div key={star} className={`w-10 h-10 rounded-lg flex items-center justify-center ${star === 5 ? 'bg-app-accent text-app-bg shadow-lg shadow-app-accent/20' : 'border border-app-border text-app-muted'}`}>
                <ChevronRight size={18} className={star === 5 ? 'rotate-90' : ''} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-app-bg/50 p-5 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-3">Economic Impact</h4>
              <p className="text-[11px] text-app-muted italic leading-relaxed">
                "A 5-star motor has a premium price (~20-25% more) but the electricity savings typically recover this extra cost within 1,500 to 2,000 running hours."
              </p>
            </div>
            <div className="bg-app-bg/50 p-5 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-3">Policy & Compliance</h4>
              <p className="text-[11px] text-app-muted italic leading-relaxed">
                The <strong>S&L (Standard and Labelling)</strong> program is mandatory for motors. It forces manufacturers to phase out inefficient designs, upgrading the national average efficiency.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </UnitLayout>
  );
}
