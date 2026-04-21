import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit3() {
  return (
    <UnitLayout title="Unit 3: Survey Instrumentation">
      <Section title="Electrical Measurement Tools">
        <p>Instruments used to check electrical health without guessed work.</p>
        <Grid>
          <InfoBox title="Clamp Meter" type="example">
            Measures current accurately. Clamps around the wire—<strong>no need to cut or stop</strong> the machine.
          </InfoBox>
          <InfoBox title="Power Analyzer ⭐" type="important">
            The most important tool for an energy auditor. Measures Voltage, Current, kW, kVAR, Power Factor, and Harmonics.
          </InfoBox>
        </Grid>
      </Section>

      <Section title="Thermal & Speed Measurement">
        <p>Checking heat losses and rotational efficiency.</p>
        <Grid>
          <InfoBox title="Thermal Imaging Camera" type="viva">
            A powerful tool that shows heat as a color image. Red = Hot, Blue = Cold. Detects insulation leaks or loose connections safely.
          </InfoBox>
          <InfoBox title="Tachometer" type="example">
            Measures RPM (Rotational speed). Important for pumps and fans because <strong>Power ∝ (Speed)³</strong>.
          </InfoBox>
        </Grid>
        <InfoBox title="Flue Gas Analyzer" type="important">
          Used in boilers to check oxygen and CO levels in exhaust. Essential for calculating <strong>Boiler Efficiency</strong>.
        </InfoBox>
      </Section>

      <Section title="Data Acquisition Systems (DAS)">
        <p>
          Instead of checking meters every hour, <strong>Data Loggers</strong> record values 24 hours continuously. 
          The complete system is DAS.
        </p>
        <InfoBox title="Why is continuous monitoring needed?" type="viva">
          Energy usage changes throughout the day. A single manual reading at 10 AM might miss a huge peak load at 2 PM.
        </InfoBox>
      </Section>

      <Section title="Thermal Basis (Heat Principles)">
        <p>Fundamental heat principles used to calculate losses in boilers, furnaces, and steam pipes.</p>
        <List items={[
          "Conduction: Heat transfer through solids (e.g., boiler walls).",
          "Convection: Heat transfer through liquid/gas (e.g., hot gases from chimney).",
          "Radiation: Heat transfer via electromagnetic waves (e.g., furnace heat to surrounding air).",
        ]} />
        <InfoBox title="Heat Energy Formula" type="numerical">
          Q = m × Cp × ΔT <br />
          Where Q = heat energy, m = mass, Cp = specific heat, ΔT = temperature difference.
        </InfoBox>
        <InfoBox title="Boiler Efficiency" type="numerical">
          Efficiency = (Useful Heat Output ÷ Total Heat Input) × 100
        </InfoBox>
      </Section>
    </UnitLayout>
  );
}
