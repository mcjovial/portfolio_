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
        <code style={{color: 'white'}}>
          Full-stack Software Developer
        </code> <br/>
        I Design, Develop, Manage and Maintain Web apps
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Hire Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;