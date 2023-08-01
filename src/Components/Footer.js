import React from 'react';
import styled from 'styled-components';
import "./Footer.css"

const FooterContainer = styled.footer`
  background-color: #666362;
  color: #fff;
  padding: 2rem;
  border-radius: 1rem;
`;

const Container = styled.div`
//   background-color: #666362;
//   color: #fff;
  padding: 0px 20px 5px 20px;
  border-radius: 1rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; 2023 Dinesh Reddy</FooterText>
        <FooterText>
          Made with&nbsp;
          <span role="img" aria-label="Love">
            ❤️
          </span>
          &nbsp;by&nbsp;
          <FooterLink href="https://yourwebsite.com">Kondrolla Dinesh Reddy</FooterLink>
        </FooterText>
      </FooterContent>
    </FooterContainer>
    </Container>
  );
};

export default Footer;
