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

      <Section title="Topic 3: Types of Energy Audit (Comparative Study)" moduleLabel="Module 02">
        <p>In industry and exams, we differentiate audits based on depth and complexity.</p>
        
        <div className="overflow-x-auto my-6 border border-app-border rounded-xl">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-app-surface border-b border-app-border">
                <th className="p-3 font-bold text-app-accent">Feature</th>
                <th className="p-3 font-bold text-app-accent">Preliminary Audit</th>
                <th className="p-3 font-bold text-app-accent">Detailed Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app-border">
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Purpose</td>
                <td className="p-3 text-app-muted">To identify major waste areas</td>
                <td className="p-3 text-emerald-400 font-semibold">To provide technical and financial plan</td>
              </tr>
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Duration</td>
                <td className="p-3 text-app-muted">1 to 3 days</td>
                <td className="p-3 text-emerald-400 font-semibold">2 to 6 weeks</td>
              </tr>
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Instrumentation</td>
                <td className="p-3 text-app-muted">Visual & handheld tools only</td>
                <td className="p-3 text-emerald-400 font-semibold">Detailed measurements (Power Analyzers)</td>
              </tr>
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Accuracy</td>
                <td className="p-3 text-app-muted">Low to Medium (~10%)</td>
                <td className="p-3 text-emerald-400 font-semibold">High (~95% accuracy)</td>
              </tr>
              <tr className="hover:bg-app-text/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Investment Focus</td>
                <td className="p-3 text-app-muted">Low-cost/Behavioral changes</td>
                <td className="p-3 text-emerald-400 font-semibold">Capital intensive technology upgrades</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Topic 4: Detailed Audit Methodology (The 10 Steps)" moduleLabel="Module 02">
        <p>A detailed engineering audit is carried out in three distinct phases.</p>
        
        <div className="space-y-8 my-10">
          <div className="relative pl-8 border-l-2 border-app-accent/20">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-app-bg border-2 border-app-accent" />
            <h4 className="text-app-accent font-bold text-xs uppercase mb-4">Phase 1: Pre-Audit Phase</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 1: Planning</p>
                <p className="text-xs text-app-muted">Defining scope with management and forming the audit team.</p>
              </div>
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 2: Walk-through Audit</p>
                <p className="text-xs text-app-muted">Visual inspection to identify focus areas (Compressors, Chillers, Furnaces).</p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-app-accent/20">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-app-bg border-2 border-app-accent" />
            <h4 className="text-app-accent font-bold text-xs uppercase mb-4">Phase 2: Audit Execution Phase</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 3: Secondary Data</p>
                <p className="text-xs text-app-muted">Collecting floor plans, bills, and production records.</p>
              </div>
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 4: Primary Data Measurement</p>
                <p className="text-xs text-app-muted">Using Power Analyzers, Flue Gas Analyzers, and Lux meters.</p>
              </div>
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 5: Mass & Energy Balance</p>
                <p className="text-xs text-app-muted">Ensuring Total Input = Total Output + Internal Losses.</p>
              </div>
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 6: Efficiency Analysis</p>
                <p className="text-xs text-app-muted">Calculating current COP of ACs, \% efficiency of Motors/Boilers.</p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-app-accent/20">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-app-bg border-2 border-app-accent" />
            <h4 className="text-app-accent font-bold text-xs uppercase mb-4">Phase 3: Post-Audit Phase</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 8: Payback & Financials</p>
                <p className="text-xs text-app-muted">Analyzing ROI, NPV, and IRR for proposed machines.</p>
              </div>
              <div className="bg-app-surface p-4 rounded-xl border border-app-border">
                <p className="font-bold text-sm mb-1">Step 10: Implementation</p>
                <p className="text-xs text-app-muted">Final follow-up to check if implemented ESMs are saving energy.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Topic 5: Formulating the Audit Report" moduleLabel="Module 02">
        <p>A professional report is the main deliverable of an auditor. It must be structured for both technical managers and financial owners.</p>
        
        <InfoBox title="Professional Report Structure" type="important" tag="Report Index">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono uppercase tracking-tight">
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 1. Executive Summary</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 2. Background of Industry</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 3. Current Data (Baseline)</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 4. Major Observations</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 5. Analysis of Equipment</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 6. Key ESM Proposals</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 7. Economic Calculations</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-app-accent rounded-full" /> 8. Implementation Schedule</li>
          </ul>
        </InfoBox>
      </Section>

      <Section title="Topic 6: Advanced Financial Metrics" moduleLabel="Module 02">
        <p>Beyond simple payback, large industries use time-value of money metrics.</p>
        
        <Grid>
          <div className="bg-app-surface border border-app-border rounded-xl p-5">
            <h4 className="font-bold text-app-accent text-sm mb-2">1. ROI (Return on Investment)</h4>
            <p className="text-[11px] text-app-muted italic mb-3">Formula: (Annual Saving ÷ Cost) × 100</p>
            <p className="text-xs text-app-text/80 leading-relaxed">Higher ROI means a more profitable project. Usually, ROI {` > `} 15\% is considered good.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5">
            <h4 className="font-bold text-app-accent text-sm mb-2">2. NPV (Net Present Value)</h4>
            <p className="text-[11px] text-app-muted italic mb-3">Accounts for inflation and interest.</p>
            <p className="text-xs text-app-text/80 leading-relaxed">If NPV is positive, the project is truly profitable over its lifetime. It considers that ₹1 today is worth more than ₹1 after 5 years.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5">
            <h4 className="font-bold text-app-accent text-sm mb-2">3. IRR (Internal Rate of Return)</h4>
            <p className="text-[11px] text-app-muted italic mb-3">Discount rate where NPV = 0.</p>
            <p className="text-xs text-app-text/80 leading-relaxed">Industries compare IRR to bank interest. If Project IRR is 20\% and Bank Interest is 8\%, the project is highly recommended.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5">
            <h4 className="font-bold text-app-accent text-sm mb-2">4. Payback Cycle</h4>
            <p className="text-[11px] text-app-muted italic mb-3">Investment / Savings.</p>
            <p className="text-xs text-app-text/80 leading-relaxed">Simplest way to see how fast we get our money back. Does not account for time value of money.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 7: Sensitivity Analysis" moduleLabel="Module 02">
        <InfoBox title="Risk Management" type="viva" tag="Concept">
          Studying how results change when input parameters (electricity prices, fuel costs, run time) change. 
          <strong>"What if electricity becomes ₹6 instead of ₹8?"</strong>
        </InfoBox>
      </Section>

      <Section title="Topic 8: Project Financing Options" moduleLabel="Module 02">
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

      <Section title="Topic 9: Monitoring & Training" moduleLabel="Module 02">
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
      <Section title="Topic 10: Benchmarking & SEC" moduleLabel="Module 02">
        <p>Benchmarking is the comparison of energy performance of a facility against other similar facilities or against its own past performance.</p>
        
        <InfoBox title="S.E.C. (Specific Energy Consumption)" type="numerical" tag="The KPI">
          <strong>SEC = Total Energy Consumed / Total Units Produced</strong><br />
          Example: kWh per Ton of Cement, or MCal per Liter of Beer.<br />
          Lower SEC means higher energy efficiency.
        </InfoBox>

        <Grid>
          <div className="bg-app-surface border border-app-border rounded-xl p-5">
            <h4 className="font-bold text-app-accent mb-2">1. Internal Benchmarking</h4>
            <p className="text-xs text-app-muted">Comparing two units or departments within the same factory. E.g., comparing Shift A production vs Shift B.</p>
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5">
            <h4 className="font-bold text-app-accent mb-2">2. External Benchmarking</h4>
            <p className="text-xs text-app-muted">Comparing your plant's SEC with the best plant in the world (Global Best) or with the industry average.</p>
          </div>
        </Grid>

        <InfoBox title="Why Benchmark?" type="important" tag="Analysis">
          Without benchmarking, we don't know if our plant is efficient. If our SEC is 100 but the global best is 60, we know we have 40% room for improvement!
        </InfoBox>
      </Section>
      <Section title="Topic 11: Specialized Audit Instruments" moduleLabel="Module 02">
        <p>A professional auditor carries a toolkit of specialized devices to measure parameters without shutting down the plant.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-app-surface border border-app-border p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Activity size={20} />
              </div>
              <h4 className="font-bold text-sm">Ultrasonic Leak Detector</h4>
            </div>
            <p className="text-xs text-app-muted leading-relaxed">
              Detects high-frequency "hissing" of air through tiny holes in compressed air lines. Saves thousands in compressor energy.
            </p>
          </div>

          <div className="bg-app-surface border border-app-border p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Target size={20} />
              </div>
              <h4 className="font-bold text-sm">Infrared Pyrometer</h4>
            </div>
            <p className="text-xs text-app-muted leading-relaxed">
              Measures surface temperature of boilers or steam pipes from a distance using laser, showing if insulation is missing.
            </p>
          </div>

          <div className="bg-app-surface border border-app-border p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <BarChart3 size={20} />
              </div>
              <h4 className="font-bold text-sm">Pitot Tube</h4>
            </div>
            <p className="text-xs text-app-muted leading-relaxed">
              Inserted into ducts or pipes to measure velocity and flow of gases or liquids. Used to check fan and pump efficiency.
            </p>
          </div>

          <div className="bg-app-surface border border-app-border p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-app-accent/10 rounded-lg text-app-accent">
                <Zap size={20} />
              </div>
              <h4 className="font-bold text-sm">Power Analyzer</h4>
            </div>
            <p className="text-xs text-app-muted leading-relaxed">
              The "heart" of electrical auditing. Measures Harmonics, Power Factor, V, I, and kW simultaneously over 24 hours.
            </p>
          </div>
        </div>
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
