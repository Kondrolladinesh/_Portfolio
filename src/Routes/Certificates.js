import React from 'react';
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/Fundamentals_Of_Network_Communication.png";
import img2 from "../images/Local_Area_Networks_(CNDS).png";
import img3 from "../images/Packet_Switching_Networks_and_Algorithms.png";
import img4 from "../images/Computer_Networks_Total_Courses.png";
import img5 from "../images/AppWithKotlin.png";
import img6 from "../images/C_Certificate.png";
import img7 from "../images/java_for_android.png";
import img8 from "../images/Google_Cloud_Career_Readiness.png";

const Container = styled.div`
  display:flex;
  justify-content: center;
  // align-items: center;
`;

const AcademicContainer = styled.div`
  // display:flex;
  // justify-content: center;
  // align-items: center;
  margin-top: 350px;
  @media (max-width: 530px) {
    margin-top: 250px;
  }
`;

const CustomCarousel = styled(Carousel)`
  width: 40rem;
  height: 10rem;

  @media (max-width: 900px) {
    width: 30rem;
    height: 7rem;
  }

  @media (max-width: 530px) {
    width: 20rem;
    height: 5rem;
  }
`;

const CustomImg = styled.img`
  height: 29rem;
  width: 40rem;
  @media (max-width: 768px) {
    width: 20rem;
    height: 24rem;
  }

  @media (max-width: 530px) {
    width: 10rem;
    height: 16rem;
  }
`;

const Text = styled.h2`
  display:flex;
  justify-content:center;
  allign-items: center;
  font-size: 2.5rem;
  margin: 15px 5px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  padding: 0px 50px;
  color: #52057B
`;


const Certificates = () => {
  return (
    <div>
      <div>
        <Text>Certificates</Text>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "0px 50px 20px 50px"}} />
      </div>
      <SectionTitle>Coursera Certificates</SectionTitle>
      <Container>
        <CustomCarousel autoPlay axis="horizontal" infiniteLoop >
            <div>
                <CustomImg src={img1} alt="Fundamentals_Of_Network_Communication" />
                <p className="legend">Fundamentals Of Network Communication</p>
            </div>
            <div>
                <CustomImg src={img2} alt="Local_Area_Networks_(CNDS)" />
                <p className="legend">Local Area Networks</p>
            </div>
            <div>
                <CustomImg src={img3} alt="Packet_Switching_Networks_and_Algorithms" />
                <p className="legend">Packet Switching Networks and Algorithms</p>
            </div>
            <div>
                <CustomImg src={img4} alt="Computer_Networks_Total_Courses" />
                <p className="legend">Computer Networks Total Courses</p>
            </div>
            <div>
                <CustomImg src={img5} alt="C_certificate" />
                <p className="legend">Android App with Kotlin</p>
            </div>
            <div>
                <CustomImg src={img6} alt="C_certificate" />
                <p className="legend">C programming for Everyone</p>
            </div>
            <div>
                <CustomImg src={img7} alt='java_for_android_certificate' />
                <p className="legend">Java For Android</p>
            </div>
        </CustomCarousel>
      </Container>
      <AcademicContainer>
        <SectionTitle>Academics Certificates</SectionTitle>
        <Container>
          <CustomCarousel autoPlay axis="horizontal" infiniteLoop >
              <div>
                  <CustomImg src={img8} alt="Google_Cloud_Career_Readiness" />
                  <p className="legend">Google_Cloud_Career_Readiness</p>
              </div>
          </CustomCarousel>
        </Container>
      </AcademicContainer>
    </div>
  )
}

export default Certificates
