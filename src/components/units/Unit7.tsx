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
  ArrowUpRight,
  Layers
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit7() {
  return (
    <UnitLayout title="Unit 7: Buildings & Water Audit">
      <Section title="Topic 1: Energy Benchmarking & ECBC" moduleLabel="Module 07">
        <p>
          Energy efficiency in buildings starts with standards. The <strong>ECBC (Energy Conservation Building Code)</strong> by BEE defines the minimum efficiency requirements for commercial buildings.
        </p>
        <Grid>
           <InfoBox title="EPI - Energy Performance Index" type="numerical" tag="Primary Metric">
             <div className="text-center font-mono py-2 text-app-accent text-lg">
               EPI = Annual Energy Use (kWh) / Built Area (m²)
             </div>
             <p className="text-xs text-app-muted italic">Lower EPI = More Efficient Building.</p>
           </InfoBox>
           <div className="bg-app-surface border border-app-border p-5 rounded-xl">
             <h4 className="text-xs font-bold text-app-text mb-2 uppercase">ECBC Compliance Tiers</h4>
             <List items={[
               "ECBC: Basic compliance (~25% more efficient)",
               "ECBC+: Premium efficiency (~35% more efficient)",
               "Super ECBC: Net Zero ready (~50% more efficient)"
             ]} />
           </div>
        </Grid>
      </Section>

      <Section title="Topic 2: Building Envelope & U-Values" moduleLabel="Module 07">
        <p>The "Shell" of the building controls 60-70% of the cooling load. In audits, we measure the <strong>Heat Transfer Coefficient (U-value)</strong>.</p>
        
        <div className="bg-app-surface border border-app-border rounded-xl p-8 my-8">
           <h4 className="text-app-accent font-mono text-[10px] uppercase mb-4 tracking-widest">Heat Transfer Physics</h4>
           <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-4 bg-app-bg border border-app-border rounded-lg">
                 <h5 className="font-bold text-xs text-app-text mb-2">Conduction (Walls/Roof)</h5>
                 <p className="text-xs font-mono text-app-accent">Q = U × A × ΔT</p>
                 <p className="text-[10px] text-app-muted mt-2">Where Q is heat flux, A is area, and ΔT is temp difference. Goal: MINIMIZE 'U'.</p>
              </div>
              <div className="flex-1 p-4 bg-app-bg border border-app-border rounded-lg">
                 <h5 className="font-bold text-xs text-app-text mb-2">Radiation (Fenestration)</h5>
                 <p className="text-[10px] text-app-muted leading-relaxed">Through glass. Controlled by <strong>SHGC (Solar Heat Gain Coefficient)</strong>. Double glazing reduces this significantly.</p>
              </div>
           </div>
        </div>

        <Grid>
           <div className="bg-app-surface border border-app-border p-5 rounded-xl">
             <h4 className="text-app-text font-bold text-xs mb-3">Thermal Mass</h4>
             <p className="text-[11px] text-app-muted leading-relaxed">Materials like concrete/brick act as thermal batteries, absorbing heat during day and releasing it at night, flattening the AC demand curve.</p>
           </div>
           <InfoBox title="U-Value Comparison" type="example" tag="Audit Tip">
             Single Glass: ~5.8 W/m²K<br />
             Double Glazed: ~2.8 W/m²K<br />
             <strong>Lower is Better</strong> for insulation.
           </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 3: Cooling Load Factors" moduleLabel="Module 07">
        <p>The AC system size (Tonnage) is determined by summing all heat sources.</p>
        <Grid>
          <div className="bg-app-surface/50 border border-app-border p-5 rounded-xl">
             <h4 className="text-xs font-bold text-app-accent mb-3 uppercase font-mono tracking-tighter">Sensible Heat</h4>
             <ul className="text-[10px] space-y-2 text-app-text/70">
                <li>• Transmission through walls/roof.</li>
                <li>• Heat from lighting and computers.</li>
                <li>• Sunlight through windows.</li>
                <li>• Occupant body heat (Sensible aspect).</li>
             </ul>
          </div>
          <div className="bg-app-surface/50 border border-app-border p-5 rounded-xl">
             <h4 className="text-xs font-bold text-app-accent mb-3 uppercase font-mono tracking-tighter">Latent Heat (Moisture)</h4>
             <ul className="text-[10px] space-y-2 text-app-text/70">
                <li>• Infiltration of humid air.</li>
                <li>• Moisture from human breathing/sweat.</li>
                <li>• Dampness in materials/walls.</li>
                <li>• High Latent load = More energy for Dehumidification.</li>
             </ul>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 4: Orientation & Shading" moduleLabel="Module 07">
        <p>Strategic placement provides "Free Cooling" and "Free Lighting".</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
           <div className="p-5 border border-app-border bg-app-surface rounded-xl">
              <Compass className="text-app-accent mb-2" size={18} />
              <h4 className="font-bold text-xs mb-1">Building Axis</h4>
              <p className="text-[10px] text-app-muted">North-South orientation is ideal in tropics to minimize harsh East/West solar gains.</p>
           </div>
           <div className="p-5 border border-app-border bg-app-surface rounded-xl">
              <Sun className="text-app-accent mb-2" size={18} />
              <h4 className="font-bold text-xs mb-1">External Shading</h4>
              <p className="text-[10px] text-app-muted">Chajjas, overhangs, and vertical fins block heat before it hits the glass.</p>
           </div>
           <div className="p-5 border border-app-border bg-app-surface rounded-xl">
              <Layers className="text-app-accent mb-2" size={18} />
              <h4 className="font-bold text-xs mb-1">WWR %</h4>
              <p className="text-[10px] text-app-muted"><strong>Window to Wall Ratio.</strong> Aiming for 30-40%. Too much glass = High AC cost. Too little = High Light cost.</p>
           </div>
        </div>
      </Section>

      <Section title="Topic 5: Water Quality & Audit Metrics" moduleLabel="Module 07">
        <p>A water audit is about "Mass Balance". Total In = Total Out + Storage + Losses.</p>
        
        <Grid>
           <InfoBox title="Water Balance Equation" type="numerical" tag="Methodology">
             <div className="text-center font-mono py-2 text-app-accent text-lg">
               Q_supply = Q_used + Q_lost
             </div>
             <p className="text-[10px] text-app-muted text-center italic">Q_lost includes leaks, evapo-transpiration, and illegal taps.</p>
           </InfoBox>
           <div className="bg-app-surface border border-app-border p-5 rounded-xl">
             <h4 className="text-xs font-bold text-app-text mb-3">Key Audit Tools</h4>
             <List items={[
               "Ultrasonic Flow Meters: Non-contact pipe measurement.",
               "Dye Testing: To find hidden sewer-line leaks.",
               "Pressure Gauges: To check for excess pressure leading to waste."
             ]} />
           </div>
        </Grid>
      </Section>

      <Section title="Topic 6: Water Conservation & Recycling" moduleLabel="Module 07">
         <Grid>
            <div className="bg-app-bg/50 border border-app-border p-5 rounded-xl">
               <h4 className="text-app-accent font-bold text-xs mb-4 uppercase">RWH (Rainwater Harvesting)</h4>
               <p className="text-[10px] text-app-muted leading-relaxed">
                 Collecting runoff from roofs. Filtration → Storage → Groundwater Recharge. Reduces dependency on municipal/borewell water by 30-40%.
               </p>
            </div>
            <div className="bg-app-bg/50 border border-app-border p-5 rounded-xl">
               <h4 className="text-app-accent font-bold text-xs mb-4 uppercase">STP / ETP Integration</h4>
               <p className="text-[10px] text-app-muted leading-relaxed">
                 <strong>Sewage Treatment Plants</strong>. Recycling 'Grey Water' from baths/basins for toilet flushing and cooling tower make-up water. <strong>Saves 50% fresh water.</strong>
               </p>
            </div>
         </Grid>
      </Section>

      <Section title="Topic 7: Green Building Ratings (LEED/GRIHA)" moduleLabel="Module 07">
        <p>Certification provides market value and verifies efficiency claims.</p>
        <div className="flex flex-col md:flex-row gap-6 my-6">
           <div className="flex-1 p-6 bg-app-surface border border-app-border rounded-xl border-l-4 border-l-amber-500/50">
              <h4 className="font-bold text-app-text mb-2">LEED (International)</h4>
              <p className="text-xs text-app-muted leading-relaxed">Categorized into Certified, Silver, Gold, and Platinum. Focuses on Site, Water, Energy, and Materials.</p>
           </div>
           <div className="flex-1 p-6 bg-app-surface border border-app-border rounded-xl border-l-4 border-l-emerald-500/50">
              <h4 className="font-bold text-app-text mb-2">GRIHA (Indian Context)</h4>
              <p className="text-xs text-app-muted leading-relaxed">BEE's rating system optimized for Indian climate conditions and resource availability. 1 to 5 Star ratings.</p>
           </div>
        </div>
      </Section>

      <Section title="Topic 8: HVAC Audit & Optimization" moduleLabel="Module 07">
         <p>HVAC consumes 40-50% of building energy. Optimization is critical.</p>
         <Grid>
            <div className="p-4 bg-app-surface border border-app-border rounded-xl">
               <h4 className="text-[10px] font-bold text-app-accent mb-2 uppercase">Chiller COP</h4>
               <p className="text-[10px] text-app-muted italic">"Coefficient of Performance". Goal: Maximize heat removed per Watt of electricity input.</p>
            </div>
            <div className="p-4 bg-app-surface border border-app-border rounded-xl">
               <h4 className="text-[10px] font-bold text-app-accent mb-2 uppercase">Variable Flow</h4>
               <p className="text-[10px] text-app-muted italic">Use <strong>VFDs</strong> on secondary chilled water pumps and AHU fans to track thermal demand.</p>
            </div>
         </Grid>
         <InfoBox title="Comfort Checklist" type="important">
           1. Set AC at 24°C.<br />
           2. Ensure weather-stripping on doors.<br />
           3. Regular cleaning of cooling tower fins to improve heat rejection.
         </InfoBox>
      </Section>
    </UnitLayout>
  );
}
