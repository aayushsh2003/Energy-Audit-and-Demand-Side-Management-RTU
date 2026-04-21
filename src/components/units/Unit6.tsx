import React from 'react';
import UnitLayout, { Section, InfoBox, List, Grid } from '../UnitLayout';

export default function Unit6() {
  return (
    <UnitLayout title="Unit 6: Lighting Systems Audit">
      <Section title="Lighting Fundamentals">
        <p>Lighting usually consumes 10-20% of residential and 20-40% of commercial electricity.</p>
        <Grid>
          <InfoBox title="Luminous Flux" type="important">
            Total light output from a source. Unit: <strong>Lumen (lm)</strong>.
          </InfoBox>
          <InfoBox title="Illumination" type="important">
            Amount of light falling on a surface. Unit: <strong>Lux</strong>.
          </InfoBox>
        </Grid>
        <InfoBox title="Luminous Efficacy" type="numerical">
          Efficiency of light. Measured in <strong>Lumens per Watt (lm/W)</strong>. <br />
          LED: 100-150 lm/W <br />
          Incandescent: 10-15 lm/W (Very poor)
        </InfoBox>
      </Section>

      <Section title="Types of Lamps">
        <List items={[
          "Incandescent: Old, low efficiency, produces more heat than light.",
          "Fluorescent (Tube lights): Moderate efficiency, commonly used in offices.",
          "LED ⭐: Highly efficient, long-lasting, best for energy saving."
        ]} />
      </Section>

      <Section title="Lighting Control Systems">
        <p>Instead of manual switching, use automation to save 30-50% energy.</p>
        <Grid>
          <InfoBox title="Motion Sensors" type="viva">
            Turn ON lights only when a person enters (Occupancy sensors). Best for bathrooms and stairs.
          </InfoBox>
          <InfoBox title="Daylight Sensors" type="example">
            Detect sunlight level and dim/switch OFF artificial lights accordingly (Photo sensors).
          </InfoBox>
        </Grid>
        <List items={[
          "Timers: Scheduled ON/OFF for street lights.",
          "Dimmers: Adjusting brightness according to need.",
        ]} />
      </Section>

      <Section title="Steps of Lighting Audit">
        <p>Systematic assessment of light quality and waste.</p>
        <List items={[
          "1. Data collection: Count lamps, types, and operating hours.",
          "2. Measurement: Use a Lux meter to check brightness on work surfaces.",
          "3. Identify Problems: Look for over-lighting (too bright) or lights left ON in empty rooms.",
          "4. Analysis: Calculate existing kWh vs potential saving with LED.",
          "5. Recommendations: Propose sensor installation and lamp replacement.",
        ]} />
      </Section>

      <Section title="Saving Opportunities">
        <InfoBox title="Major Energy Saving Methods" type="important">
          1. Retrofit with LED lamps.<br />
          2. Use Electronic Ballasts (instead of old magnetic chokes).<br />
          3. Improve reflector design to direct light better.<br />
          4. Maximize the use of <strong>Natural Daylighting</strong> (skylights/windows).
        </InfoBox>
      </Section>
    </UnitLayout>
  );
}
