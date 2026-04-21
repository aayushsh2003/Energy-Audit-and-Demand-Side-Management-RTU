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
      <Section title="Topic 1: Fundamentals of Lighting" moduleLabel="Module 06">
        <p>
          Lighting is more than just visibility; it's about efficient energy-to-light conversion. 
          In energy audits, we analyze <strong>Lumen per Watt</strong> efficacy to reduce wastage.
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
              <div className="flex justify-between border-b border-app-border/50 pb-1"><span>Study/Lab:</span><span>~300-500 Lux</span></div>
            </div>
          </div>
          <InfoBox title="Luminous Efficacy" type="numerical" tag="Efficiency">
            <div className="text-center py-2">
              <span className="text-app-accent font-mono text-lg font-bold">lm / Watt</span>
            </div>
            <p className="text-xs text-app-text/70">
              LED (100-150 lm/W) vs Old Bulbs (10-15 lm/W). 
              <strong> LED provides 10x more light for the same power.</strong>
            </p>
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 2: Lighting Distribution Systems" moduleLabel="Module 06">
        <p>Classification based on how light is distributed and reflected in a space.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { t: "Direct", d: "Light falls directly on work area. Max efficiency, used in factories.", i: Maximize2 },
            { t: "Indirect", d: "Light reflects off ceiling/walls. Low glare, used in hotels/homes.", i: Layers },
            { t: "General", d: "Uniform lighting across area. Used in offices and classrooms.", i: Lightbulb }
          ].map((item, idx) => (
            <div key={idx} className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent transition-all">
              <item.i className="text-app-accent mb-3 opacity-60 group-hover:opacity-100" size={20} />
              <h4 className="font-bold text-sm text-app-text mb-1">{item.t} Lighting</h4>
              <p className="text-xs text-app-muted leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Topic 3: Components & Luminaires" moduleLabel="Module 06">
        <Grid>
          <InfoBox title="Electronic Ballast ⭐" type="important" tag="Technical">
            Controls current in lamps. <strong>Electronic ballasts</strong> are much more efficient than old magnetic ones, 
            reducing flickering and internal power loss.
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-mono text-[10px] uppercase font-bold mb-4 tracking-tighter">System Components</h4>
            <ul className="space-y-2 text-xs">
              <li>- <span className="text-app-text font-bold">Luminaire:</span> The complete light fitting unit.</li>
              <li>- <span className="text-app-text font-bold">Reflector:</span> Directs light to prevent dispersion waste.</li>
              <li>- <span className="text-app-text font-bold">Louvres:</span> Slats that reduce glare (essential for IT labs).</li>
            </ul>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 4: Lighting Control Systems" moduleLabel="Module 06">
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

      <Section title="Topic 5: Lighting System Audit" moduleLabel="Module 06">
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

      <Section title="Topic 6: Energy Saving Opportunities" moduleLabel="Module 06">
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
