import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit9() {
  return (
    <UnitLayout title="Unit 9: Energy Conservation & Legislation">
      <Section title="Motivation & Principles">
        <p>
          Energy resources (coal, oil, gas) are finite. We must conserve to ensure 
          <strong>Sustainable Development</strong>—meeting our needs without compromising future generations.
        </p>
        <InfoBox title="Main Principles" type="important">
          1. Avoid Energy Waste (Behavioral)<br />
          2. Use Efficient Equipment (Technological)<br />
          3. Proper Operation & Maintenance (Systemic)<br />
          4. Use Renewable Energy (Diversification)
        </InfoBox>
      </Section>

      <Section title="Sector-wise Conservation">
        <Grid>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-blue-600 mb-2">Industries</h4>
            <p className="text-sm">Waste heat recovery, replacing old inefficient motors, and leak fixing in compressed air systems.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-blue-600 mb-2">Transport</h4>
            <p className="text-sm">Promoting public transport, using fuel-efficient EVs, carpooling, and regular vehicle maintenance.</p>
          </div>
        </Grid>
        <Grid>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-blue-600 mb-2">Agriculture</h4>
            <p className="text-sm">Using energy-efficient pump sets and drip/sprinkler irrigation systems to save water and energy.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-blue-600 mb-2">Power Sector</h4>
            <p className="text-sm">High-voltage transmission and using low-loss transformers to reduce T&D losses.</p>
          </div>
        </Grid>
      </Section>

      <Section title="Energy Conservation Act, 2001 ⭐">
        <p>The core law in India to promote efficient energy use.</p>
        <InfoBox title="Key Features of the Act" type="important">
          1. <strong>Establishment of BEE:</strong> Bureau of Energy Efficiency to create programs.<br />
          2. <strong>Standards & Labelling:</strong> Compulsory star-rating on appliances.<br />
          3. <strong>ECBC:</strong> Energy Conservation Building Code for large buildings.<br />
          4. <strong>Designated Consumers:</strong> Large industry sectors must perform mandatory energy audits.
        </InfoBox>
        <InfoBox title="PAT Scheme" type="viva">
          <strong>Perform, Achieve and Trade.</strong> A market-based mechanism to enhance 
          energy efficiency in large energy-intensive industries by giving credits for savings.
        </InfoBox>
      </Section>

      <Section title="Final Status">
        <div className="bg-emerald-600 text-white rounded-2xl p-8 text-center shadow-xl shadow-emerald-600/20">
          <h3 className="text-2xl font-bold mb-2">Full Syllabus Completed!</h3>
          <p className="opacity-90">Units 1–9 summary is now at your fingertips. Good luck with your exams!</p>
        </div>
      </Section>
    </UnitLayout>
  );
}
