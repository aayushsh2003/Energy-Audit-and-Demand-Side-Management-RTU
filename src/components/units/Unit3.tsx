import React from 'react';
import { 
  Zap, 
  Activity, 
  Thermometer, 
  Lightbulb, 
  RotateCw, 
  Database, 
  Flame,
  Binary,
  Target,
  Search,
  Cpu,
  BarChart3,
  Camera
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit3() {
  return (
    <UnitLayout title="Unit 3: Survey Instrumentation">
      <Section title="Topic 1: Electrical Measurement" moduleLabel="Module 03">
        <p>
          This is the most critical instrument group. Since 60-70% of energy audits focus on electricity, 
          measuring parameters like <strong>Voltage, Current, Power, and Power Factor</strong> is essential.
        </p>
        
        <div className="overflow-x-auto my-8 border border-app-border rounded-xl">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-app-surface border-b border-app-border">
                <th className="p-3 font-mono text-[10px] uppercase text-app-accent">Parameter</th>
                <th className="p-3 font-mono text-[10px] uppercase text-app-accent">Symbol/Unit</th>
                <th className="p-3 font-mono text-[10px] uppercase text-app-accent">Audit Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app-border">
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Voltage</td>
                <td className="p-3 text-app-muted">V (Volts)</td>
                <td className="p-3 text-app-text/70">Check supply health & drop conditions</td>
              </tr>
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Current</td>
                <td className="p-3 text-app-muted">A (Amps)</td>
                <td className="p-3 text-app-text/70">Check equipment load (overload/underload)</td>
              </tr>
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Power</td>
                <td className="p-3 text-app-muted">kW (Kilowatts)</td>
                <td className="p-3 text-app-text/70">Actual electricity consumption rate</td>
              </tr>
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Power Factor</td>
                <td className="p-3 text-app-muted">PF (cos φ)</td>
                <td className="p-3 text-app-text/70">System efficiency & penalty analysis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Grid>
          <InfoBox title="Clamp Meter (Tong Tester)" type="important" tag="Non-Contact">
            Measures current by clamping around a conductor. It senses the <strong>magnetic field</strong>. 
            Auditors love it because you don't need to cut wires or stop machines.
          </InfoBox>
          <div className="bg-app-surface border-l-4 border-l-app-accent border border-app-border p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20">
              <BarChart3 size={48} />
            </div>
            <h4 className="text-app-accent font-display font-bold mb-3 flex items-center gap-2">
              <Activity size={18} /> Power Analyzer ⭐
            </h4>
            <p className="text-sm text-app-text/70 leading-relaxed">
              The <strong>heart of any audit</strong>. Simultaneously measures kW, PF, kWh, and Harmonics. 
              Essential for quantifying losses in large industrial panels.
            </p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 2: Thermal Measurement" moduleLabel="Module 03">
        <p>In industry, heat equals fuel, and fuel equals money. Managing thermal losses is top priority for boilers and furnaces.</p>
        
        <Grid>
          <InfoBox title="Thermal Imaging Camera" type="important" tag="Thermography">
            Shows heat as a visual spectrum: <span className="text-red-400">Red (Hot)</span> vs <span className="text-blue-400">Blue (Cold)</span>. 
            Detects loose connections or insulation leaks without opening panels.
          </InfoBox>
          <InfoBox title="Infrared Thermometer" type="example" tag="Non-Contact">
            Measures surface temperature from a distance using IR radiation. 
            Ideal for moving motor bearings or high-voltage transformers.
          </InfoBox>
        </Grid>
        
        <InfoBox title="Flue Gas Analyzer" type="numerical" tag="Boiler Logic">
          Measures Oxygen (O₂), CO, and Exhaust temperature. 
          Auditors use this to calculate <strong>Boiler Efficiency</strong>. High exhaust temp = Wastage.
        </InfoBox>
      </Section>

      <Section title="Topic 3: Light Measurement" moduleLabel="Module 03">
        <p>Energy audit isn't just about more light—it's about <strong>Adequate Light</strong>. Measured in <strong>LUX</strong>.</p>
        <Grid>
          <div className="bg-app-surface border border-app-border p-6 rounded-xl">
            <h4 className="text-app-accent font-display font-bold mb-4 flex items-center gap-2">
              <Lightbulb size={20} /> Lux Meter
            </h4>
            <List items={[
              "Measures illumination level (brightness).",
              "Helps identify 'Over-illumination' wastage.",
              "Ensures classroom/office standards (e.g. 300 Lux).",
              "Guides LED retrofitting decisions."
            ]} />
          </div>
          <InfoBox title="Lighting Fact" type="viva" tag="Energy Logic">
            Replacing a 40W Tube light with an 18W LED provides the <strong>same brightness</strong> while saving 50%+ electricity.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 4: Speed Measurement" moduleLabel="Module 03">
        <p>Critical for pumps and fans. According to Affinity Laws, even a small speed reduction leads to massive power savings.</p>
        
        <InfoBox title="Power and Speed Law" type="numerical" tag="Exam Favorite">
          <div className="text-center font-mono py-4 text-app-accent text-xl bg-app-bg/50 rounded-lg">
            Power ∝ (Speed)³
          </div>
          <p className="mt-4">
            A 20% increase in speed can increase power consumption by almost <strong>70%</strong>. 
            VFDs (Variable Frequency Drives) are used to manage this.
          </p>
        </InfoBox>

        <div className="bg-app-surface border border-app-border p-6 rounded-xl mt-6">
          <h4 className="text-app-text font-bold mb-3 flex items-center gap-2">
            <RotateCw size={18} className="text-app-accent" /> Tachometer
          </h4>
          <p className="text-sm text-app-text/60">Measures <strong>RPM (Revolutions Per Minute)</strong>. Available in Contact or Non-Contact (Laser) types.</p>
        </div>
      </Section>

      <Section title="Topic 5: Data Loggers & DAS" moduleLabel="Module 03">
        <p>Instead of manual one-time readings, modern audits use continuous recording systems.</p>
        <Grid>
          <InfoBox title="Data Logger" type="example" tag="Automated">
            A standalone device that automatically records parameters (V, I, T) 24/7 over time.
          </InfoBox>
          <InfoBox title="DAS (Data Acquisition)" type="important" tag="Analysis">
            A complete system (Sensors + Loggers + Software) that collects, stores, and analyzes energy patterns on a PC.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 6: Thermal Basis" moduleLabel="Module 03">
        <p>The fundamental heat principles used to audit boilers, furnaces, and steam systems.</p>
        
        <h3 className="text-xl font-display font-bold mb-4 text-app-text">Heat Transfer Modes</h3>
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-2">1. Conduction</h4>
            <p className="text-xs text-app-muted leading-relaxed">Through solids. E.g., Heat escaping through Boiler walls.</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-2">2. Convection</h4>
            <p className="text-xs text-app-muted leading-relaxed">Through liquid/gas movement. E.g., Hot air from a chimney.</p>
          </div>
          <div className="col-span-1 md:col-span-2 bg-app-surface border border-app-border p-5 rounded-xl">
            <h4 className="text-app-accent font-bold mb-2">3. Radiation</h4>
            <p className="text-xs text-app-muted leading-relaxed">Electromagnetic waves. E.g., Furnace heat radiating to surroundings.</p>
          </div>
        </Grid>

        <InfoBox title="Core Formula" type="numerical" tag="Q calculation">
          <div className="text-center font-mono py-2 text-app-accent text-lg">
            Q = m × Cp × ΔT
          </div>
          <p className="mt-2 text-xs opacity-60 italic text-center">
            Q: Heat energy | m: Mass | Cp: Specific Heat | ΔT: Temp Difference
          </p>
        </InfoBox>
      </Section>
    </UnitLayout>
  );
}
