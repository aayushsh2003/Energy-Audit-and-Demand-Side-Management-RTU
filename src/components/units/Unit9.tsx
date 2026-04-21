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

      <Section title="Topic 3: Conservation Planning" moduleLabel="Module 09">
        <p>Systematic planning ensures that investments yield the highest energy returns.</p>
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

      <Section title="Topic 4-9: Sector-wise Strategies" moduleLabel="Module 09">
        <p>Specific saving opportunities across various economic sectors.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { t: "Large Industry", d: "Waste heat recovery, VFDs, and motor optimization.", i: Factory },
            { t: "SSI (Small Scale)", d: "Low-cost methods: LED, upkeep, and worker training.", i: Store },
            { t: "Power Grid", d: "High-voltage transmission & low-loss transformers.", i: PlugZap },
            { t: "Residential", d: "Star-rated appliances (BEE) & natural ventilation.", i: Home },
            { t: "Transport", d: "Public transit, E-mobility (EVs), & car pooling.", i: Bus },
            { t: "Agriculture", d: "Pump sizing, drip irrigation, & solar pumping.", i: Wheat }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-app-surface border border-app-border rounded-xl group hover:border-app-accent transition-colors">
              <item.i className="text-app-accent mb-2 opacity-50" size={20} />
              <h5 className="font-bold text-xs text-app-text mb-1">{item.t}</h5>
              <p className="text-[10px] text-app-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Topic 10: Legislation - EC Act 2001" moduleLabel="Module 09">
        <div className="bg-app-accent/5 border border-app-accent/20 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-app-accent/10 -rotate-12">
            <Scale size={120} />
          </div>
          
          <h3 className="text-xl font-display font-bold text-app-text mb-4">Energy Conservation Act, 2001</h3>
          <p className="text-sm text-app-text/70 mb-6 max-w-2xl">
            The foundation of India's energy efficiency framework. It established the <strong>Bureau of Energy Efficiency (BEE)</strong> to drive national standards.
          </p>

          <Grid>
            <div className="bg-app-bg/50 p-4 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-3 flex items-center gap-2">
                <Award size={12} /> Key Mechanisms
              </h4>
              <ul className="text-[11px] space-y-2 text-app-muted">
                <li>• <span className="text-app-text font-bold">Star Labeling:</span> Mandatory for high-usage appliances.</li>
                <li>• <span className="text-app-text font-bold">ECBC:</span> Rules for energy-efficient commercial buildings.</li>
                <li>• <span className="text-app-text font-bold">PAT Scheme:</span> Perform, Achieve, and Trade for Industries.</li>
              </ul>
            </div>
            <div className="bg-app-bg/50 p-4 border border-app-border rounded-xl">
              <h4 className="text-[10px] font-mono font-bold text-app-accent uppercase mb-3 flex items-center gap-2">
                <ShieldCheck size={12} /> Compliance
              </h4>
              <ul className="text-[11px] space-y-2 text-app-muted">
                <li>• <span className="text-app-text font-bold">Designated Consumers:</span> Sectors mandated for regular audits.</li>
                <li>• <span className="text-app-text font-bold">Energy Auditors:</span> Certified professionals required by law.</li>
                <li>• <span className="text-app-text font-bold">Penalties:</span> Financial consequences for non-compliance.</li>
              </ul>
            </div>
          </Grid>
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
