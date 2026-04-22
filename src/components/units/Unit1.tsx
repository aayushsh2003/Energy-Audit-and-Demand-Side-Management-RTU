import React from 'react';
import { AlertCircle } from 'lucide-react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit1() {
  return (
    <UnitLayout title="Unit 1: Energy Scenarios">
      <Section title="Topic 1: Energy Conservation" moduleLabel="Module 01">
        <p>
          <strong>Energy Conservation</strong> means using energy carefully so that waste is reduced, 
          without reducing our work or comfort. It does NOT mean "stop using electricity"—it means <strong>use smartly</strong>.
        </p>
        
        <InfoBox title="Simple Example (Best for Viva)" type="example" tag="Viva Prep">
          Instead of leaving a fan ON in an empty room or using a 100W bulb, we switch OFF when not needed and use LED bulbs. 
          Result: Work remains the same → Electricity used decreases → Bill decreases → Environment is safe.
        </InfoBox>

        <h3 className="text-lg font-bold text-app-text mt-8 mb-4">Real Life Examples</h3>
        <div className="overflow-x-auto my-6 border border-app-border rounded-xl">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-app-surface border-b border-app-border">
                <th className="p-3 font-bold text-app-accent">Situation</th>
                <th className="p-3 font-bold text-app-accent">Wrong Way</th>
                <th className="p-3 font-bold text-app-accent">Energy Conservation Way</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app-border">
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Lighting</td>
                <td className="p-3 text-app-muted line-through">Incandescent bulb</td>
                <td className="p-3 text-emerald-400 font-semibold">LED bulb</td>
              </tr>
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-medium text-app-text">AC</td>
                <td className="p-3 text-app-muted line-through">18°C temperature</td>
                <td className="p-3 text-emerald-400 font-semibold">24-26°C temperature</td>
              </tr>
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Mobile</td>
                <td className="p-3 text-app-muted line-through">Charging overnight</td>
                <td className="p-3 text-emerald-400 font-semibold">Remove after full charge</td>
              </tr>
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-3 font-medium text-app-text">Vehicles</td>
                <td className="p-3 text-app-muted line-through">Single person car</td>
                <td className="p-3 text-emerald-400 font-semibold">Public transport / Carpool</td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoBox title="Numerical Understanding" type="numerical" tag="Exam Logic">
          A 100W bulb runs 10 hours daily:<br />
          Energy = Power × Time = 100W × 10h = 1000 Wh = <strong>1 unit/day</strong>.<br /><br />
          If replaced by 10W LED:<br />
          10W × 10h = 100 Wh = <strong>0.1 unit/day</strong>.<br />
          Saving = 0.9 unit/day. In 1 month: 0.9 × 30 = <strong>27 units saved</strong>.
        </InfoBox>

        <Grid>
          <InfoBox title="Why It Matters" type="important" tag="Environment">
            Electricity generation uses coal → CO₂ gas → Global warming. <br />
            <strong>Conservation = Pollution Reduction + Cost Reduction</strong>.
          </InfoBox>
          <InfoBox title="Industrial Example" type="example" tag="Industrial">
            Energy auditor finds: "Air compressor leak → 20% electricity waste". Repair saves the company lakhs of rupees.
          </InfoBox>
        </Grid>

        <InfoBox title="How to explain in Viva" type="viva" tag="Viva Answer">
          Energy conservation means reducing the unnecessary consumption of energy while maintaining the same level of service or output. It can be achieved through efficient appliances, proper operating practices, and awareness. For example, replacing incandescent lamps with LED lamps reduces electricity consumption by about 80% without affecting lighting quality.
        </InfoBox>

        <div className="bg-app-accent/5 border border-app-accent/20 rounded-xl p-6 my-8">
          <h4 className="text-app-accent font-bold mb-3 flex items-center gap-2">
            <AlertCircle size={18} /> Very Important Difference (EXAM QUESTION)
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-app-surface p-3 rounded-lg border border-app-border">
              <p className="font-bold text-app-accent uppercase text-[10px] mb-1">Energy Conservation</p>
              <p className="text-app-text/70"><strong>Behavioral:</strong> E.g., Switching OFF the fan when not used.</p>
            </div>
            <div className="bg-app-surface p-3 rounded-lg border border-app-border">
              <p className="font-bold text-app-accent uppercase text-[10px] mb-1">Energy Efficiency</p>
              <p className="text-app-text/70"><strong>Technological:</strong> E.g., Using a 5-star rated fan instead of local.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Topic 2: Energy Audit" moduleLabel="Module 01">
        <p>
          <strong>Energy Audit</strong> is a systematic inspection and analysis of energy use in a building, plant, or organization to identify energy waste and suggest ways to reduce it.
        </p>

        <Grid>
          <InfoBox title="The Doctor Analogy" type="viva" tag="Analogy">
            Human Body → Doctor → Diagnosis → Medicine<br />
            Factory → Energy Auditor → Energy Loss → Solution
          </InfoBox>
          <InfoBox title="Main Objectives" type="important" tag="Goals">
            1. Reduce electricity bills<br />
            2. Reduce fuel consumption<br />
            3. Reduce pollution<br />
            4. Improve efficiency & productivity
          </InfoBox>
        </Grid>

        <h3 className="text-xl font-bold text-app-text mb-4">Detailed Methodology (The Ten Steps)</h3>
        <p className="text-sm text-app-muted mb-4 uppercase tracking-[0.1em] font-mono">Standard procedure for a Detailed Energy Audit:</p>
        <div className="space-y-3 mb-10">
          {[
            { phase: "Pre-Audit Phase", step: "1. Scope of Audit & Instrument setup" },
            { phase: "Audit Phase (Data Collection)", step: "2. Historical data analysis (Past 1-2 years bills)" },
            { phase: "Audit Phase (Field Study)", step: "3. Walk-through inspection & Safety check" },
            { phase: "Audit Phase (Measurement)", step: "4. Measurement of Voltage, Current, Lux, Temp" },
            { phase: "Audit Phase (Mass Balance)", step: "5. Energy & Material balance calculation" },
            { phase: "Audit Phase (Identification)", step: "6. Identification of Energy Saving Measures (ESMs)" },
            { phase: "Audit Phase (Analysis)", step: "7. Financial analysis (Payback period calculation)" },
            { phase: "Audit Phase (Reporting)", step: "8. Preparation of Audit Report & Recommendations" },
            { phase: "Post-Audit Phase", step: "9. Implementation of recommended ESMs" },
            { phase: "Post-Audit Phase", step: "10. Monitoring and periodic review" }
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-app-surface border border-app-border rounded-lg hover:border-app-accent/30 transition-colors">
              <span className="w-8 h-8 rounded-full bg-app-accent/10 flex items-center justify-center text-app-accent font-mono text-xs font-bold border border-app-accent/20">
                {i+1}
              </span>
              <div>
                <p className="text-[10px] font-mono font-bold text-app-muted uppercase tracking-tighter opacity-50">{s.phase}</p>
                <p className="text-sm font-medium text-app-text">{s.step}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-app-text mb-4">Types of Energy Audit</h3>
        <Grid>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-app-accent mb-2">A) Preliminary (Walk-through)</h4>
            <p className="text-sm italic mb-3 text-app-muted">Basic inspection (1–3 days)</p>
            <List items={[
              "Checks electricity bills",
              "Observes equipment visually",
              "Talks to operators",
              "Finds major waste areas quickly"
            ]} />
          </div>
          <div className="bg-app-surface border border-app-border rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-app-accent mb-2">B) Detailed Audit</h4>
            <p className="text-sm italic mb-3 text-app-muted">Technical investigation (2–6 weeks)</p>
            <List items={[
              "Measures V, I, PF, and Temp",
              "Uses measuring instruments",
              "Calculates exact losses",
              "Accurate savings calculation"
            ]} />
          </div>
        </Grid>
      </Section>

      <Section title="Topic 3: Bureau of Energy Efficiency (BEE)" moduleLabel="Module 01">
        <p>BEE is a statutory body under the Ministry of Power, Govt. of India, established under the <strong>Energy Conservation Act, 2001</strong>.</p>
        
        <InfoBox title="BEE Role & Programs" type="important" tag="Governance">
          <p className="mb-4 text-sm leading-relaxed">The BEE's mission is to develop policies and strategies with a focus on self-regulation and market principles.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-app-bg/50 p-4 rounded-lg border border-app-border">
              <p className="text-app-accent font-bold text-xs uppercase mb-2">S&L Program</p>
              <p className="text-[11px] text-app-text/70">Standards & Labeling: The familiar "Star Labels" on ACs, Fridges, and Fans.</p>
            </div>
            <div className="bg-app-bg/50 p-4 rounded-lg border border-app-border">
              <p className="text-app-accent font-bold text-xs uppercase mb-2">ECBC</p>
              <p className="text-[11px] text-app-text/70">Energy Conservation Building Code: Minimum energy requirements for new commercial buildings.</p>
            </div>
            <div className="bg-app-bg/50 p-4 rounded-lg border border-app-border">
              <p className="text-app-accent font-bold text-xs uppercase mb-2">PAT Scheme</p>
              <p className="text-[11px] text-app-text/70">Perform, Achieve and Trade: Targeted for high-usage industries (Designated Consumers).</p>
            </div>
            <div className="bg-app-bg/50 p-4 rounded-lg border border-app-border">
              <p className="text-app-accent font-bold text-xs uppercase mb-2">Certified Auditors</p>
              <p className="text-[11px] text-app-text/70">BEE conducts National Certification Exams for Energy Auditors and Managers.</p>
            </div>
          </div>
        </InfoBox>
      </Section>

      <Section title="Topic 4: Energy Scenario & Intensity" moduleLabel="Module 01">
        <p>
          Energy Scenario is the overall condition of energy production, availability, consumption, and future demand.
        </p>

        <InfoBox title="Energy Intensity (EXAM CRITICAL)" type="important" tag="Metric">
          <strong>Energy Intensity = Energy Consumption ÷ Gross Domestic Product (GDP)</strong><br />
          It indicates how "efficiently" a country produces money relative to its energy use. 
          <p className="mt-2 text-xs text-app-text/60 italic">Note: High Intensity means the economy is inefficient or heavily industrial. Low Intensity means the economy is efficient or service-based (like IT).</p>
        </InfoBox>

        <Grid>
          <InfoBox title="World vs India" type="important" tag="Analysis">
            <p className="mb-2 uppercase text-[10px] font-bold text-slate-400">World Reality</p>
            <p className="mb-4">Most energy comes from limited Fossil Fuels (Coal, Oil, Gas). The world is shifting to Solar, Wind, and Hydro to fight Global Warming.</p>
            
            <p className="mb-2 uppercase text-[10px] font-bold text-slate-400">India's Reality</p>
            <p>As a <strong>developing country</strong>, our demand is increasing rapidly. India is now the 3rd largest energy consumer in the world.</p>
          </InfoBox>
          <InfoBox title="Per Capita Consumption (Comparison)" type="numerical" tag="Exam Data">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-app-border pb-1"><span>USA (Avg)</span> <span>~12,000 kWh</span></div>
              <div className="flex justify-between border-b border-app-border pb-1"><span>World Avg</span> <span>~3,000 kWh</span></div>
              <div className="flex justify-between border-b border-app-border pb-1 text-app-accent font-bold"><span>India</span> <span>~1,200 kWh</span></div>
              <p className="text-[10px] text-app-muted mt-2">India's per capita is low, but growing at ~5-6% annually.</p>
            </div>
          </InfoBox>
        </Grid>

        <h3 className="text-lg font-bold text-app-text mb-4">India's Major Energy Sources</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <li className="bg-app-surface p-3 rounded-lg border border-app-border text-sm"><strong>Coal:</strong> Main electricity source</li>
          <li className="bg-app-surface p-3 rounded-lg border border-app-border text-sm"><strong>Oil:</strong> Transport sector</li>
          <li className="bg-app-surface p-3 rounded-lg border border-app-border text-sm"><strong>Solar/Wind:</strong> Rapidly growing</li>
        </ul>

        <InfoBox title="Main Issues in India" type="example" tag="Challenges">
          1. <strong>Demand &gt; Supply:</strong> Leads to load shedding.<br />
          2. <strong>Oil Dependency:</strong> Heavy imports from Middle East cause inflation.<br />
          3. <strong>T&D Losses:</strong> About 20-25% energy is lost in old wires/theft.
        </InfoBox>
      </Section>

      <Section title="Topic 5: Energy Consumption Patterns" moduleLabel="Module 01">
        <InfoBox title="Energy Consumption vs GDP" type="important" tag="Analysis">
          Economic growth (GDP) is directly linked to energy consumption. As India aims to become a 5 Trillion dollar economy, energy demand will double.
        </InfoBox>

        <h3 className="text-lg font-bold text-app-text mb-4">India's Sector-wise Energy Use (Approx.)</h3>
        <div className="space-y-4 my-6">
          {[
            { sector: "Industry", percentage: "45%", details: "Heavy machines, foundries, cement/steel plants." },
            { sector: "Residential", percentage: "25%", details: "Lighting, Fans, ACs, Charging devices." },
            { sector: "Agriculture", percentage: "18%", details: "Pumping sets, irrigation systems." },
            { sector: "Commercial", percentage: "12%", details: "Shopping malls, IT parks, Hospitals." }
          ].map((s, i) => (
            <div key={i} className="group relative">
              <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-bold text-app-text">{s.sector}</span>
                <span className="text-app-accent font-mono text-xs">{s.percentage}</span>
              </div>
              <div className="h-1.5 w-full bg-app-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-app-accent group-hover:brightness-125 transition-all duration-500" 
                  style={{ width: s.percentage }}
                />
              </div>
              <p className="text-[10px] text-app-muted mt-1 opacity-60">{s.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Topic 6: Energy Security" moduleLabel="Module 01">
        <p><strong>Energy Security</strong> = Continuous availability of sufficient energy at an affordable price without interruption.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {[
            { p: "Availability", d: "Sufficient quantity exists" },
            { p: "Accessibility", d: "Reaches everyone (villages)" },
            { p: "Affordability", d: "People can pay for it" },
            { p: "Sustainability", d: "Eco-friendly sources" }
          ].map((item, i) => (
            <div key={i} className="bg-app-surface border border-app-border p-4 rounded-xl text-app-text shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-1 bg-app-accent opacity-20 group-hover:opacity-100 transition-opacity" />
              <p className="font-mono font-bold text-[10px] uppercase text-app-accent mb-1">{item.p}</p>
              <p className="text-[11px] leading-tight text-app-text/70">{item.d}</p>
            </div>
          ))}
        </div>

        <InfoBox title="Two Levels of Security" type="viva" tag="Core Logic">
          1. <strong>Energy Independence:</strong> Reducing dependency on foreign oil/gas.<br />
          2. <strong>Supply Reliability:</strong> Avoiding grid failures and blackouts.
        </InfoBox>
      </Section>

      <Section title="Topic 7: Energy Strategy" moduleLabel="Module 01">
        <p>A long-term govt plan (10–30 years) to meet future energy needs efficiently.</p>
        <Grid>
          <InfoBox title="India's Approach" type="important" tag="Policy">
            1. Build more power plants & solar parks.<br />
            2. Promote Star-rated appliances (BEE).<br />
            3. Smart Grids & Electric Vehicles (FAME scheme).<br />
            4. Diversify fuel sources (Nuclear, Hydro).
          </InfoBox>
          <InfoBox title="Energy saved = Energy generated" type="viva" tag="Mantra">
            Saving 1 unit at home is better than generating 1.2 units at the plant. 
            <p className="mt-2 text-xs italic opacity-60">Wait, why? Because transmission and distribution (T&D) losses are avoided when you save energy locally.</p>
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 8: Clean Development Mechanism (CDM)" moduleLabel="Module 01">
        <p>Originating from the <strong>Kyoto Protocol (1997)</strong>, CDM allows developed countries to invest in green projects in developing countries.</p>
        
        <InfoBox title="What is a Carbon Credit?" type="numerical" tag="Exam Fact">
          <strong>1 CER (Certified Emission Reduction) = 1 ton of CO₂ avoided.</strong><br />
          These credits are tradeable. For example, a village installing biogas can sell its "saved carbon" to an industry in Europe.
        </InfoBox>

        <Grid>
          <div className="bg-app-surface border border-app-border p-4 rounded-xl">
             <h4 className="text-xs font-bold text-app-accent uppercase mb-3">Benefits to India</h4>
             <List items={[
              "New clean technologies flow into India",
              "Helps fund solar and wind farms",
              "Creates 'Green Jobs' in villages",
              "Reduces local pollution levels"
            ]} />
          </div>
          <div className="bg-app-surface border border-app-border p-4 rounded-xl">
             <h4 className="text-xs font-bold text-app-accent uppercase mb-3">Global Impact</h4>
             <List items={[
              "Fight against Global Warming",
              "Reduces total Earth greenhouse gases",
              "Promotes sustainable development",
              "Cost-effective emission reduction"
            ]} />
          </div>
        </Grid>
      </Section>

      <Section title="Topic 9: Energy Management & Role of Manager" moduleLabel="Module 01">
        <p><strong>Energy Management</strong> is the proactive, organized and systematic coordination of procurement, conversion, and use of energy.</p>
        
        <div className="bg-app-accent/5 border border-app-accent/20 rounded-xl p-6 my-8">
          <h4 className="text-app-accent font-bold mb-4">Role of an Energy Manager (VIVA FAVORITE)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <div>
                <p className="font-bold text-app-text mb-1">1. Policy Maker</p>
                <p className="text-app-text/60 text-xs">Prepares energy policies for the company.</p>
              </div>
              <div>
                <p className="font-bold text-app-text mb-1">2. Data Analyst</p>
                <p className="text-app-text/60 text-xs">Analyzes monthly energy consumption reports.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-app-text mb-1">3. Project Coordinator</p>
                <p className="text-app-text/60 text-xs">Manages implementation of audit suggestions.</p>
              </div>
              <div>
                <p className="font-bold text-app-text mb-1">4. Awareness Leader</p>
                <p className="text-app-text/60 text-xs">Trains staff and workers to save electricity.</p>
              </div>
            </div>
          </div>
        </div>

        <InfoBox title="Energy Audit vs Energy Management" type="important" tag="Contrast">
          <strong>Audit:</strong> Identifying where energy is wasted (The Inspection).<br />
          <strong>Management:</strong> Continuously maintaining efficiency (The Process).
        </InfoBox>
      </Section>

      <Section title="Topic 10: ISO 50001 (Energy Management System)" moduleLabel="Module 01">
        <p>ISO 50001 is the international standard for <strong>Energy Management Systems (EnMS)</strong>. It provides a framework for organizations to manage and improve their energy performance.</p>
        
        <InfoBox title="The PDCA Cycle" type="important" tag="Exam Concept">
          ISO 50001 follows the <strong>Plan-Do-Check-Act</strong> cycle:
          <ul className="mt-2 space-y-1 text-xs">
            <li><strong>Plan:</strong> Conduct energy review and set baselines.</li>
            <li><strong>Do:</strong> Implement energy management action plans.</li>
            <li><strong>Check:</strong> Monitor and measure processes.</li>
            <li><strong>Act:</strong> Take actions to continually improve energy performance.</li>
          </ul>
        </InfoBox>
        
        <div className="bg-app-surface border border-app-border p-5 rounded-2xl">
           <h4 className="text-app-accent font-bold text-sm mb-2">Why industries take ISO 50001?</h4>
           <p className="text-xs text-app-text/70 leading-relaxed">
             It is not just for saving energy; it is a global certificate. Companies with this certificate are trusted by international clients as they prove they are "Green" and "Efficient".
           </p>
        </div>
      </Section>
    </UnitLayout>
  );
}
