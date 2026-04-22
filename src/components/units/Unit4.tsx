import React from 'react';
import { 
  Zap, 
  Search, 
  BarChart3, 
  TrendingDown, 
  TrendingUp, 
  Cpu, 
  Waves, 
  ShieldAlert, 
  DollarSign, 
  Clock, 
  Lightbulb,
  ArrowRight,
  Activity,
  Box,
  PieChart,
  Settings
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit4() {
  return (
    <UnitLayout title="Unit 4: Electrical-Load Management">
      <Section title="Topic 1: Electrical Basics" moduleLabel="Module 04">
        <p>
          Before understanding DSM or Power Factor, we must master the <strong>fundamental quantities</strong>. 
          Think of electricity like a water system to simplify the physics.
        </p>

        <div className="bg-app-surface border border-app-border rounded-xl p-8 my-8">
          <h4 className="text-app-accent font-mono text-[10px] uppercase tracking-widest mb-6">Hydraulic Analogy</h4>
          <Grid>
            <div className="flex flex-col gap-1 items-center text-center p-4 border border-app-border rounded-lg bg-app-bg/30">
              <span className="text-app-text font-bold text-lg">Voltage</span>
              <span className="text-app-muted text-xs">Water Pressure</span>
            </div>
            <div className="flex flex-col gap-1 items-center text-center p-4 border border-app-border rounded-lg bg-app-bg/30">
              <span className="text-app-text font-bold text-lg">Current</span>
              <span className="text-app-muted text-xs">Water Flow</span>
            </div>
            <div className="flex flex-col gap-1 items-center text-center p-4 border border-app-border rounded-lg bg-app-bg/30">
              <span className="text-app-text font-bold text-lg">Power</span>
              <span className="text-app-muted text-xs">Speed of Usage</span>
            </div>
            <div className="flex flex-col gap-1 items-center text-center p-4 border border-app-border rounded-lg bg-app-bg/30">
              <span className="text-app-text font-bold text-lg">Energy</span>
              <span className="text-app-muted text-xs">Total Water Used</span>
            </div>
          </Grid>
        </div>

        <Grid>
          <InfoBox title="Formula: Power (P)" type="numerical" tag="Base Calculation">
            <div className="text-center font-mono py-2 text-app-accent text-xl">
              P = V × I
            </div>
            <p className="mt-2 text-xs opacity-60 italic text-center">Unit: Watts or kW</p>
          </InfoBox>
          <InfoBox title="Formula: Energy (E)" type="numerical" tag="Billing Logic">
            <div className="text-center font-mono py-2 text-app-accent text-xl">
              E = P × Time
            </div>
            <p className="mt-2 text-xs opacity-60 italic text-center">Unit: kWh (Units)</p>
          </InfoBox>
        </Grid>

        <InfoBox title="Inductive Load Importance" type="important" tag="Critical Concept">
          Motors, fans, and compressors are <strong>Inductive Loads</strong>. 
          Unlike resistive loads (heaters), inductive loads create magnetic fields, which consume <strong>Reactive Power</strong> and 
          lead to Power Factor penalties in industrial facilities.
        </InfoBox>
      </Section>

      <Section title="Topic 2: Demand Side Management (DSM) Strategies" moduleLabel="Module 04">
        <p>Electricity must be used the moment it's generated. Demand Side Management (DSM) is the process of managing consumption to optimize the utility's grid. There are <strong>6 Standard DSM techniques</strong> usually asked in exams.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { t: "1. Peak Clipping", d: "Reducing load during peaks to avoid using costly 'peaking' power plants.", i: TrendingDown },
            { t: "2. Valley Filling", d: "Encouraging usage during low-demand periods (night) to improve plant utilization.", i: TrendingUp },
            { t: "3. Load Shifting", d: "Moving load from peak hours to off-peak hours without reducing total E consumption.", i: Clock },
            { t: "4. Strategic Conservation", d: "Reducing overall energy use across all hours through efficiency (e.g., LED rollout).", i: Lightbulb },
            { t: "5. Strategic Load Growth", d: "Increasing total consumption in a planned way (e.g., shifting from gas to electric stoves).", i: Zap },
            { t: "6. Flexible Load Shape", d: "Controlling loads based on grid reliability in real-time (Smart Grids).", i: Settings }
          ].map((item, idx) => (
            <div key={idx} className="bg-app-surface border border-app-border p-5 rounded-xl group hover:border-app-accent transition-all duration-300">
               <item.i className="text-app-accent mb-3 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" size={24} />
               <h4 className="font-bold text-sm text-app-text mb-2">{item.t}</h4>
               <p className="text-[11px] text-app-muted leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        <InfoBox title="Benefits of DSM" type="important" tag="Analysis">
          <strong>Utility:</strong> Avoids building new expensive power plants.<br />
          <strong>Consumer:</strong> Reduces electricity bills via off-peak incentives.<br />
          <strong>Society:</strong> Reduces CO₂ emissions and improves grid stability.
        </InfoBox>
      </Section>

      <Section title="Topic 3: Maximum Demand Control (MDC)" moduleLabel="Module 04">
        <p>Industries pay a heavy "Demand Charge" based on their highest 15 or 30-minute peak (kVA). If they exceed the 'Sanctioned Load', they face huge penalties.</p>
        
        <Grid>
          <div className="bg-app-surface border border-app-border p-6 rounded-xl">
             <h4 className="text-app-accent font-bold mb-4 flex items-center gap-2">
               <Cpu size={18} /> MD Controller (MDC)
             </h4>
             <p className="text-xs text-app-text/70 leading-relaxed mb-4">
               An automatic system that monitors kVA continuously. If MD is about to hit the limit, it automatically <strong>trips non-essential loads</strong> (like pumps, geysers, or backup chillers).
             </p>
             <List items={[
               "Prevents 'Demand Penalties'",
               "Improves Load Factor",
               "Optimizes Transformer utilization"
             ]} />
          </div>
          <InfoBox title="How to Reduce MD?" type="viva" tag="Strategy">
            1. <strong>Staggering:</strong> Don't start all large motors at once.<br />
            2. <strong>Load Scheduling:</strong> Move non-critical work to night shifts.<br />
            3. <strong>Storage:</strong> Use ice-thermal storage for AC systems.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 4: Power Factor (The Physics of Efficiency)" moduleLabel="Module 04">
        <p>Power Factor (PF) is the ratio of 'Work' to the 'Total Power' supplied. Most motors are inductive and have low PF (~0.7).</p>
        
        <div className="bg-app-accent/5 border border-app-border rounded-xl p-8 my-8">
          <h4 className="text-app-accent font-bold text-lg mb-6 flex items-center gap-2">
            <PieChart size={22} /> The Beer Mug Analogy
          </h4>
          <div className="flex flex-col md:flex-row items-center gap-10">
             <div className="w-24 h-40 border-4 border-app-border rounded-b-xl relative overflow-hidden bg-app-bg/50">
                <div className="absolute bottom-0 w-full h-3/4 bg-amber-500/60" /> {/* Liquid */}
                <div className="absolute bottom-3/4 w-full h-1/4 bg-white/40" /> {/* Foam */}
             </div>
             <div className="flex-1 space-y-4">
                <div className="flex items-start gap-3">
                   <div className="w-4 h-4 rounded bg-amber-500/60 mt-1" />
                   <div>
                      <p className="font-bold text-sm">KW (Active Power) = The Liquid</p>
                      <p className="text-xs text-app-muted">The actual usable part that does the work.</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-4 h-4 rounded bg-white/40 mt-1" />
                   <div>
                      <p className="font-bold text-sm">KVAR (Reactive Power) = The Foam</p>
                      <p className="text-xs text-app-muted">Doesn't quench thirst, but fills the glass (System Capacity).</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-4 h-4 rounded border-2 border-app-text/30 mt-1" />
                   <div>
                      <p className="font-bold text-sm">KVA (Apparent Power) = The Whole Glass</p>
                      <p className="text-xs text-app-muted">What the Utility charges you for!</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <Grid>
           <InfoBox title="Why PF Penalties?" type="important" tag="Utility Logic">
              Low PF means the utility must supply MORE current for the SAME work. This causes <strong>I²R losses</strong> in the utility cables. Hence, they penalize poor PF.
           </InfoBox>
           <div className="bg-app-surface border border-app-border p-5 rounded-xl">
              <h4 className="text-app-text font-bold text-xs mb-3">Mathematical Triangle</h4>
              <p className="text-[10px] font-mono text-app-accent mb-2">kW² + kVAR² = kVA²</p>
              <p className="text-[10px] text-app-muted">Power Factor = cos φ = kW / kVA</p>
              <div className="mt-4 p-2 bg-app-bg/50 border border-app-border rounded text-[10px] text-emerald-400">
                Goal: Reduce kVAR to make kVA ≈ kW.
              </div>
           </div>
        </Grid>
      </Section>

      <Section title="Topic 5: Harmonics and its Effects" moduleLabel="Module 04">
        <p>Modern electronic devices like VFDs and UPS produce distortion in the power supply by drawing 'non-sinusoidal' current.</p>
        <Grid>
          <InfoBox title="Total Harmonic Distortion (THD)" type="important" tag="Distortion">
            THD is the ratio of the sum of all harmonic components to the fundamental frequency (50Hz). High THD {` > `} 5% can damage industrial electronics.
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-t-4 border-t-red-500/50">
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
              <ShieldAlert size={16} /> Technical Dangers
            </h4>
            <ul className="text-[11px] space-y-2 text-app-text/70 font-mono">
              <li>- OVERHEATING_TRANSFORMERS</li>
              <li>- NEUTRAL_CONDUCTOR_BURNING</li>
              <li>- MALFUNCTION_OF_RELAYS</li>
              <li>- REDUCED_MOTOR_EFFICIENCY</li>
            </ul>
          </div>
        </Grid>
        <InfoBox title="Harmonic Mitigation" type="viva" tag="Solution">
          1. <strong>Passive Filters:</strong> Use L-C circuits tuned to specific frequencies (e.g., 5th harmonic).<br />
          2. <strong>Active Filters:</strong> Sophisticated power electronics that inject "anti-harmonics" to cancel noise.
        </InfoBox>
      </Section>

      <Section title="Topic 6: Variable Frequency Drives (VFD) Technicals" moduleLabel="Module 04">
        <p>VFDs are the most common ESM (Energy Saving Measure) for motors. They work by converting AC to DC and then back to 'Variable' AC.</p>
        
        <div className="bg-app-surface border border-app-border rounded-xl p-6 my-8">
          <h4 className="text-app-accent font-mono text-[10px] uppercase mb-4">VFD Internal Working</h4>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between text-[10px] font-bold uppercase tracking-tight">
             <div className="p-3 border border-app-border rounded bg-app-bg/30">1. Rectifier (AC to DC)</div>
             <ArrowRight size={16} className="hidden md:block opacity-30" />
             <div className="p-3 border border-app-border rounded bg-app-bg/30">2. DC Bus (Filtering)</div>
             <ArrowRight size={16} className="hidden md:block opacity-30" />
             <div className="p-3 border border-app-accent/50 rounded bg-app-accent/10">3. Inverter (DC to vAC)</div>
             <ArrowRight size={16} className="hidden md:block opacity-30" />
             <div className="p-3 border border-app-border rounded bg-app-bg/30">4. PWM Control</div>
          </div>
        </div>

        <Grid>
          <InfoBox title="VFD Energy Payback" type="numerical" tag="Exam Favorite">
            Centrifugal pumps/fans follow the <strong>Cube Law</strong>: Power ∝ N³.<br />
            If speed (N) is reduced to 80%, Power becomes (0.8)³ = 51%. <br />
            Result: <strong>20% speed reduction = 50% Energy saving!</strong>
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
             <h4 className="text-app-accent font-bold mb-2">Where to avoid VFD?</h4>
             <p className="text-xs text-app-muted leading-relaxed">
               Avoid on 'Constant Torque' loads like conveyer belts if the speed reduction is minimal. VFDs also produce <strong>Harmonics</strong>, which may require filters.
             </p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 7: Electricity Tariff" moduleLabel="Module 04">
        <p>Industry billing is complex. To reduce bills, we must understand the <strong>Two-Part Tariff</strong>.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="p-6 border border-app-border bg-app-surface rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs">01</div>
              <h4 className="font-bold text-app-text">Energy Charge</h4>
            </div>
            <p className="text-xs text-app-muted leading-relaxed">Based on total units consumed (kWh). The basic "use it, pay for it" metric.</p>
          </div>
          <div className="p-6 border border-app-border bg-app-surface rounded-xl border-r-4 border-r-app-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">02</div>
              <h4 className="font-bold text-app-text">Demand Charge</h4>
            </div>
            <p className="text-xs text-app-muted leading-relaxed">Based on <strong>Maximum Demand</strong> (kW/kVA) at any moment. Billed for the whole month based on the highest 15-min peak.</p>
          </div>
        </div>
        <InfoBox title="Time of Day (TOD) Tariff" type="viva">
          A dynamic pricing model where electricity is <strong>cheaper at night</strong> and <strong>expensive during evening peaks</strong>. 
          This provides the primary financial incentive for Load Shifting.
        </InfoBox>
      </Section>

      <Section title="Topic 8: T&D Losses" moduleLabel="Module 04">
        <p>Energy lost in the network between the power plant and the end-user.</p>
        <List items={[
          "Technical Losses: Resistive heating (I²R loss) in lines and transformers.",
          "Non-Technical Losses: Electricity theft, illegal connections, and faulty meters.",
          "High Voltage Benefit: Transmitting at 400kV reduces current, which drastically reduces I²R losses."
        ]} />
      </Section>
      <Section title="Topic 9: Smart Metering & Grid Management" moduleLabel="Module 04">
        <p>The future of load management lies in <strong>Smart Meters</strong> and two-way communication.</p>
        <Grid>
           <InfoBox title="Smart Metering" type="important" tag="Technology">
             Measures data in real-time and communicates directly with the utility. No manual readings required.
           </InfoBox>
           <div className="bg-app-surface border border-app-border p-5 rounded-xl">
              <h4 className="text-app-accent font-bold mb-2">Benefits</h4>
              <List items={[
                "Accurate billing with zero human error",
                "Detection of power theft automatically",
                "Better integration of Solar/Wind energy",
                "Remote disconnection/reconnection"
              ]} />
           </div>
        </Grid>
      </Section>
    </UnitLayout>
  );
}
