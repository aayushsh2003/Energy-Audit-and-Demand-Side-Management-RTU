import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit5() {
  return (
    <UnitLayout title="Unit 5: Energy Audit of Motors">
      <Section title="Why Motors Matter?">
        <p>
          Motors consume <strong>60-70% of industrial electricity</strong>. 
          Even a 2-3% improvement in motor efficiency can save lakhs of rupees annually.
        </p>
        <InfoBox title="Induction Motors ⭐" type="important">
          The 3-phase AC induction motor is the "workhorse" of industry. It's reliable, cheap, and requires low maintenance.
        </InfoBox>
      </Section>

      <Section title="Motor Nameplate Parameters">
        <p>The nameplate provides information on how to operate the motor safely and efficiently:</p>
        <List items={[
          "Rated Power (kW/HP): Capacity of the motor.",
          "Rated Voltage & Current: Safe limits to prevent overheating.",
          "Speed (RPM): Rotational speed (e.g., 1440 RPM).",
          "Insulation Class: Temp limit the motor can tolerate (Class A, B, F).",
          "Efficiency (η): The ratio of output mechanical power to input electrical power."
        ]} />
      </Section>

      <Section title="Motor Losses & Efficiency">
        <p>Not 100% of electricity is converted to motion. Losses include:</p>
        <List items={[
          "Copper Loss (I²R): Heat generated in windings due to current.",
          "Iron Loss (Core Loss): Losses in stator core due to magnetic field.",
          "Mechanical Loss: Bearing friction and air resistance (windage).",
          "Stray Loss: Minor additional losses."
        ]} />
        <InfoBox title="Typical Efficiency Values" type="numerical">
          Small Motors: 70-80% <br />
          Medium Motors: 85-90% <br />
          Large Motors: 90-95% <br />
          (Large motors are generally more efficient)
        </InfoBox>
      </Section>

      <Section title="Energy Conservation in Motors">
        <Grid>
          <InfoBox title="Proper Sizing" type="important">
            Most industries use oversized motors. Running a large motor at low load kills efficiency. Use 70-90% loading.
          </InfoBox>
          <InfoBox title="High Efficiency Motors" type="example">
            Replace old "Standard" motors with <strong>IE3/IE4 Energy Efficient</strong> motors.
          </InfoBox>
        </Grid>
        <InfoBox title="BEE Star Labels" type="viva">
          Bureau of Energy Efficiency (BEE) rates motors and appliances with stars. More stars = higher efficiency.
        </InfoBox>
      </Section>
    </UnitLayout>
  );
}
