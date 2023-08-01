import React from 'react';
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  /* border-bottom: 1px solid black; */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); // Add shadow
  div {
    display: flex;
    align-items: center;
    margin: 0 20px; // Add some distance from both the ends
  }
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  /* border: 1px solid black; */
`;
const HomePage = () => {
    // const navigate = useNavigate();
    return (
        <>
          <Nav>
            <Logo src="./images/logo.png" alt="Logo" />
            <div>
                <h1>Dinesh</h1>
              {/* <Button onClick={handlelogin}>Log In</Button>
              <Button onClick={handlesignup}>Sign Up</Button> */}
            </div>
          </Nav>
          {/* <Container>
            <TextContainer>
              <Title>Welcome to Our DApp</Title>
              <Subtitle>
                Dapp is a Doctor's Appointment Management System that simplifies
                the process of booking and managing appointments for doctors,
                patients, and receptionists. It provides a personalized
                dashboard for doctors to manage their schedules and patient
                details, while also offering patients an intuitive interface to
                book appointments online and view their history.
              </Subtitle>
            </TextContainer>
            <ImageContainer>
              <Image src="./images/homeback.jpg" alt="Image" />
            </ImageContainer>
          </Container>
          <Section>
            <DappSection>
              <DappTitle>How Will It Help Doctors</DappTitle>
              <DappText>
                Dapp will help doctors by providing them with a personalized
                dashboard where they can easily manage their schedules, view
                patient details, and set their availability. The app also offers
                automated reminders for upcoming appointments and sends
                notifications to patients in case of any changes, allowing
                doctors to keep track of their appointments and manage their
                time more efficiently.
                <br></br>
                Additionally, Dapp allows doctors to generate online
                prescriptions with just a few clicks, reducing the time and
                effort required for manual prescription writing.
              </DappText>
            </DappSection> */}
          {/* </Section> */}
          {/* <Footer>
            <FooterText>Copyright © 2023</FooterText>
          </Footer> */}
        </>
      );
        
};


export default HomePage;