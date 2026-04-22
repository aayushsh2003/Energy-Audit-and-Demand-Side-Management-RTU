import React from 'react';
import { 
  Lightbulb, 
  Zap, 
  Sun, 
  Eye, 
  Settings, 
  Search, 
  TrendingDown, 
  Layers, 
  Clock, 
  Maximize2 
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit6() {
  return (
    <UnitLayout title="Unit 6: Lighting Systems Audit">
      <Section title="Topic 1: Fundamentals of Lighting & Visual Comfort" moduleLabel="Module 06">
        <p>
          Lighting is more than just visibility; it's about efficient energy-to-light conversion and maintaining visual health. 
          In energy audits, we analyze <strong>Luminous Efficacy</strong> and <strong>Color Quality</strong>.
        </p>

        <Grid>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm">
            <h4 className="font-mono font-bold text-[10px] text-app-accent uppercase mb-3 px-1 border-l-2 border-app-accent">The Lux Metric</h4>
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold text-app-text">1 LUX = 1 lm/m²</span>
              <span className="text-xs text-app-muted italic">Amount of light falling on a surface.</span>
            </div>
            <div className="mt-4 space-y-1 text-[10px] font-mono text-app-text/60">
              <div className="flex justify-between border-b border-app-border/50 pb-1"><span>Corridor:</span><span>~100 Lux</span></div>
              <div className="flex justify-between border-b border-app-border/50 pb-1"><span>Precision Work:</span><span>~1500 Lux</span></div>
            </div>
          </div>
          <InfoBox title="Color Parameters" type="important" tag="Technical">
            <strong>CCT (Correlated Color Temperature):</strong> Measured in Kelvin (K). Warm (3000K) vs Cool (6500K).<br />
            <strong>CRI (Color Rendering Index):</strong> Rank 0-100. How 'true' colors look. Offices need CRI {` > `} 80.
          </InfoBox>
        </Grid>

        <div className="bg-app-surface border border-app-border rounded-xl p-6 my-6">
           <h4 className="text-app-accent font-bold text-xs mb-4">Comparison of Lamp Technologies</h4>
           <div className="overflow-x-auto">
              <table className="w-full text-[10px] border-collapse text-left">
                <thead className="border-b border-app-border bg-app-bg/50">
                  <tr>
                    <th className="p-2">Lamp Type</th>
                    <th className="p-2">Efficacy (lm/W)</th>
                    <th className="p-2">Life (Hours)</th>
                    <th className="p-2">CRI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app-border">
                  <tr><td className="p-2">Incandescent</td><td className="p-2">8 - 18</td><td className="p-2">1,000</td><td className="p-2">100</td></tr>
                  <tr><td className="p-2">CFL</td><td className="p-2">50 - 70</td><td className="p-2">10,000</td><td className="p-2">80</td></tr>
                  <tr><td className="p-2">LED</td><td className="p-2">100+</td><td className="p-2">50,000+</td><td className="p-2">80-90</td></tr>
                  <tr><td className="p-2">High Pressure Sodium (HPS)</td><td className="p-2">100 - 150</td><td className="p-2">20,000</td><td className="p-2">25 (Poor)</td></tr>
                </tbody>
              </table>
           </div>
        </div>
      </Section>

      <Section title="Topic 2: Performance Evaluation (ILER)" moduleLabel="Module 06">
        <p>Auditors don't just judge by brightness; they use the <strong>Installed Load Efficacy Ratio (ILER)</strong>.</p>
        
        <InfoBox title="ILER Formula" type="numerical" tag="Exam Favorite">
           <div className="text-center font-mono py-4 text-app-accent text-lg">
              ILER = (Target Lux × Area) / (Total Watts × Target Luminous Efficacy)
           </div>
           <p className="mt-2 text-xs opacity-60 text-center">
             ILER {` > `} 0.75: <strong>Satisfactory</strong> | ILER {` < `} 0.5: <strong>Need Change</strong>
           </p>
        </InfoBox>

        <Grid>
           <div className="p-5 bg-app-surface border border-app-border rounded-xl">
             <h4 className="text-xs font-bold mb-2">Room Index (RI)</h4>
             <p className="text-[10px] text-app-muted">A geometric factor calculated as: (L × W) / [H × (L + W)]. It helps determine how much light reaches the floor vs walls.</p>
           </div>
           <div className="p-5 bg-app-surface border border-app-border rounded-xl">
             <h4 className="text-xs font-bold mb-2">Maintenance Factor (MF)</h4>
             <p className="text-[10px] text-app-muted">Also called Light Loss Factor (LLF). Accounting for dust on bulbs and aging of diodes. Usually assumed 0.8.</p>
           </div>
        </Grid>
      </Section>

      <Section title="Topic 3: Lighting Distribution & Room Index" moduleLabel="Module 06">
        <p>Designing for effective distribution ensures light is focused where it's needed, reducing waste.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { t: "Direct", d: "90-100% light downwards. High efficacy, used in industrial plants.", i: Maximize2 },
            { t: "Indirect", d: "90-100% light upwards. Best for glare-free ambiance in luxury suites.", i: Layers },
            { t: "Task Lighting", d: "Local illumination for specific work (e.g., watch repair). Best for saving energy.", i: Lightbulb }
          ].map((item, idx) => (
            <div key={idx} className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent transition-all">
              <item.i className="text-app-accent mb-3 opacity-60 group-hover:opacity-100" size={20} />
              <h4 className="font-bold text-sm text-app-text mb-1">{item.t}</h4>
              <p className="text-xs text-app-muted leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Topic 4: Industrial Lighting & Luminaires" moduleLabel="Module 06">
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
             <h4 className="text-xs font-bold text-app-accent mb-4 uppercase tracking-widest">Industrial Categories</h4>
             <List items={[
               "High Bay: For ceilings > 6m. Uses narrow-beam reflectors.",
               "Low Bay: For ceilings < 6m. Uses wider-spread luminaires.",
               "Area Lighting: Large open spaces using high-mast floodlights."
             ]} />
          </div>
          <InfoBox title="Electronic Ballast ⭐" type="important" tag="Technical">
            Operates at high frequency ({` > `} 20kHz). <strong>Electronic ballasts</strong> save ~15W per tube compared to magnetic chokes and provide instant start.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 5: Automation & Control Systems" moduleLabel="Module 06">
        <p>Automation can save 30-60% energy by ensuring light is only present when needed.</p>
        <Grid>
          <div className="p-4 border border-app-border rounded-xl bg-app-surface hover:ring-1 hover:ring-app-accent/30 transition-all">
            <h4 className="text-app-accent font-bold mb-2 flex items-center gap-2"><Clock size={16} /> Timer Control</h4>
            <p className="text-[11px] text-app-muted">Scheduled switching for street lights and parking garages.</p>
          </div>
          <div className="p-4 border border-app-border rounded-xl bg-app-surface hover:ring-1 hover:ring-app-accent/30 transition-all">
            <h4 className="text-app-accent font-bold mb-2 flex items-center gap-2"><Eye size={16} /> Daylight Sensors</h4>
            <p className="text-[11px] text-app-muted">Dims or shuts OFF lights when natural sunlight is sufficient.</p>
          </div>
          <div className="p-4 border border-app-border rounded-xl bg-app-surface hover:ring-1 hover:ring-app-accent/30 transition-all">
            <h4 className="text-app-accent font-bold mb-2 flex items-center gap-2"><Settings size={16} /> Motion Sensors</h4>
            <p className="text-[11px] text-app-muted">Occupancy-based switching. Best for corridors and washrooms.</p>
          </div>
          <div className="p-4 border border-app-border rounded-xl bg-app-surface hover:ring-1 hover:ring-app-accent/30 transition-all">
            <h4 className="text-app-accent font-bold mb-2 flex items-center gap-2"><Zap size={16} /> Dimmers</h4>
            <p className="text-[11px] text-app-muted">Adjusts wattage/intensity according to the activity level.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 6: Systematic Lighting Audit" moduleLabel="Module 06">
        <p>A systematic audit identifies where over-lighting or low-efficiency lamps are wasting capital.</p>
        <div className="bg-app-accent/5 border border-app-accent/20 rounded-xl p-6 my-8">
          <h4 className="text-app-accent font-mono text-[10px] uppercase font-bold mb-6 text-center tracking-widest">Audit Workflow</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { s: "Data Collection", d: "Count lamps, types, & hours." },
              { s: "LUX measurement", d: "Use Lux Meter on desktops." },
              { s: "Gap Analysis", d: "Compare vs ISA standards." },
              { s: "Consumption", d: "kW × hours calculation." },
              { s: "Solutions", d: "LED / Sensor proposals." },
              { s: "Financials", d: "Payback period & ROI." }
            ].map((step, i) => (
              <div key={i} className="relative pl-6 border-l border-app-border">
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-app-accent shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <h5 className="font-bold text-xs text-app-text mb-1">{step.s}</h5>
                <p className="text-[10px] text-app-muted">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Topic 7: Energy Saving Roadmap" moduleLabel="Module 06">
        <Grid>
          <div className="p-5 bg-app-surface border border-app-border rounded-xl border-t-2 border-t-app-accent">
            <h4 className="font-bold text-app-accent mb-4 uppercase text-[10px] tracking-widest flex items-center gap-2">
              <TrendingDown size={14} /> Saving Checklist
            </h4>
            <List items={[
              "Replace Inefficient Lamps → Use LED (Direct 50-80% saving).",
              "Install Electronic Ballasts → Reduces flickering & chokes.",
              "Maximize Natural Daylight → Skylights & Windows.",
              "Regular Maintenance → Cleaning luminaires improves output by 20%."
            ]} />
          </div>
          <InfoBox title="System Optimization" type="viva" tag="Audit Tip">
            "Energy saved = Energy generated." Reducing lighting load also reduces the Heat Load on AC systems, 
            leading to <strong>Secondary Energy Savings</strong>.
          </InfoBox>
        </Grid>
      </Section>
    </UnitLayout>
  );
}
