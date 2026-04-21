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

      <Section title="Topic 2: Demand Side Management (DSM)" moduleLabel="Module 04">
        <p>Electricity must be used the moment it's generated. When everyone uses it simultaneously, we face the <strong>Peak Demand Problem</strong>.</p>
        
        <h3 className="text-xl font-display font-bold mt-10 mb-6 text-app-text flex items-center gap-2">
          <BarChart3 size={20} className="text-app-accent" />
          The Load Curve Concept
        </h3>
        <p className="text-sm mb-6">The Load Curve tracks usage (kW) vs. Time. DSM aims to <strong>flatten this curve</strong>.</p>
        
        <Grid>
          <div className="bg-app-surface border border-app-border rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-app-accent/20"><TrendingDown size={32} /></div>
            <h4 className="text-app-accent font-bold mb-2">1. Peak Clipping</h4>
            <p className="text-xs text-app-text/70">Directly reducing load during peaks. E.g., Cycling off AC units during heatwaves.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-app-accent/20"><Clock size={32} /></div>
            <h4 className="text-app-accent font-bold mb-2">2. Load Shifting</h4>
            <p className="text-xs text-app-text/70">Moving usage to off-peak periods. E.g., Industrial night shifts to avoid peak costs.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-app-accent/20"><TrendingUp size={32} /></div>
            <h4 className="text-app-accent font-bold mb-2">3. Valley Filling</h4>
            <p className="text-xs text-app-text/70">Increasing load during low-demand hours. E.g., Night-time EV charging.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 3: Variable Frequency Drives (VFD)" moduleLabel="Module 04">
        <p>Motors usually run at fixed speeds. VFDs change <strong>Frequency and Voltage</strong> to control speed precisely.</p>
        <InfoBox title="Energy Saving: The Cube Law" type="numerical" tag="Exam Favorite">
          <div className="text-center font-mono py-4 text-app-accent text-xl bg-app-bg/50 rounded-lg">
            Power ∝ (Speed)³
          </div>
          <p className="mt-4">
            If you reduce speed by <strong>20%</strong>, power consumption drops by nearly <strong>50%</strong>. 
            This makes VFDs the most effective energy saver for centrifugal pumps and fans.
          </p>
        </InfoBox>
      </Section>

      <Section title="Topic 4: Harmonics and its Effects" moduleLabel="Module 04">
        <p>Modern electronic devices (VFDs, UPS, Computers) produce distortion in the power supply.</p>
        <Grid>
          <InfoBox title="What are Harmonics?" type="viva" tag="Distortion">
            Unwanted higher frequencies (multiples of 50Hz) that distort the pure sine wave. 
            3rd (150Hz), 5th (250Hz), etc.
          </InfoBox>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-t-4 border-t-red-500/50">
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
              <ShieldAlert size={16} /> Technical Dangers
            </h4>
            <ul className="text-[11px] space-y-2 text-app-text/70 font-mono">
              <li>- OVERHEATING_TRANSFORMERS</li>
              <li>- NEUTRAL_OVERLOADING</li>
              <li>- EQUIPMENT_FAILURE</li>
              <li>- METERING_ERRORS</li>
            </ul>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 5: Electricity Tariff" moduleLabel="Module 04">
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

      <Section title="Topic 6: Power Factor (PF)" moduleLabel="Module 04">
        <Grid>
          <InfoBox title="Efficiency Metric" type="important" tag="PF Calculation">
            PF = Real Power (kW) ÷ Apparent Power (kVA).<br />
            Range: 0 to 1. <br />
            <strong>Ideally PF ≥ 0.95.</strong>
          </InfoBox>
          <div className="flex flex-col gap-4 text-xs">
            <div className="bg-app-surface p-4 border border-app-border rounded-xl">
              <h5 className="font-bold text-app-accent mb-2">Why Low PF is BAD</h5>
              <p className="text-app-muted">Low PF increases current flow. Higher current = Higher I²R heat losses + Utility Penalties.</p>
            </div>
            <div className="bg-app-surface p-4 border border-app-border rounded-xl">
              <h5 className="font-bold text-app-accent mb-2">Solution</h5>
              <p className="text-app-muted font-bold tracking-tight">INSTALL CAPACITOR BANKS locally at the equipment or main panel.</p>
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 7: T&D Losses" moduleLabel="Module 04">
        <p>Energy lost in the network between the power plant and the end-user.</p>
        <List items={[
          "Technical Losses: Resistive heating (I²R loss) in lines and transformers.",
          "Non-Technical Losses: Electricity theft, illegal connections, and faulty meters.",
          "High Voltage Benefit: Transmitting at 400kV reduces current, which drastically reduces I²R losses."
        ]} />
      </Section>
    </UnitLayout>
  );
}
