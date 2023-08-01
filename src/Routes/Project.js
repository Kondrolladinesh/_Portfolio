import React from 'react';
import styled from 'styled-components';
import CardView from '../Components/CardView';

const Cardcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h2`
  display:flex;
  justify-content:center;
  allign-items: center;
  font-size: 2.5rem;
  margin: 15px 5px;
`;

const project = () => {
  return (
    <div>
        <Text>Projects</Text>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "0px 50px 0px 50px"}} />
      <Cardcontainer>
        {/* <Text>Projects</Text>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "0px 50px 0px 50px"}} /> */}
        <CardView/>
      </Cardcontainer>
    </div>
  )
}

export default project
