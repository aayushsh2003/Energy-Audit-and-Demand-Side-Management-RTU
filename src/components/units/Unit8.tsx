import React from 'react';
import { 
  ShieldCheck, 
  TrendingDown, 
  TrendingUp, 
  BarChart3, 
  Activity, 
  Zap, 
  Clock, 
  Settings,
  Cpu,
  Search, 
  Flame, 
  Target, 
  Users,
  Briefcase,
  Factory,
  Home,
  Sprout
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit8() {
  return (
    <UnitLayout title="Unit 8: Demand Side Management (DSM)">
      <Section title="Topic 1: Scope & Objectives of DSM" moduleLabel="Module 08">
        <p>
          Demand Side Management (DSM) is the strategic alternative to building new power plants. 
          Instead of increasing <strong>Supply</strong>, we optimize the <strong>Demand</strong> profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {[
            { t: "Residential", d: "Efficient lighting & home automation.", i: Home },
            { t: "Commercial", d: "HVAC & lighting control in malls/offices.", i: Briefcase },
            { t: "Industrial", d: "Load shifting & motor efficiency.", i: Factory },
            { t: "Agricultural", d: "Regulating irrigation pump schedules.", i: Zap }
          ].map((item, idx) => (
            <div key={idx} className="bg-app-surface border border-app-border p-4 rounded-xl hover:border-app-accent/50 transition-colors">
              <item.i className="text-app-accent mb-2" size={20} />
              <h4 className="font-bold text-xs text-app-text mb-1">{item.t}</h4>
              <p className="text-[10px] text-app-muted leading-tight">{item.d}</p>
            </div>
          ))}
        </div>

        <InfoBox title="Core Objective" type="important">
          Main Goal: To modify the <strong>Load Curve</strong> of the utility to improve system reliability, 
          reduce peak demand, and lower overall electricity costs.
        </InfoBox>
      </Section>

      <Section title="Topic 2: Evolution of the DSM Concept" moduleLabel="Module 08">
        <div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-app-border/50">
          {[
            { s: "Supply-Oriented (Traditional)", d: "Problem solved by building more plants. Result: High cost & pollution.", i: Factory },
            { s: "Energy Crisis Stage", d: "Realization that fossil fuels are finite. Focus moved to conservation.", i: Flame },
            { s: "Conservation Stage", d: "Behavioral focus. Switching lights OFF and using LED.", i: ShieldCheck },
            { s: "Modern DSM Strategy", d: "Smart grids, dynamic tariffs, and integrated utility-consumer planning.", i: Activity }
          ].map((step, i) => (
            <div key={i} className="flex gap-4 relative">
              <div className="w-6 h-6 rounded-full bg-app-surface border-2 border-app-accent flex items-center justify-center shrink-0 z-10">
                <div className="w-2 h-2 rounded-full bg-app-accent" />
              </div>
              <div className="bg-app-surface/30 border border-app-border p-4 rounded-xl flex-1">
                <h5 className="text-xs font-bold text-app-accent mb-1">{step.s}</h5>
                <p className="text-[11px] text-app-muted">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Topic 3: DSM Planning & Implementation" moduleLabel="Module 08">
        <p>A systematic audit identifies where over-lighting or low-efficiency lamps are wasting capital.</p>
        <div className="bg-app-surface border border-app-border rounded-xl p-6 my-8">
          <h4 className="text-app-accent font-mono text-[10px] uppercase font-bold mb-6 text-center tracking-widest">Procedural Workflow</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { s: "1. Data Collection", d: "Load patterns, billing data, and usage history." },
              { s: "2. Load Analysis", d: "Identifying peak vs off-peak consumption times." },
              { s: "3. Opportunity ID", d: "Finding waste areas (e.g., HVAC overuse)." },
              { s: "4. Technique Selection", d: "Choosing Shifting, Clipping, or Conservation." },
              { s: "5. Cost-Benefit", d: "Calculating investment vs annual ROI/Payback." },
              { s: "6. Implementation", d: "Installing VFDs, Sensors, or smart meters." },
              { s: "7. Monitoring", d: "Data logging to verify savings performance." },
              { s: "8. Evaluation", d: "Comparing Before vs After results for fine-tuning." }
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start border-b border-app-border/30 pb-3">
                <span className="text-app-accent font-mono text-xs font-bold leading-none mt-1">{i + 1}.</span>
                <div>
                  <h5 className="text-xs font-bold text-app-text">{step.s}</h5>
                  <p className="text-[10px] text-app-muted">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Topic 4: Load Management Techniques & Hardware" moduleLabel="Module 08">
        <p>Implementation of DSM requires both <strong>Policy</strong> changes and <strong>Technical</strong> hardware.</p>
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-red-500/50">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2 font-mono text-[10px] uppercase">Peak Clipping (Direct Load Control)</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">The utility remotely cycles OFF high-power appliances (ACs, Water Heaters) via radio signals or smart meters during grid emergencies.</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-blue-500/50">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2 font-mono text-[10px] uppercase">Load Shifting (Storage Integration)</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Using <strong>Thermal Energy Storage (TES)</strong> or Battery Banks to store energy at night (cheaper) and use it during day peaks.</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-green-500/50">
            <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2 font-mono text-[10px] uppercase">Valley Filling (EV Charging)</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Developing new off-peak loads, specifically Electric Vehicle (EV) clusters charging between 12 AM and 5 AM.</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-app-accent">
            <h4 className="text-app-accent font-bold mb-2 flex items-center gap-2 font-mono text-[10px] uppercase">Flexible Load Shape</h4>
            <p className="text-[11px] text-app-muted leading-relaxed">Agreement where consumers allow the utility to vary their load dynamically based on grid supply (e.g., wind/solar availability).</p>
          </div>
        </Grid>

        <div className="bg-app-surface border border-app-border rounded-xl p-6 my-6">
           <h4 className="text-app-accent font-bold text-xs mb-4">Hardware of DSM</h4>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-3 border border-app-border/40 rounded-lg">
                 <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center shrink-0"><Cpu size={16} className="text-blue-400" /></div>
                 <div>
                    <h5 className="font-bold text-[11px] text-app-text">Max Demand Controllers</h5>
                    <p className="text-[10px] text-app-muted">Auto-trips non-essential loads when approaching KVA limits.</p>
                 </div>
              </div>
              <div className="flex gap-3 p-3 border border-app-border/40 rounded-lg">
                 <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center shrink-0"><Zap size={16} className="text-emerald-400" /></div>
                 <div>
                    <h5 className="font-bold text-[11px] text-app-text">Capacitor Banks</h5>
                    <p className="text-[10px] text-app-muted">Improves PF, reducing the Apparent Power (KVA) demand from the grid.</p>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      <Section title="Topic 5: Integrated Resource Planning (IRP)" moduleLabel="Module 08">
        <p>IRP is the strategic "Roadmap" where Supply and Demand options are treated equally.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
           <div className="space-y-4">
              <div className="p-5 bg-app-surface border border-app-border rounded-xl">
                 <h4 className="text-xs font-bold text-app-accent mb-2">The Supply Side</h4>
                 <p className="text-[10px] text-app-muted">Building coal plants, gas turbines, or massive solar farms. High CapEx, long lead times.</p>
              </div>
              <div className="p-5 bg-app-surface border border-app-border rounded-xl">
                 <h4 className="text-xs font-bold text-app-accent mb-2">The Demand Side (DSM)</h4>
                 <p className="text-[10px] text-app-muted">Energy efficiency, load shifting, and conservation. Lower CapEx, improves grid durability.</p>
              </div>
           </div>
           <InfoBox title="Why IRP?" type="important" tag="Exam Logic">
             IRP ensures the <strong>Least-Cost</strong> path to reliability. In many cases, saving 1 MW through DSM is 50% cheaper than generating 1 MW from a new turbine.
           </InfoBox>
        </div>
      </Section>

      <Section title="Topic 6: TOD Tariff & Economic Indicators" moduleLabel="Module 08">
        <Grid>
          <InfoBox title="TIme-of-Day (TOD) Tariff ⭐" type="numerical" tag="Dynamic Pricing">
            <div className="space-y-2 py-2">
               <div className="flex justify-between text-[10px] border-b border-white/10"><span>Peak (9AM-9PM):</span><span className="text-red-400">+20% Premium</span></div>
               <div className="flex justify-between text-[10px] border-b border-white/10"><span>Off-Peak (10PM-6AM):</span><span className="text-emerald-400">-15% Discount</span></div>
            </div>
            <p className="text-[9px] text-app-text/60 mt-2 italic">Encourages industrial users to move energy-intensive processes to the night shift.</p>
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-3 text-xs uppercase tracking-widest">Pricing Strategies</h4>
            <ul className="space-y-2 text-xs">
              <li>- <span className="text-app-text font-bold">Interruptible Tariff:</span> Discounts for users who allow utility-controlled shutdowns during peaks.</li>
              <li>- <span className="text-app-text font-bold">Real-Time Pricing:</span> Rates change every 15 mins based on spot market prices.</li>
              <li>- <span className="text-app-text font-bold">Inverted Block Rates:</span> Unit rate increases as consumption increases (Disincentivizes waste).</li>
            </ul>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 7: Implementation Barriers & Solutions" moduleLabel="Module 08">
        <div className="bg-app-surface border border-app-border rounded-xl p-8 relative overflow-hidden">
           <Grid>
             <div>
                <h4 className="font-bold text-app-accent mb-4 uppercase text-[10px] tracking-widest flex items-center gap-2">
                  <Users size={14} /> Major Barriers
                </h4>
                <List items={[
                  "Market Barriers: Lack of standard rating for devices.",
                  "Financial: High initial cost with slow perceived payback.",
                  "Regulatory: Utilities lose revenue if users save too much.",
                  "Infrastructure: Lack of digital two-way smart meters."
                ]} />
             </div>
             <div className="bg-app-bg/50 p-5 rounded-xl border border-app-border">
                <h4 className="font-bold text-app-text mb-3 text-xs">Bridging the Gap</h4>
                <p className="text-[10px] text-app-muted leading-relaxed">
                   <strong>Standardization:</strong> Mandatory BEE labels.<br />
                   <strong>ESCO Models:</strong> Third-party companies that invest in efficiency and take a share of the savings as payment.
                </p>
             </div>
           </Grid>
        </div>
      </Section>

      <Section title="Topic 8: DSM Environment & Grid Sustainability" moduleLabel="Module 08">
        <div className="bg-app-surface border border-app-border p-8 rounded-xl flex flex-col items-center text-center">
            <Sprout size={48} className="text-app-accent mb-4 opacity-50" />
            <h3 className="text-xl font-display font-bold text-app-text mb-2">Sustainable Grid Stability</h3>
            <p className="text-xs text-app-text/70 leading-relaxed max-w-2xl">
              Reducing 1 unit at source is better than generating 1.2 units. 
              DSM leads to lower CO₂ emissions, less fossil fuel combustion, 
              and enables the grid to handle the intermittent nature of <strong>Wind and Solar</strong> without crashing. 
              <strong>Distributed Generation</strong> works best when Demand Side is active.
            </p>
        </div>
      </Section>
    </UnitLayout>
  );
}
