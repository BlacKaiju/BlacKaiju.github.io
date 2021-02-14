import React from "react";
import styled from "styled-components";

const ProjectTitle = styled.h1`
  font-size: 48px;
  text-align: left;
  font-family: "Poppins", monospace;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  color: white;
  margin-bottom: @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 22px;
  font-family: Verdana, sans-serif;
  font-weight: 300;
  text-align: left;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33.33%;
  margin-right: 30px;
  justify-content: center;

  @media screen and (max-width: 760px) {
    margin-right: auto;
    margin-left: auto;
    max-width: 600px;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  cursor: pointer;
`;

const Project = (props) => {
  return (
    <>
      <Container>
        <TextContainer>
          <ProjectTitle>{props.title}</ProjectTitle>
          <ProjectDescription>{props.description}</ProjectDescription>
        </TextContainer>
        <ImageContainer>
          <Image src="https://via.placeholder.com/600x400" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Project;
