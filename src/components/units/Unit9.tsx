import React from 'react';
import { 
  Sprout, 
  Zap, 
  Settings, 
  Target, 
  BarChart3, 
  Factory, 
  Store, 
  PlugZap, 
  Home, 
  Bus, 
  Wheat, 
  Scale, 
  Award,
  ShieldCheck,
  TrendingDown,
  CheckCircle2,
  FileText
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit9() {
  return (
    <UnitLayout title="Unit 9: Energy Conservation & Legislation">
      <Section title="Topic 1 & 2: Motivation & Principles" moduleLabel="Module 09">
        <p>
          Energy conservation is the "First Fuel" of a sustainable economy. It is mandated by limited resources, 
          rising costs, and the urgent need for environmental protection.
        </p>

        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-app-accent">
            <h4 className="text-app-accent font-bold mb-3 flex items-center gap-2 text-sm">
              <Sprout size={16} /> The Motivation
            </h4>
            <ul className="text-xs space-y-2 text-app-text/70">
              <li>- <span className="text-app-text font-bold">Resouce Scarcity:</span> Fossil fuels are finite.</li>
              <li>- <span className="text-app-text font-bold">Cost Control:</span> Saving energy = Direct Profit.</li>
              <li>- <span className="text-app-text font-bold">Security:</span> Reducing energy import dependency.</li>
              <li>- <span className="text-app-text font-bold">Environment:</span> Cutting CO₂ emissions.</li>
            </ul>
          </div>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl border-l-4 border-l-blue-500/50">
            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2 text-sm">
              <ShieldCheck size={16} /> Core Principles
            </h4>
            <ul className="text-xs space-y-2 text-app-text/70">
              <li>- <span className="text-app-text font-bold">Avoid Waste:</span> Zero-tolerance for idle loads.</li>
              <li>- <span className="text-app-text font-bold">Efficiency:</span> Technological upgrades (LED/IE3).</li>
              <li>- <span className="text-app-text font-bold">Maintenance:</span> Keeping systems in peak state.</li>
              <li>- <span className="text-app-text font-bold">Management:</span> Smart load shifting.</li>
            </ul>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 3: Energy Management Systems (ISO 50001)" moduleLabel="Module 09">
        <p>A structured framework like <strong>ISO 50001</strong> ensures that energy performance improves continuously through a PDCA (Plan-Do-Check-Act) cycle.</p>
        <Grid>
          <div className="bg-app-surface border border-app-border p-5 rounded-xl">
             <h4 className="text-xs font-bold text-app-accent mb-3 uppercase tracking-widest">The PDCA Cycle</h4>
             <ul className="text-[11px] space-y-2 text-app-text/70">
                <li><span className="text-app-text font-bold">Plan:</span> Conduct energy review and establish baseline/targets.</li>
                <li><span className="text-app-text font-bold">Do:</span> Implement energy management action plans.</li>
                <li><span className="text-app-text font-bold">Check:</span> Monitor and measure processes against targets.</li>
                <li><span className="text-app-text font-bold">Act:</span> Take actions to continually improve performance.</li>
             </ul>
          </div>
          <InfoBox title="Energy Baseline (EnB)" type="important">
             The <strong>Energy Baseline</strong> is a quantitative reference providing a basis for comparison of energy performance. Without a baseline, you cannot prove savings.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 4: Systematic Conservation Planning" moduleLabel="Module 09">
        <p>A rigorous approach ensures that capital is deployed where it yields the maximum energy return on investment.</p>
        <div className="bg-app-surface border border-app-border rounded-xl p-6 my-8 overflow-x-auto">
          <div className="flex min-w-[600px] justify-between relative">
            <div className="absolute top-4 left-0 right-0 h-[1px] bg-app-border z-0" />
            {[
              { s: "Audit", i: Target },
              { s: "Data", i: BarChart3 },
              { s: "Opportunities", i: Zap },
              { s: "Technical", i: Settings },
              { s: "Financial", i: Scale },
              { s: "Implement", i: CheckCircle2 }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-2 relative z-10 bg-app-surface px-2">
                <div className="w-8 h-8 rounded-full bg-app-bg border border-app-accent flex items-center justify-center text-app-accent">
                  <step.i size={14} />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-tighter">{step.s}</span>
              </div>
            ))}
          </div>
        </div>
        <InfoBox title="Mantra for Planning" type="viva">
          <strong>"Energy Saved = Energy Generated"</strong>. Saving 1 unit at the consumer end prevents the generation of 1.2 units at the plant due to T&D loss mitigation.
        </InfoBox>
      </Section>

      <Section title="Topic 5-9: Global & Sector-wise Strategies" moduleLabel="Module 09">
        <p>Technical strategies for high-impact energy reduction across the economy.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { t: "Large Industry", d: "Waste Heat Recovery (WHR), Combined Heat & Power (CHP), and VFD integration for all centrifugal loads.", i: Factory },
            { t: "MSME/SSI", d: "Phase-wise replacement of old motors with IE3/IE4 classes and adoption of local solar-thermal systems.", i: Store },
            { t: "Power Sector", d: "Reducing T&D losses using high-voltage DC (HVDC) transmission and amorphous core transformers.", i: PlugZap },
            { t: "Building Sector", d: "Adopting ECBC-compliant envelopes, VRF air conditioning, and BMS (Building Management Systems).", i: Home },
            { t: "Transport", d: "Friction reduction, regenerative braking in rail, and switching to high-energy-density EV batteries.", i: Bus },
            { t: "Agriculture", d: "Standardizing foot valves, using PVC pipes instead of high-friction GI, and solar-synchronous pumping.", i: Wheat }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-app-surface border border-app-border rounded-xl group hover:border-app-accent transition-colors">
              <item.i className="text-app-accent mb-2 opacity-50" size={20} />
              <h5 className="font-bold text-xs text-app-text mb-1">{item.t}</h5>
              <p className="text-[10px] text-app-muted leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Topic 10: Legislation - The EC Act 2001 Detail" moduleLabel="Module 09">
        <div className="bg-app-accent/5 border border-app-accent/20 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-app-accent/10 -rotate-12">
            <Scale size={120} />
          </div>
          
          <h3 className="text-xl font-display font-bold text-app-text mb-4">India's Legislative Powerhouse</h3>
          <p className="text-sm text-app-text/70 mb-6 max-w-2xl">
            The <strong>Energy Conservation Act, 2001</strong> enables the Central Government to specify energy consumption standards for equipment and appliances.
          </p>

          <Grid>
            <div className="bg-app-bg/50 p-4 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-3 flex items-center gap-2">
                <Target size={12} /> The PAT Scheme
              </h4>
              <p className="text-[10px] text-app-muted mb-3 italic">"Perform, Achieve & Trade"</p>
              <ul className="text-[10.5px] space-y-2 text-app-muted">
                <li>• <span className="text-app-text font-bold">SEC Targets:</span> Specific Energy Consumption targets given to 'Designated Consumers'.</li>
                <li>• <span className="text-app-text font-bold">ESCerts:</span> Over-achievers get tradeable certificates.</li>
                <li>• <span className="text-app-text font-bold">Market Mechanism:</span> Under-achievers must buy ESCerts to comply.</li>
              </ul>
            </div>
            <div className="bg-app-bg/50 p-4 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-3 flex items-center gap-2">
                <ShieldCheck size={12} /> Institutional Roles
              </h4>
              <ul className="text-[10.5px] space-y-2 text-app-muted">
                <li>• <span className="text-app-text font-bold">Energy Manager:</span> In-house professional responsible for daily optimization.</li>
                <li>• <span className="text-app-text font-bold">Energy Auditor:</span> External professional for certified mandatory audits.</li>
                <li>• <span className="text-app-text font-bold">SDA:</span> State Designated Agencies monitor state-level compliance.</li>
              </ul>
            </div>
          </Grid>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="p-5 border border-app-border bg-app-surface rounded-xl">
              <h4 className="text-xs font-bold text-app-text mb-2">S&L (Standards & Labelling)</h4>
              <p className="text-[11px] text-app-muted">Mandatory and Voluntary star labeling for 28+ appliances ranging from ACs to Chillers and Pump sets. Prevents the dumping of obsolete technology.</p>
           </div>
           <div className="p-5 border border-app-border bg-app-surface rounded-xl">
              <h4 className="text-xs font-bold text-app-text mb-2">ECBC Implementation</h4>
              <p className="text-[11px] text-app-muted">Mandates thermal standards for any commercial building with {` > `} 100kW connected load or {` > `} 500kVA contract demand.</p>
           </div>
        </div>
      </Section>

      <Section title="Module Conclusion">
        <div className="bg-app-accent border border-app-accent/20 text-app-bg rounded-2xl p-10 text-center shadow-xl shadow-app-accent/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <CheckCircle2 size={48} className="mx-auto mb-6 opacity-30" />
          <h3 className="text-3xl font-display font-bold mb-3 tracking-tight">Technical Syllabus Mastered</h3>
          <p className="opacity-90 font-medium max-w-lg mx-auto leading-relaxed">
            From the physics of Power Factor to the legal framework of the EC Act, you are now prepared for advanced Energy Auditing.
          </p>
          <div className="mt-8 pt-8 border-t border-app-bg/10 flex justify-center gap-8 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
            <span>9 Modules</span>
            <span>Technical precision</span>
            <span>VIVA Ready</span>
          </div>
        </div>
      </Section>
    </UnitLayout>
  );
}
