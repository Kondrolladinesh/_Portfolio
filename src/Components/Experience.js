import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 15px 50px;
`;

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #52057B
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Experience = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Celebal Summer Internship</SectionTitle>
        <Description>
          Celebal Technologies · Internship <br/>
          May 2023 - Present <br/>
          Jaipur, Rajasthan, India <br/>
          Remote
        </Description>
        <Description>
          Skills - React js, Mango Db
        </Description>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Club President</SectionTitle>
        <Description>
          Coding Club JKLU (Smart Technology Club)· Part-time <br/>
          Oct 2022 - Present <br/>
          JK Lakshmipat University
        </Description>
        <Description>
          Skills : Team Management, Leadership, Team Development
        </Description>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Coursera Ambassador at JKLU</SectionTitle>
        <Description>
          Coursera <br/>
          Aug 2022 - Present <br/>
          JK Lakshmipat University <br/>
        </Description>
        <Description>
          Skills : Communication, Presentation Skills
        </Description>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Class Representative of our Batch</SectionTitle>
        <Description>
          JK Lakshmipat University, Jaipur · Self-employed <br/>
          Jul 2020 - Nov 2022 · 2 yrs 5 months <br/>
          Jaipur, Rajasthan, India.
        </Description>
        <Description>
          Skills : Communication, Presentation Skills, Team Management, Leadership.
        </Description>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Data Engineer</SectionTitle>
        <Description>
          DeepKlarity · Internship <br/>
          Jun 2022 - Aug 2022 · 3 months <br/>
          Bengaluru, Karnataka, India. <br/>
        </Description>
        <Description>
          Skills : Selenium, Presentation Skills, Python (Programming Language).
        </Description>
      </SectionContainer>
    </PageContainer>
  );
};

export default Experience;
