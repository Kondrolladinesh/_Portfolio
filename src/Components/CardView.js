import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
//   padding: 20px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardOrder = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    gap: 20px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 325px; /* Set a fixed width for each card */
  height: 230px;
  // height: 100%;

  @media (max-width: 1000px) {
    width: 100%; /* Full width on smaller screens */
    height: auto; /* Adjust height based on content */
  }

  @media (max-width: 768px) {
    // width: 100%; /* Full width on smaller screens */
    width: 225px;
    height: auto; /* Adjust height based on content */
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  // color: #333;
  color: #52057B
`;

const CardDescription = styled.p`
  font-size: 10px;
  color: #555;
`;

const Button = styled.button`
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 18px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: grey;
    color: #333;
  }
`;

const CardView = () => {
  return (
      <CardOrder>
        <div>
          <CardContainer>
            <Card>
              <div>
                <CardTitle>DApp</CardTitle>
                <CardDescription>
                The advanced management system for doctors and patients. Using state-of-the-art Full Stack
                development with React & Firebase technology, our team has crafted an intuitive and efficient
                  app that simplifies the process of managing medical records and patient information. <br/> <br/>

                With Dapp Doctor, you can say goodbye to complex paperwork and hello to a user-friendly platform
                that allows seamless communication, appointment scheduling, and medical history management between
                  doctors and patients.
                </CardDescription>
              </div>
              <Button><a style={{color:"#fff"}} href= "https://www.linkedin.com/in/kondrolla-dinesh/">Know More</a></Button>
            </Card>
            <Card>
              <div>
                <CardTitle>ResoLib (Android App)</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
              </div>
              <Button><a style={{color:"#fff"}} href= "https://www.linkedin.com/in/kondrolla-dinesh/">Know More</a></Button>
            </Card>
          </CardContainer>
        </div>
        <div>
          <CardContainer>
          <Card>
            <div>
              <CardTitle>TransportRoute Algorithm</CardTitle>
              <CardDescription>
                We decided to create an algorithm in java that will take the weight of the goods to be 
                 as input and output the minimum number of vehicles required to transport the goods. Furthermore,
                  by providing the destination, we can easily obtain the shortest route available from the
                   warehouses to that destination, as well as the total travel cost for exporting those goods
                    via that route.<br/> <br/>

                Best Route Transportation with the Minimum Vehicles.
              </CardDescription>
            </div>
            <Button><a style={{color:"#fff"}} href= "https://github.com/Kondrolladinesh/TransportRoute_Algorithm">Know More</a></Button>
          </Card>
          <Card>
            <div>
              <CardTitle>ResoLib (Web Application)</CardTitle>
              <CardDescription>
                The "Resource Library System for University" is a website project developed using HTML, CSS, PHP,
                  and MySQL. It enables students and faculty to share educational resources within the university.
                   The website features an intuitive interface for browsing and accessing resources. Users can
                    upload and share materials, while PHP handles dynamic functionality and user authentication.
                     The MySQL database efficiently organizes resource data, allowing for easy searching and
                      browsing. This project fosters collaboration, knowledge exchange, and a culture of continuous
                       learning within the university community.
              </CardDescription>
            </div>
            <Button><a style={{color:"#fff"}} href= "https://github.com/Kondrolladinesh/ResoLib">Know More</a></Button>
          </Card>
          </CardContainer>
        </div>
      </CardOrder>
  );
};

export default CardView;
