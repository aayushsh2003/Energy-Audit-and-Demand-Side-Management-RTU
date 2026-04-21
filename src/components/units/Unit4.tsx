import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit4() {
  return (
    <UnitLayout title="Unit 4: Electrical-Load Management">
      <Section title="The DSM concept (The Heart of the Subject)">
        <p>
          Electricity cannot be stored easily. When everyone uses it at the same time, we have a 
          <strong>Peak Demand Problem</strong>. Demand Side Management (DSM) involves managing electricity 
          at the consumer end instead of building more power plants.
        </p>
        <InfoBox title="Goal of DSM" type="important">
          To make the <strong>Load Curve flat</strong> (Uniform load throughout the day).
        </InfoBox>
      </Section>

      <Section title="Load Management Techniques">
        <Grid>
          <InfoBox title="Peak Clipping" type="important">
            Reducing the peak load directly. E.g., Turning off some AC units during peak hours.
          </InfoBox>
          <InfoBox title="Load Shifting ⚡" type="viva">
            Moving load from peak time to off-peak time. E.g., Running industrial night shifts.
          </InfoBox>
        </Grid>
        <Grid>
          <InfoBox title="Valley Filling" type="example">
            Increasing load during low-demand periods. E.g., Charging EVs only at midnight.
          </InfoBox>
          <InfoBox title="Strategic Conservation" type="important">
            Reduction through efficiency. E.g., Replacing all plant lights with LED.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="VFD & Power Factor">
        <p>Crucial tools for load management in industries.</p>
        <InfoBox title="Variable Frequency Drive (VFD)" type="important">
          Device that controls motor speed by changing frequency and voltage. 
          When a pump doesn't need full speed, VFD slows it down, saving 20-60% energy!
        </InfoBox>
        <InfoBox title="Power Factor (PF)" type="numerical">
          PF = Real Power (kW) ÷ Apparent Power (kVA). <br />
          Low PF (due to inductive loads like motors) causes high current and penalties. 
          It is improved using <strong>Capacitor Banks</strong>.
        </InfoBox>
      </Section>

      <Section title="Electricity Tariff & Billing">
        <p>Billing is not just about units (kWh). For industries, it includes:</p>
        <List items={[
          "Energy Charge: Based on units (kWh) consumed.",
          "Demand Charge: Based on highest power (kW or kVA) used at any moment.",
          "TOD (Time of Day) Tariff: Electricity is expensive during peak hours and cheaper at night.",
          "PF Penalty: Extra charges if PF falls below ~0.9."
        ]} />
      </Section>

      <Section title="Harmonics & Losses">
        <InfoBox title="Harmonics ⚠️" type="important">
          Unwanted frequencies that distort the normal sine wave of voltage/current. 
          Caused by VFDs, computers, and UPS. Can cause overheating and meter errors.
        </InfoBox>
        <InfoBox title="T&D Losses" type="viva">
          Energy lost in cables and transformers before reaching the consumer. <br />
          <strong>Technical Losses:</strong> Resistance of wires (I²R loss). <br />
          <strong>Non-Technical:</strong> Theft, meter tampering, and illegal connections.
        </InfoBox>
      </Section>
    </UnitLayout>
  );
}
