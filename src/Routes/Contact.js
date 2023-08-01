import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 100vh;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px;
`;

const FormTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  resize: vertical;
  border-radius: 10px;
`;

const FormButton = styled.button`
  background-color: #2196f3;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const Text = styled.h2`
  display:flex;
  justify-content:center;
  allign-items: center;
  font-size: 2.5rem;
  margin: 15px 5px;
`;

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <Container>
      <div>
        <Text>Contact</Text>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px", margin: "0px 50px 20px 50px"}} />
      </div>
      <ContactContainer>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput type="text" id="name" required />
          </FormField>
          <FormField>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" id="email" required />
          </FormField>
          <FormField>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea id="message" rows="5" required />
          </FormField>
          <FormButton type="Submit">Send Message</FormButton>
        </ContactForm>
      </ContactContainer>
    </Container>
  );
};

export default Contact;

