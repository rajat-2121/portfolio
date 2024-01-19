import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  display: flex;
  ${'' /* background:  lightblue url("${image}") no-repeat fixed center; */}
  background:linear-gradient(75deg,#eef2f3,#8e9eab);
  background-size:cover;
  background-opacity:0.2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const Button = styled.button`
background-color:black;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin:2rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const NotFoundPage = () => {
  const handleGoHomeClick = () => {
    window.location.href = "/rishi-portfolio";
  };

  return (
    <Container>
      <Title>404</Title>
      <p>Oops! Page not found.</p>
      <Button onClick={handleGoHomeClick}>Go Home</Button>
    </Container>
  );
};

export default NotFoundPage;
