import React, { useState } from 'react';
import styled from "styled-components";
// import NavBar from '../Components/NavBar';
import { AiFillMail, AiFillCalendar, AiFillPhone } from "react-icons/ai";
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import Certificates from './Certificates';
import About from './About';
import Project from './Project';
import Footer from '../Components/Footer';
import Contact from './Contact';

const LeftBox = styled.div`
  flex: 1;
  height: 36rem;
  background-color: #666362;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightBox = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  flex:3;
  height: 36rem;
  background-color: #666362;
  border-radius: 0.8rem;
  overflow: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Heading = styled.h1`
  // margin-bottom: 1rem;
  justify-content:center;
  display:flex;
`;
const Text = styled.h2`
  display:flex;
  justify-content:center;
  allign-items: center;
  font-size: 2.5rem;
  margin-top: 0rem;
  color: #52057B
`;
const Details = styled.h3`
  font-size: 1rem;
  marginY:0px;
  margin-top: -0.4rem;
  // color: #000000 ;
`;

const DetailContainer = styled.div`
  display:flex;
  justify-content: left;
  flex-direction: column;
  margin-top: -0.1rem;
`;

const ProfilePicture = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 1px solid #333;
  justify-content:center;
  margin: 0 auto;

`;

const Navbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height : 4rem;
    max-width : 100%;
    background-color: #D3D3D3;
    margin: 20px 20px 0px 20px;
    border-radius: 0.5rem;
    position: relative;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? "#892CDC" : "#eee")}; //#2196f3
  color: ${(props) => (props.active ? "#fff" : "#333")};
  font-size: 22px;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin: 0px 5px;
  padding: 6px 16px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.button`
  background-color: ${(props) => (props.isMenuOpen ? "#2196f3" : "#eee")};
  color: ${(props) => (props.isMenuOpen ? "#fff" : "#333")};
  font-size: 22px;
  border: none;
  outline: none;
  border-radius: 5px;
  // transition: all 0.3s ease;
  margin: 0px 5px;
  padding: 6px 16px;
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: bottom;
  margin-top: 10px;
  padding: 6px;
  background-color: #D3D3D3;
  border-radius: 0.5rem;
  top: calc(100% + 10px);
  // right: 50%;
  transform: translateY(60%);

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Button)`
  display: block;
  margin: 2px 0px;
  width: 100%;
`;

const MenuContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

const Home = () => {
  const [selectedContainer, setSelectedContainer] = useState("About");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContainerChange = (containerName) => {
    setSelectedContainer(containerName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Navbar>
        
        <div>
          <h1 style={{ margin: "30px" }}>Portfolio</h1>
        </div>
        <MenuContainer>
        <div>
          <Button
            onClick={() => handleContainerChange("About")}
            active={selectedContainer === "About"}
          >
            About
          </Button>
          <Button
            onClick={() => handleContainerChange("Projects")}
            active={selectedContainer === "Projects"}
          >
            Projects
          </Button>
          <Button
            onClick={() => handleContainerChange("Certificates")}
            active={selectedContainer === "Certificates"}
          >
            Certificates
          </Button>
          <Button
            onClick={() => handleContainerChange("Contact")}
            active={selectedContainer === "Contact"}
          >
            Contact
          </Button>
          <MenuIcon
            onClick={toggleMenu}
            isMenuOpen={isMenuOpen}
          >
            Menu
          </MenuIcon>
        </div>
        <div>
          <Menu isMenuOpen={isMenuOpen}>
            <MenuItem
              onClick={() => handleContainerChange("About")}
              active={selectedContainer === "About"}
            >
              About
            </MenuItem>
            <MenuItem
              onClick={() => handleContainerChange("Projects")}
              active={selectedContainer === "Projects"}
            >
              Projects
            </MenuItem>
            <MenuItem
              onClick={() => handleContainerChange("Certificates")}
              active={selectedContainer === "Certificates"}
            >
              Certificates
            </MenuItem>
            <MenuItem
              onClick={() => handleContainerChange("Contact")}
              active={selectedContainer === "Contact"}
            >
              Contact
            </MenuItem>
          </Menu>
        </div>
        </MenuContainer>
      </Navbar>
      <Container>
        <LeftBox>
            <Heading>My Profile</Heading>
            <ProfilePicture src="./images/myPhoto.png" alt="Profile" />
            <Text>Kondrolla<br />Dinesh Reddy</Text>
            <DetailContainer>
              <Details> <AiFillMail/> &nbsp;dineshreddykondrolla@gmail.com</Details>
              <Details> <AiFillCalendar/> &nbsp;26, june 2002</Details>
              <Details> <AiFillPhone/> &nbsp;9515316904</Details>
              <Details> <FiLinkedin/> &nbsp;<a style = {{color:"#000000" }} href= "https://www.linkedin.com/in/kondrolla-dinesh/">kondrolla-dinesh</a></Details>
              <Details> <FiGithub/> &nbsp; <a style = {{color:"#000000" }} href= "https://github.com/Kondrolladinesh">kondrolladinesh</a> </Details>
              <Details> <FiInstagram/> &nbsp; <a style = {{color:"#000000" }} href= "https://instagram.com/dinesh_rdy_904?igshid=MmIzYWVlNDQ5Yg==">dinesh_rdy_904</a></Details>
            </DetailContainer>
        </LeftBox>
        <RightBox show={selectedContainer === "About"}>
          <About/>
        </RightBox>
        <RightBox show={selectedContainer === "Projects"}>
          <Project/>
        </RightBox>
        <RightBox show={selectedContainer === "Certificates"}>
          <Certificates />
        </RightBox>
        <RightBox show={selectedContainer === "Contact"}>
          <Contact/>
        </RightBox>
      </Container>
      <Footer/>
    </div>
  )
}

export default Home
