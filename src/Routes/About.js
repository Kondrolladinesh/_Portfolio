import React from 'react';
import styled from "styled-components";
import Academics from '../Components/Academics';
import Experience from '../Components/Experience';

const Text = styled.h2`
  display:flex;
  justify-content:center;
  allign-items: center;
  font-size: 2.5rem;
  margin: 15px 5px;
`;

const Content = styled.p`
  display:flex;
  justify-content:center;
  align-items: center;
  padding: 0px 50px;
`;

const About = () => {
  return (
    <div>
      <div>
        <Text>About me</Text>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "0px 50px 0px 50px"}} />
      </div>
      <Content>
          As the President of the Smart Technology Club at JKLU and a driven individual, my goal is to build
          a successful career as a Software Developer. With a strategic approach, I aim to design applications
          and programs that optimize business operations and enhance user experiences. Passionate about
          problem-solving, I am dedicated to contributing to technological advancements and delivering 
          tangible results for organizations. Balancing my studies with leadership responsibilities allows
          me to further develop my skills.
      </Content>
      <div>
        {/* <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "50px 50px 0px 50px"}} /> */}
        <Text>Education</Text>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "0px 50px 0px 50px"}} />
        <Academics />
      </div>
      <div>
        <Text>Experience</Text>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "0px 50px 0px 50px"}} />
        <Experience/>
      </div>
    </div>
  )
}

export default About
