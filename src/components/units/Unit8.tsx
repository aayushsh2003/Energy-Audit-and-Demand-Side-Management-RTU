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

      <Section title="Topic 4: Load Management Strategies" moduleLabel="Module 08">
        <p>Instead of reducing total units, we restructure the <strong>timing</strong> of electrical load.</p>
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-red-500/50">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><TrendingDown size={14} /> Peak Clipping</h4>
            <p className="text-xs text-app-muted">Reducing load during peaks by turning off non-essential systems. <strong>Result: Prevents grid overload.</strong></p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-blue-500/50">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2"><Clock size={14} /> Load Shifting</h4>
            <p className="text-xs text-app-muted">Moving peak loads (e.g., manufacturing) to off-peak night hours. <strong>Result: Flat load curve.</strong></p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-green-500/50">
            <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2"><TrendingUp size={14} /> Valley Filling</h4>
            <p className="text-xs text-app-muted">Increasing load during low-demand periods (e.g., EV charging at midnight). <strong>Result: Efficient plant use.</strong></p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-app-accent">
            <h4 className="text-app-accent font-bold mb-2 flex items-center gap-2"><Target size={14} /> Strategic Conservation</h4>
            <p className="text-xs text-app-muted">Total load reduction via high-efficiency devices. <strong>Result: Lower permanent demand.</strong></p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 5: Tariff Options for DSM" moduleLabel="Module 08">
        <Grid>
          <InfoBox title="TIme-of-Day (TOD) Tariff ⭐" type="important">
            Pricing varies by time. High during peaks to push consumers toward <strong>Off-Peak</strong> (night) usage where rates are lower.
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-3 text-xs uppercase tracking-widest">Pricing Strategies</h4>
            <ul className="space-y-2 text-xs">
              <li>- <span className="text-app-text font-bold">Interruptible Tariff:</span> Discounts given to users who agree to pause load on utility request.</li>
              <li>- <span className="text-app-text font-bold">Demand-based:</span> Charging based on the Maximum Demand (kVA) spike.</li>
              <li>- <span className="text-app-text font-bold">Seasonal:</span> Higher rates in Summer peaks (high AC) vs Winter.</li>
            </ul>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 6: Barriers & Environment" moduleLabel="Module 08">
        <Grid>
          <div className="p-5 bg-app-surface border border-app-border rounded-xl">
            <h4 className="font-bold text-app-accent mb-4 uppercase text-[10px] tracking-widest flex items-center gap-2">
              <Users size={14} /> Implementation Barriers
            </h4>
            <List items={[
              "High Initial Cost: Efficient devices are expensive.",
              "Lack of Awareness: Users don't see the direct ROI.",
              "Behavioral Resistance: Comfort over conservation.",
              "Technical issues: Lack of smart metering infrastructure."
            ]} />
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl flex flex-col justify-center items-center text-center">
            <Sprout size={48} className="text-app-accent mb-4 opacity-50" />
            <h4 className="font-bold text-app-text mb-2">DSM & Environment</h4>
            <p className="text-xs text-app-text/70 leading-relaxed">
              Reducing 1 unit at source is better than generating 1.2 units. 
              DSM leads to lower CO₂ emissions, less fossil fuel combustion, 
              and <strong>Sustainable Grid Stability</strong>.
            </p>
          </div>
        </Grid>
      </Section>
    </UnitLayout>
  );
}
