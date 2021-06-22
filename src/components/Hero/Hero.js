import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Here, I am <br/> Elias Emmanuel Atyusan
      </SectionTitle>
      <SectionText>
        {/* <code> */}
          I am a <code style={{color: 'white'}}>Software Developer</code>, with over 3 years of experience in Web Development. <code style={{color: 'white'}}>Experienced</code> with all stages of the development cycle for dynamic web projects.
        {/* </code> */}
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Hire Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;