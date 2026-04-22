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
      <Section title="Topic 1: Electrical Measurement & Power Quality" moduleLabel="Module 03">
        <p>
          Electrical parameters form the backbone of 70% of industrial audits. Beyond simple V and I, auditors must analyze <strong>Power Quality</strong>.
        </p>
        
        <div className="overflow-x-auto my-8 border border-app-border rounded-xl">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-app-surface border-b border-app-border">
                <th className="p-3 font-mono text-[10px] uppercase text-app-accent">Parameter</th>
                <th className="p-3 font-mono text-[10px] uppercase text-app-accent">Symbol/Unit</th>
                <th className="p-3 font-mono text-[10px] uppercase text-app-accent">Audit Objective</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app-border">
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Active Power</td>
                <td className="p-3 text-app-muted">kW (Kilowatts)</td>
                <td className="p-3 text-app-text/70">The 'Real' work being done by the machine.</td>
              </tr>
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Apparent Power</td>
                <td className="p-3 text-app-muted">kVA</td>
                <td className="p-3 text-app-text/70">Total power supplied. Impacts transformer capacity.</td>
              </tr>
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Power Factor</td>
                <td className="p-3 text-app-muted">PF (cos φ)</td>
                <td className="p-3 text-app-text/70">Efficiency indicator. Ratio of kW/kVA.</td>
              </tr>
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-bold text-app-text">Harmonics (THD)</td>
                <td className="p-3 text-app-muted">% Distortion</td>
                <td className="p-3 text-app-text/70">Noise in system due to non-linear loads (VFDs, PCs).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Grid>
          <InfoBox title="Total Harmonic Distortion (THD)" type="important" tag="Power Quality">
            High THD causes excessive heat in motors and transformers, leading to life reduction and <strong>unexpected tripping</strong> of relays.
          </InfoBox>
          <div className="bg-app-surface border-l-4 border-l-app-accent border border-app-border p-6 rounded-xl relative overflow-hidden group">
            <h4 className="text-app-accent font-display font-bold mb-3 flex items-center gap-2">
              <Activity size={18} /> Portable Power Analyzer
            </h4>
            <p className="text-sm text-app-text/70 leading-relaxed mb-3">
              Captures 'Transients' and 'Swells'. It logs data over 24 hours to create a <strong>Load Profile</strong>.
            </p>
            <div className="text-[10px] font-mono p-2 bg-app-bg/50 rounded border border-app-border">
              [ANALYZER_READY] // Logs: V, I, P, Q, S, PF, Freq, THD
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 2: Thermal & Environmental Measurement" moduleLabel="Module 03">
        <p>Thermal audits analyze energy in the form of heat, steam, and environmental humidity.</p>
        
        <Grid>
          <div className="bg-app-surface border border-app-border p-6 rounded-xl flex flex-col gap-4">
             <div className="flex items-center gap-3">
               <Flame size={20} className="text-orange-500" />
               <h4 className="font-bold text-app-text">Flue Gas Analyzer</h4>
             </div>
             <p className="text-xs text-app-muted leading-relaxed">
               Inserted into boiler chimneys. Measures % O₂, CO₂, and Excess Air. Vital for <strong>Combustion Efficiency</strong> analysis.
             </p>
          </div>
          <div className="bg-app-surface border border-app-border p-6 rounded-xl flex flex-col gap-4">
             <div className="flex items-center gap-3">
               <RotateCw size={20} className="text-blue-500" />
               <h4 className="font-bold text-app-text">Ultrasonic Flow Meter</h4>
             </div>
             <p className="text-xs text-app-muted leading-relaxed">
               Measures velocity of water/steam inside pipes <strong>non-intrusively</strong> using sound waves. Zero downtime required.
             </p>
          </div>
        </Grid>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-5 bg-app-bg/30 border border-app-border rounded-xl">
             <h4 className="font-bold text-sm text-app-accent mb-2 flex items-center gap-2">
               <Binary size={16} /> Psychrometer (Hygrometer)
             </h4>
             <p className="text-xs text-app-text/70">
               Essential for textile industries and AC audits. It measures <strong>Relative Humidity (% RH)</strong> by comparing Dry Bulb and Wet Bulb temperatures.
             </p>
          </div>
          <div className="p-5 bg-app-bg/30 border border-app-border rounded-xl">
             <h4 className="font-bold text-sm text-app-accent mb-2 flex items-center gap-2">
               <Activity size={16} /> Anemometer
             </h4>
             <p className="text-xs text-app-text/70">
               Vaned or Hot-wire types used for measuring <strong>Airflow Velocity</strong> in cooling towers or AHU ducts.
             </p>
          </div>
        </div>

        <InfoBox title="Contact vs. Non-Contact Thermometers" type="example" tag="VIVA">
          <strong>Contact:</strong> Dial thermometer, Thermocouple (Needs physical touch).<br />
          <strong>Non-Contact:</strong> IR Pyrometer, Thermal Imager (Safe for high-temp/moving parts).
        </InfoBox>
      </Section>

      <Section title="Topic 3: Pressure & Flow Instruments" moduleLabel="Module 03">
        <p>Measurement of pressures in boilers, pumps, and pneumatic systems.</p>
        
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-t-4 border-t-emerald-500">
            <h4 className="text-sm font-bold mb-2">Manometers</h4>
            <p className="text-xs text-app-muted">U-Tube types used for low-pressure differential measurements in ventilation ducts.</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-t-4 border-t-blue-500">
            <h4 className="text-sm font-bold mb-2">Bourdon Gauges</h4>
            <p className="text-xs text-app-muted">Mechanical curved tubes for high-pressure steam and water lines.</p>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-t-4 border-t-purple-500">
            <h4 className="text-sm font-bold mb-2">Pitot Tube</h4>
            <p className="text-xs text-app-muted">Measures 'Dynamic Pressure' to calculate air velocity in large industrial fans.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 4: Speed and Mechanical Measurement" moduleLabel="Module 03">
        <Grid>
           <InfoBox title="Stroboscope" type="example" tag="Tech">
             Uses 'Flash' sync to make moving parts appear stationary. Measured RPM of fans/pulleys without touching them.
           </InfoBox>
           <InfoBox title="Affinity Laws" type="numerical" tag="Exam Favorite">
              Flow ∝ Speed | Head ∝ Speed² | <strong>Power ∝ Speed³</strong>. <br />
              Halving the fan speed reduces power to <strong>1/8th</strong> of its original value!
           </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 5: Errors & Calibration" moduleLabel="Module 03">
        <p>No measurement is 100% perfect. Auditors must understand <strong>Uncertainty</strong>.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-app-surface border border-app-border rounded-lg shadow-sm">
             <h5 className="font-bold text-xs mb-1">Gross Errors</h5>
             <p className="text-[11px] text-app-muted">Human mistakes like reading 25.5 as 52.5.</p>
          </div>
          <div className="p-4 bg-app-surface border border-app-border rounded-lg shadow-sm">
             <h5 className="font-bold text-xs mb-1">Systematic Errors</h5>
             <p className="text-[11px] text-app-muted">Instrument faults. E.g., a scale always showing +1kg offset.</p>
          </div>
          <div className="p-4 bg-app-surface border border-app-border rounded-lg shadow-sm">
             <h5 className="font-bold text-xs mb-1">Random Errors</h5>
             <p className="text-[11px] text-app-muted">Sudden environmental changes or supply flickers.</p>
          </div>
        </div>

        <InfoBox title="Why Calibration?" type="important" tag="Quality">
          Calibration compares a device against a <strong>Standard</strong> (NIST/NPL) to ensure the 2% accuracy stated by the manufacturer is valid.
        </InfoBox>
      </Section>

      <Section title="Topic 6: Integrated Systems (SCADA & DAS)" moduleLabel="Module 03">
        <p>Advanced industries don't rely on handheld meters; they use networked monitoring.</p>
        <Grid>
          <div className="bg-app-bg/40 p-5 rounded-xl border border-app-border">
            <div className="flex items-center gap-2 text-app-accent mb-2">
              <Database size={16} />
              <h4 className="font-bold text-sm">Data Acquisition (DAS)</h4>
            </div>
            <p className="text-xs text-app-text/60 leading-relaxed italic">
              "Collects data from thousands of points, logs it every minute, and exports it to CSV for auditor analysis."
            </p>
          </div>
          <div className="bg-app-bg/40 p-5 rounded-xl border border-app-border">
            <div className="flex items-center gap-2 text-app-accent mb-2">
              <Cpu size={16} />
              <h4 className="font-bold text-sm">SCADA</h4>
            </div>
            <p className="text-xs text-app-text/60 leading-relaxed italic">
              "Supervisory Control and Data Acquisition. Not just monitoring—it allows the auditor to control machines remotely."
            </p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 7: Summary Table for Students" moduleLabel="Module 03">
        <div className="overflow-x-auto border border-app-border rounded-xl">
           <table className="w-full text-[11px] text-left">
             <thead className="bg-app-surface border-b border-app-border">
               <tr>
                 <th className="p-3 text-app-accent">Instrument</th>
                 <th className="p-3 text-app-accent">What it Measures</th>
                 <th className="p-3 text-app-accent">Where to use?</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-app-border">
               <tr><td className="p-3 font-bold">Clamp Meter</td><td className="p-3">Current (Amps)</td><td className="p-3">Main panels, individual motors</td></tr>
               <tr><td className="p-3 font-bold">Lux Meter</td><td className="p-3">Illumination (Lux)</td><td className="p-3">Offices, corridors, factories</td></tr>
               <tr><td className="p-3 font-bold">Anemometer</td><td className="p-3">Air Velocity (m/s)</td><td className="p-3">Cooling towers, AHUs</td></tr>
               <tr><td className="p-3 font-bold">Psychrometer</td><td className="p-3">Humidity (% RH)</td><td className="p-3">Textile mills, AC systems</td></tr>
               <tr><td className="p-3 font-bold">Manometer</td><td className="p-3">Air Pressure (mmWC)</td><td className="p-3">Blower systems, duct filters</td></tr>
               <tr><td className="p-3 font-bold">Stroboscope</td><td className="p-3">Speed (RPM)</td><td className="p-3">Dangerous moving shafts</td></tr>
             </tbody>
           </table>
        </div>
      </Section>
      <Section title="Topic 8: The Professional Audit Kit Checklist" moduleLabel="Module 03">
        <p>A professional auditor doesn't just carry meters. A complete kit includes safety and documentation tools.</p>
        <Grid>
          <div className="bg-app-surface border border-app-border p-4 rounded-xl">
             <h4 className="text-[10px] font-bold text-app-accent uppercase mb-2">Safety Gear (PPE)</h4>
             <List items={["Safety Shoes & Helmets", "Insulated Gloves", "Goggles for boiler visits"]} />
          </div>
          <div className="bg-app-surface border border-app-border p-4 rounded-xl">
             <h4 className="text-[10px] font-bold text-app-accent uppercase mb-2">Documentation</h4>
             <List items={["Digital Camera/Phone", "Measuring Tape", "Clipboards & Note sheets"]} />
          </div>
          <div className="bg-app-surface border border-app-border p-4 rounded-xl">
             <h4 className="text-[10px] font-bold text-app-accent uppercase mb-2">Auxiliary Tools</h4>
             <List items={["Flashlights", "Mirrors for hidden leaks", "Sample collection bags"]} />
          </div>
        </Grid>
      </Section>
    </UnitLayout>
  );
}
