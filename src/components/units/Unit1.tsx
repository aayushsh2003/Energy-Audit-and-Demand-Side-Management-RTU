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

        <InfoBox title="Energy Audit Instruments" type="important" tag="Instrumentation">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="font-bold border-b pb-1">Instrument</div>
            <div className="font-bold border-b pb-1">Purpose</div>
            <div>Clamp meter</div><div>Measure current flow</div>
            <div>Power analyzer</div><div>Measure power & PF</div>
            <div>Lux meter</div><div>Check lighting levels</div>
            <div>Flue gas analyzer</div><div>Check Boiler efficiency</div>
          </div>
        </InfoBox>

        <InfoBox title="Viva Answer (Memorize This)" type="viva" tag="Viva Answer">
          Energy audit is a systematic examination of energy use in a facility to identify energy losses and recommend measures to improve efficiency and reduce energy consumption. It helps in cost saving, energy conservation, and environmental protection.
        </InfoBox>
      </Section>

      <Section title="Topic 3: Energy Scenario" moduleLabel="Module 01">
        <p>
          Energy Scenario is the overall condition of energy production, availability, consumption, and future demand in a country or the world.
        </p>

        <InfoBox title="World vs India" type="important" tag="Analysis">
          <p className="mb-2 uppercase text-[10px] font-bold text-slate-400">World Reality</p>
          <p className="mb-4">Most energy comes from limited Fossil Fuels (Coal, Oil, Gas). The world is shifting to Solar, Wind, and Hydro to fight Global Warming.</p>
          
          <p className="mb-2 uppercase text-[10px] font-bold text-slate-400">India's Reality</p>
          <p>As a <strong>developing country</strong>, our demand is increasing rapidly due to population growth, urbanization, and digitalization (e.g., every house now has multiple chargers/ACs).</p>
        </InfoBox>

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

      <Section title="Topic 4: Energy Consumption" moduleLabel="Module 01">
        <InfoBox title="What is Per Capita Consumption?" type="numerical" tag="Exam Special">
          <strong>Per Capita Consumption = Total energy consumption ÷ Population</strong><br />
          India's total consumption is high (due to size), but per capita is still low compared to the USA/Japan.
        </InfoBox>

        <h3 className="text-lg font-bold text-app-text mb-4">Where is Energy Used?</h3>
        <Grid>
          <div className="bg-app-surface p-4 rounded-xl border border-app-border flex flex-col gap-2">
            <span className="text-app-accent font-bold text-sm">A) Domestic</span>
            <span className="text-xs text-app-muted">Fans, Lights, AC, Geysers at home.</span>
          </div>
          <div className="bg-app-surface p-4 rounded-xl border border-app-border flex flex-col gap-2">
            <span className="text-app-accent font-bold text-sm">B) Industrial</span>
            <span className="text-xs text-app-muted">Motors, Boilers, Furnaces (Uses maximum energy).</span>
          </div>
          <div className="bg-app-surface p-4 rounded-xl border border-app-border flex flex-col gap-2">
            <span className="text-app-accent font-bold text-sm">C) Commercial</span>
            <span className="text-xs text-app-muted">Malls, Hospitals, Hotels (High AC/Lighting demand).</span>
          </div>
          <div className="bg-app-surface p-4 rounded-xl border border-app-border flex flex-col gap-2">
            <span className="text-app-accent font-bold text-sm">D) Transportation</span>
            <span className="text-xs text-app-muted">Fuel used in cars, buses, trains, planes.</span>
          </div>
        </Grid>
      </Section>

      <Section title="Topic 5: Energy Security" moduleLabel="Module 01">
        <p><strong>Energy Security</strong> = Continuous availability of sufficient energy at an affordable price without interruption (No power cuts, no sudden price rises).</p>
        
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

        <InfoBox title="Renewable Energy = Strong Security" type="important" tag="Strategy">
          Using Solar and Wind leads to local production and reduces dependency on costly foreign oil imports.
        </InfoBox>
      </Section>

      <Section title="Topic 6: Energy Strategy" moduleLabel="Module 01">
        <p>A long-term govt plan (10–30 years) to meet future energy needs efficiently.</p>
        <Grid>
          <InfoBox title="India's Approach" type="important" tag="Policy">
            1. Build more power plants & solar parks.<br />
            2. Promote Star-rated appliances.<br />
            3. Smart Grids & Electric Vehicles.<br />
            4. Diversify fuel sources (Nuclear, Hydro).
          </InfoBox>
          <InfoBox title="The Core Mantra" type="viva" tag="Mantra">
            <strong>"Energy saved = Energy generated"</strong><br />
            Saving 1 unit at home is better than generating 1.2 units at the plant (due to losses).
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Topic 7: Clean Development Mechanism (CDM)" moduleLabel="Module 01">
        <p>International system where <strong>developed countries</strong> fund clean energy projects in <strong>developing countries</strong> to earn credits.</p>
        
        <InfoBox title="What is a Carbon Credit?" type="numerical" tag="Exam Fact">
          <strong>1 Carbon Credit = Reduction of 1 ton of CO₂ emission.</strong><br />
          These credits can be sold in international markets, making green projects profitable.
        </InfoBox>

        <List items={[
          "Brings New Technology to India",
          "Encourages Foreign Investment",
          "Reduces Global Warming impacts",
          "Helps India install Wind and Solar farms cheaply"
        ]} />
      </Section>
    </UnitLayout>
  );
}
