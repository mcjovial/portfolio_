import React from 'react';
import { DiReact, DiBootstrap, DiNodejsSmall, DiMongodb, DiLaravel, DiMysql, DiPython, DiGit, DiLinux, DiDocker, DiPhp } from 'react-icons/di';
import { SiNextDotJs } from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the Web Development world.
      From Design to Backend.
    </SectionText>
    <List  style={{alignItems: 'center'}}>
      <ListItem>
        <DiReact size="7rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="7rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/> Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="7rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br/> MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiBootstrap size="7rem" />
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLaravel size="7rem" />
        <ListContainer>
          <ListTitle>Laravel</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size="7rem" />
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiNextDotJs size="7rem" />
        <ListContainer>
          <ListTitle>Next.js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="7rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="7rem" />
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhp size="7rem" />
        <ListContainer>
          <ListTitle>Php</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="7rem" />
        <ListContainer>
          <ListTitle>Containers</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size="7rem" />
        <ListContainer>
          <ListTitle>Linux administration</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
