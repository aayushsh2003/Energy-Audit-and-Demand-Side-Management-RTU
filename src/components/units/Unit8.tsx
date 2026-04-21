import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit8() {
  return (
    <UnitLayout title="Unit 8: Demand Side Management">
      <Section title="Overview & Scope">
        <p>
          DSM is the planning, implementation, and monitoring of activities designed to 
          encourage consumers to modify their level and pattern of electricity usage.
        </p>
        <List items={[
          "Residential: Smart appliances and LED lighting.",
          "Commercial: Building automation and HVAC optimization.",
          "Industrial: Shifting heavy loads to off-peak night hours.",
          "Agricultural: Regulating irrigation pump usage during non-peak.",
        ]} />
      </Section>

      <Section title="Evolution of DSM">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-8 text-sm">
          <p className="font-bold text-slate-400 mb-2 font-mono uppercase tracking-tighter">Evolution Timeline</p>
          <div className="space-y-4">
            <div>
              <span className="font-bold text-blue-600">1. Supply-Oriented:</span> Traditional way. Build more power plants if demand increases. Problem: Very expensive and slow.
            </div>
            <div>
              <span className="font-bold text-blue-600">2. Crisis Period:</span> World oil crisis showed that energy resources are limited.
            </div>
            <div>
              <span className="font-bold text-blue-600">3. Conservation:</span> Awareness stage. Use less light, switch off fans.
            </div>
            <div>
              <span className="font-bold text-blue-600">4. Modern DSM ⭐:</span> Smart grids, dynamic tariffs, and utility-consumer cooperation.
            </div>
          </div>
        </div>
      </Section>

      <Section title="Tariff Options for DSM">
        <p>People respond to financial incentives. Utilities use pricing to manage load.</p>
        <Grid>
          <InfoBox title="TOU/TOD Tariff" type="important">
            Time-of-Use tariff. Electricity is cheaper during <strong>Off-Peak</strong> (night) and expensive during <strong>Peak</strong>.
          </InfoBox>
          <InfoBox title="Interruptible Tariff" type="viva">
            A factory agrees to stop some machines when the grid is overloaded in exchange for lower electricity rates.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Implementation Issues">
        <p>Why is DSM sometimes slow to grow?</p>
        <List items={[
          "Lack of Awareness: People don't know the benefits or how to save.",
          "High Initial Cost: Efficient appliances and automation are expensive upfront.",
          "Habit & Comfort: Reluctance to change the timing of activities (e.g., using AC).",
          "Technical Issues: Lack of smart meters or compatible equipment.",
        ]} />
        <InfoBox title="DSM and Environment" type="viva">
          DSM reduces the need for new fossil fuel plants, lowering CO₂ emissions and mitigating global warming.
        </InfoBox>
      </Section>
    </UnitLayout>
  );
}
