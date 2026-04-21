import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit7() {
  return (
    <UnitLayout title="Unit 7: Buildings & Water Audit">
      <Section title="Energy Saving in New Buildings">
        <p>
          It is much cheaper to design energy efficiency at the <strong>starting stage</strong> 
          than modifying a building later. This is "Energy Efficient Building Design."
        </p>
        <List items={[
          "Proper Orientation: Aligned to reduce heat gain from sun and use natural light.",
          "Daylighting: Large windows and skylights to reduce need for electric lights.",
          "Thermal Insulation: Insulated walls & roofs to keep heat OUT during summer.",
          "Natural Ventilation: Using cross-ventilation to reduce AC needs.",
        ]} />
        <InfoBox title="Real-Life Result" type="example">
          An office with proper building automation (Smart AC and lighting) can reduce bills by 30-50%.
        </InfoBox>
      </Section>

      <Section title="Water Audit ⭐">
        <p>
          Water Audit is a systematic study of water consumption and losses to identify wastage 
          and improve efficiency.
        </p>
        <List items={[
          "Data Collection: Checking water bills and sources.",
          "Measurement: Recording consumption in different areas (e.g., canteen, toilets).",
          "Leak Detection: Finding dripping taps or overflowing tanks.",
          "Efficiency Measures: Installing low-flow taps and dual-flush toilets.",
        ]} />
        <InfoBox title="Relation with Energy" type="viva">
          Less water used = Less pumping needed = Less electricity used. <strong>Water Saving = Energy Saving!</strong>
        </InfoBox>
      </Section>

      <Section title="General Energy Saving Tips">
        <Grid>
          <InfoBox title="Setting AC" type="important">
            Maintain room temperature at <strong>24–26°C</strong>. Every degree lower increases bill significantly.
          </InfoBox>
          <InfoBox title="Solar Energy" type="example">
            Install <strong>Solar Water Heaters</strong> and <strong>Rooftop Solar Panels</strong> to reduce grid dependency.
          </InfoBox>
        </Grid>
        <p>Regular maintenance like cleaning AC filters or fixing loose window seals also plays a huge role.</p>
      </Section>
    </UnitLayout>
  );
}
