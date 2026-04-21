import React from 'react';
import { 
  ChevronRight, 
  Target, 
  BarChart3, 
  Factory, 
  TrendingDown, 
  ShieldCheck, 
  Binary, 
  Cpu, 
  Activity,
  DollarSign,
  AlertCircle,
  Lightbulb,
  Zap
} from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit2() {
  return (
    <UnitLayout title="Unit 2: Audit Types & Methodology">
      <Section title="Topic 1: Definition of Energy Audit" moduleLabel="Module 02">
        <p>
          In Unit 1, we learned the basics. Now, we study it in <strong>exam-level technical detail</strong>. 
          This is a critical topic for theory papers and vivas.
        </p>

        <InfoBox title="Technical Definition (Memorize)" type="important" tag="Standard">
          <strong>Energy Audit</strong> is a systematic and scientific study of energy use in a facility to determine how and 
          where energy is consumed and to identify opportunities for energy savings with <strong>economic justification</strong>.
        </InfoBox>

        <Grid>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm">
            <h4 className="font-mono font-bold text-[10px] text-app-accent uppercase mb-3">Key Terms In Definition</h4>
            <ul className="space-y-2 text-sm text-app-text/70">
              <li><span className="text-app-accent font-bold">Systematic:</span> Follows a planned, step-by-step procedure.</li>
              <li><span className="text-app-accent font-bold">Scientific:</span> Based on measurements & complex calculations.</li>
              <li><span className="text-app-accent font-bold">Economic Justification:</span> Savings must be financially beneficial.</li>
            </ul>
          </div>
          <InfoBox title="The 3 Core Questions" type="viva" tag="Conceptual">
            1. Where is energy used?<br />
            2. Where is energy wasted?<br />
            3. How can we save it at minimum cost?
          </InfoBox>
        </Grid>

        <h3 className="text-lg font-display font-bold text-app-text mt-8 mb-4 flex items-center gap-2">
          <Factory size={20} className="text-app-accent" />
          The "Sankey" Energy Flow Diagram
        </h3>
        <p className="mb-6">During an audit, an auditor prepares an <strong>Energy Flow Diagram</strong>. It maps the transition from Input to Useful Work.</p>
        <div className="bg-app-surface border border-app-border rounded-2xl p-8 my-8 text-center uppercase tracking-[0.2em] text-[10px] font-mono font-bold text-app-accent flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 border border-app-accent/30 rounded-lg">100% INPUT</div>
            <ArrowRight className="text-app-muted" />
            <div className="p-3 bg-app-accent/10 border border-app-accent rounded-lg">80% USEFUL WORK</div>
          </div>
          <div className="w-px h-8 bg-app-accent/30" />
          <div className="p-3 border border-red-500/30 text-red-400 rounded-lg">20% HEAT LOSS (WASTE)</div>
        </div>
      </Section>

      <Section title="Topic 2: Place of Audit" moduleLabel="Module 02">
        <p>An audit is not just done at the electricity meter; it covers the <strong>entire facility</strong>.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          {[
            { t: "Electrical", d: "Transformers, PF, Wiring", i: Cpu },
            { t: "Lighting", d: "Tube lights, LEDs, Over-illumination", i: Lightbulb },
            { t: "Motors", d: "Pumps, Fans, Compressors (60-70%)", i: Zap },
            { t: "Thermal", d: "Boilers, Furnaces, Insulation", i: Activity },
            { t: "AC System", d: "Chillers, Cooling Towers", i: ShieldCheck },
            { t: "Compressed Air", d: "Detecting air leaks", i: Target }
          ].map((item, idx) => (
            <div key={idx} className="bg-app-surface border border-app-border p-4 rounded-xl group hover:border-app-accent transition-colors">
              <item.i className="text-app-accent mb-3 opacity-60 group-hover:opacity-100" size={20} />
              <h4 className="font-bold text-sm text-app-text mb-1">{item.t}</h4>
              <p className="text-[10px] text-app-muted uppercase font-mono">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Topic 3: Energy Audit Methodology" moduleLabel="Module 02">
        <p>The <strong>Step-by-Step</strong> procedure followed by auditors. A full 5-mark question is almost guaranteed from this.</p>
        <div className="bg-app-surface border border-app-border rounded-2xl p-8 my-8 text-center uppercase tracking-[0.2em] text-[10px] font-mono font-bold text-app-accent">
          Pre-audit → Survey → Measurement → Analysis → Recommendation → Report
        </div>
        
        <h3 className="text-xl font-display font-bold mb-6 text-app-text flex items-center gap-2">
          <ChevronRight size={18} className="text-app-accent" />
          The 6 Main Stages
        </h3>
        <List items={[
          "Stage 1: Pre-Audit Preparation: Collecting 1 year of bills, layout, and production schedules.",
          "Stage 2: Walk-Through Survey: Initial site visit to spot obvious waste (lights ON in day).",
          "Stage 3: Measurement & Monitoring: Using instruments (Power Analyzers, Lux Meters).",
          "Stage 4: Data Analysis: Calculating energy consumption and equipment efficiency.",
          "Stage 5: Identification of ESO: Suggesting Energy Saving Opportunities (Capacitor banks, VFDs).",
          "Stage 6: Report Preparation: Final proposal with costs, savings, and payback periods."
        ]} />
      </Section>

      <Section title="Topic 4: Financial Analysis" moduleLabel="Module 02">
        <p>Proving economic feasibility. No industry will implement a project if <strong>Saving &lt; Investment</strong>.</p>
        <Grid>
          <InfoBox title="Payback Period (PBP)" type="numerical" tag="Core Logic">
            <strong>PBP = Initial Investment ÷ Annual Savings</strong><br />
            Example: Cost = ₹20,000 | Saving = ₹10,000/yr.<br />
            PBP = 2 Years. (Standard threshold: ≤ 3 years).
          </InfoBox>
          <div className="bg-app-surface border border-app-border rounded-xl p-5">
            <h4 className="font-mono font-bold text-[10px] text-app-accent uppercase mb-4 tracking-widest">Decision Matrix</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-app-border pb-1"><span>{` < 1 Year`}</span><span className="text-emerald-400 font-bold">Excellent</span></div>
              <div className="flex justify-between border-b border-app-border pb-1"><span>1 - 3 Years</span><span className="text-app-accent">Acceptable</span></div>
              <div className="flex justify-between pb-1"><span>{` > 5 Years`}</span><span className="text-red-400">Rejected</span></div>
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 5: Sensitivity Analysis" moduleLabel="Module 02">
        <InfoBox title="Risk Management" type="viva" tag="Concept">
          Studying how results change when input parameters (electricity prices, fuel costs, run time) change. 
          <strong>"What if electricity becomes ₹6 instead of ₹8?"</strong>
        </InfoBox>
      </Section>

      <Section title="Topic 6: Project Financing Options" moduleLabel="Module 02">
        <p>Ways to arrange capital for large-scale energy projects.</p>
        <Grid>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-app-accent mb-2">1. Self Financing</h4>
            <p className="text-xs text-app-muted leading-relaxed">Using internal savings/profits. No interest, but drains cash reserves.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-app-accent mb-2">2. Bank Loans</h4>
            <p className="text-xs text-app-muted leading-relaxed">Repaying EMI from the actual energy savings achieved monthly.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-app-accent mb-2">3. Leasing</h4>
            <p className="text-xs text-app-muted leading-relaxed">Renting equipment from third parties. No high initial investment.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm border-l-4 border-l-app-accent">
            <h4 className="font-bold text-emerald-400 mb-2">4. ESCO Financing ⭐</h4>
            <p className="text-xs text-app-muted leading-relaxed"><strong>Energy Service Company</strong> installs equipment and is paid solely from a share of the savings!</p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 7: Monitoring & Training" moduleLabel="Module 02">
        <Grid>
          <InfoBox title="Energy Monitoring" type="important">
            Continuous measurement (daily/hourly) to detect abnormal consumption early. 
            <strong>Audit is a snapshot; Monitoring is a video.</strong>
          </InfoBox>
          <InfoBox title="Energy Training" type="viva">
            Educating employees on proper habits (switching off idle machines). 
            <strong>Efficient machines + Bad habits = 0 Savings.</strong>
          </InfoBox>
        </Grid>
      </Section>
    </UnitLayout>
  );
}

// Helper icons needed but might be missing
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
