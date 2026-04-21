import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit2() {
  return (
    <UnitLayout title="Unit 2: Audit Types & Methodology">
      <Section title="Energy Audit Methodology">
        <p>
          Energy Audit Methodology is a step-by-step procedure followed to conduct an audit properly. 
          It ensures that no area of energy waste is missed.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-8 text-center uppercase tracking-widest text-xs font-mono font-bold text-slate-500">
          Pre-audit → Survey → Measurement → Analysis → Recommendation → Report
        </div>
        
        <h3 className="text-xl font-semibold mb-4">The 6 Main Stages</h3>
        <List items={[
          "Stage 1: Pre-Audit Preparation - Collecting bills (1 year), production data, and plant layout.",
          "Stage 2: Walk-Through Survey - Initial site inspection to identify obvious wastages (e.g., lights ON during day).",
          "Stage 3: Measurement & Monitoring - Using instruments to get real data on Voltage, Current, Power Factor, etc.",
          "Stage 4: Analysis of Data - Calculating energy consumption, efficiency of systems, and identifying exact losses.",
          "Stage 5: Identification of ESO - Finding Energy Saving Opportunities (e.g., VFDs, LED retrofitting).",
          "Stage 6: Report Preparation - Final proposal with solutions, costs, savings, and payback periods."
        ]} />
      </Section>

      <Section title="Financial Analysis">
        <p>
          Before any energy-saving project is approved, it must be proved to be <strong>profitable</strong>. 
          This is where financial analysis comes in.
        </p>
        <Grid>
          <InfoBox title="Payback Period (PBP)" type="numerical">
            PBP = Initial Investment ÷ Annual Savings. <br />
            Example: Cost = ₹1L, Saving = ₹40k/yr. <br />
            PBP = 1,00,000 / 40,000 = 2.5 Years.
          </InfoBox>
          <InfoBox title="Life Cycle Costing" type="important">
            Considers Purchase Cost + Operating Cost + Maintenance. <br />
            A cheap motor might consume more electricity, making an expensive efficient motor cheaper in the long run!
          </InfoBox>
        </Grid>
        <InfoBox title="Sensitivity Analysis" type="viva">
          Checking if the project is still profitable if conditions change. 
          What if electricity price increases? What if the machine runs fewer hours? 
          It gives confidence before investment.
        </InfoBox>
      </Section>

      <Section title="Project Financing Options">
        <p>Large energy projects require capital. Companies use various methods:</p>
        <List items={[
          "Self Financing: Using the company's internal savings or profits.",
          "Bank Loans: Repaying monthly through the energy savings achieved.",
          "Leasing: Renting the equipment from a third party; no large initial investment.",
          "Government Subsidy: Direct financial aid provided to encourage green energy.",
        ]} />
        <InfoBox title="ESCO (Energy Service Company) ⭐" type="important">
          The most important financing option. ESCO invests the money and installs equipment. 
          They are paid only from a <strong>share of the actual energy savings</strong> achieved!
          No risk for the industry.
        </InfoBox>
      </Section>

      <Section title="Monitoring and Training">
        <p>
          Audit is a one-time thing, but <strong>Energy Monitoring</strong> is continuous. 
          It detects abnormal consumption daily using smart meters and data loggers.
        </p>
        <InfoBox title="Energy Training" type="viva">
          Teaching employees proper operation practices. 
          Example: Turning off the compressor during lunch breaks can save lakhs in a year.
        </InfoBox>
      </Section>
    </UnitLayout>
  );
}
