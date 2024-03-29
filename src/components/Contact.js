import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mettez ici vos identifiants d'email.js
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userId = 'YOUR_EMAILJS_USER_ID';

    // Envoi de l'e-mail via email.js
    emailjs.send(serviceId, templateId, { from_email: email, message }, userId)
      .then((response) => {
        console.log('E-mail envoyé avec succès!', response);
        // Réinitialisez les champs après l'envoi de l'e-mail
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      });
  };

  return (
    <Container>
      <Title>Me contacter</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" value={email} onChange={handleEmailChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Message:</Label>
          <Textarea value={message} onChange={handleMessageChange} required />
        </FormGroup>
        <Button type="submit">Envoyer</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
position : relative;
top : 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 1em;
  color: rgb(75, 116, 189);
  font-size: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding: 5em;
  background-color: rgb(75, 116, 189);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Contact;
