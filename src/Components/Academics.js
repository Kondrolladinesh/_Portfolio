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

const Percentage = styled.span`
  font-weight: bold;
`;

const Academics = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>JK Lakshmipat University</SectionTitle>
        <Description>
          BTech, Computer Science Engineering <br/>
          2020 - 2024
        </Description>
        <Description>
          Percentage: <Percentage>{82}%</Percentage>
        </Description>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Sri Chaitanya Junior College</SectionTitle>
        <Description>
            Intermediate First & Second year, MPC <br/>
            Telangana State Board of Intermediate Education<br/>
            2018 - 2020
        </Description>
        <Description>
          Percentage: <Percentage>{93}%</Percentage>
        </Description>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Sri Chaitanya Techno School</SectionTitle>
        <Description>
            10th Class <br/>
            Telangana State Secondary School Certificate <br/>
            2017 - 2018
        </Description>
        <Description>
          Percentage: <Percentage>{93}%</Percentage>
        </Description>
      </SectionContainer>
    </PageContainer>
  );
};

export default Academics;
