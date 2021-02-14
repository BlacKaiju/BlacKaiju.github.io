import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #0f0f0f;
  min-height: 500px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  color: white;
  font-family: "Poppins", monospace;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;

  @media screen and (max-width: 760px) {
    margin-bottom: 50px;
    width: auto;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 40px;
  font-weight: 300;
  width: auto;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  height: auto;
  max-width: 30vw;
  min-width: 330px;
  width: auto;
  border-radius: 50%;
`;

const Paragraph = styled.p`
  font-size: 20px;
  /* font-family: Verdana, sans-serif; */
  font-weight: 300;
  margin-bottom: 50px;
`;

const Banner = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Ahoy! I'm Cordero Acevedo</Title>
        <Paragraph>
          A NY/NJ <Bold>software engineer</Bold> specializing in web-based games
        </Paragraph>
      </TextContainer>
      <ImageContainer>
        <Image src="./ProfilePic.jpeg" />
      </ImageContainer>
    </Container>
  );
};

export default Banner;
