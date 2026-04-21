import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit1() {
  return (
    <UnitLayout title="Unit 1: Energy Scenarios">
      <Section title="Energy Conservation">
        <p>
          Energy Conservation refers to using energy carefully such that waste is reduced, 
          without reducing our work or comfort levels. It means using energy <strong>smartly</strong>, 
          not stopping consumption.
        </p>
        <InfoBox title="Simple Example (Best for Viva)" type="example" tag="Topic 1.1">
          Instead of leaving a fan ON in an empty room or using a 100W bulb, we switch OFF 
          when not needed and use LED bulbs. We do the same work with less electricity!
        </InfoBox>
        <Grid>
          <InfoBox title="Energy Conservation (Behavioral)" type="important" tag="Definitions">
            Switching OFF the fan when leaving a room. It is about human behavior.
          </InfoBox>
          <InfoBox title="Energy Efficiency (Technological)" type="important" tag="Definitions">
            Using a 5-star rated fan. It is about technology and equipment.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Energy Audit" moduleLabel="Module 01">
        <p>
          An Energy Audit is a systematic and scientific study of energy use in a facility 
          to determine how and where energy is consumed and to identify opportunities 
          for savings with economic justification.
        </p>
        <InfoBox title="The Doctor Analogy" type="viva" tag="Analogy">
          Human Body → Doctor → Diagnosis → Medicine<br />
          Factory → Energy Auditor → Energy Loss → Solution
        </InfoBox>
        <List items={[
          "To reduce electricity bills",
          "To reduce fuel consumption",
          "To reduce environmental pollution",
          "To improve equipment efficiency",
          "To increase overall productivity"
        ]} />
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Types of Audits</h3>
        <Grid>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-blue-600 mb-2">Preliminary (Walk-through)</h4>
            <p className="text-sm">Basic inspection (1-3 days). Checks bills, observes equipment, talks to operators. No instruments used mostly.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-blue-600 mb-2">Detailed (Comprehensive)</h4>
            <p className="text-sm">Complete investigation (2-6 weeks). Measures V, I, PF, Temp. Calculates exact losses and savings potential.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Energy Scenario in India">
        <p>
          India is a developing country with rapidly increasing demand due to population growth, 
          urbanization, industrialization, and digitalization.
        </p>
        <List items={[
          "Demand > Supply: Leading to load shedding and power cuts.",
          "Heavy Coal Dependence: Majority of electricity is from coal, causing pollution.",
          "Oil Import Dependency: Heavy reliance on imported petroleum leading to inflation.",
          "T&D Losses: Significant energy lost in transmission and distribution lines."
        ]} />
        <InfoBox title="Per Capita Energy Consumption" type="numerical">
          Per Capita Consumption = Total Energy Consumption ÷ Total Population. 
          India's total consumption is high, but per capita is low due to large population.
        </InfoBox>
      </Section>

      <Section title="Energy Security & Strategy">
        <p>
          <strong>Energy Security</strong> is the continuous availability of sufficient energy 
          at an affordable price without interruption. Its pillars are: 
          Availability, Accessibility, Affordability, and Sustainability.
        </p>
        <InfoBox title="India's Energy Strategy" type="important">
          1. Increase production (Solar parks, wind farms)<br />
          2. Energy Conservation (LEDs, Star ratings)<br />
          3. Diversification of sources (Don't just rely on coal)<br />
          4. Promotion of Renewable Energy
        </InfoBox>
      </Section>

      <Section title="Clean Development Mechanism (CDM)">
        <p>
          CDM is an international program under which developed countries invest in 
          pollution-reducing projects in developing countries to earn <strong>Carbon Credits</strong>.
        </p>
        <InfoBox title="What is 1 Carbon Credit?" type="numerical">
          1 Carbon Credit = Reduction of 1 ton of CO₂ emission.
        </InfoBox>
        <p>
          Examples include solar power plants, wind farms, and biogas plants funded 
          by international companies in India.
        </p>
      </Section>
    </UnitLayout>
  );
}
