import React from "react";
import Project from "./Project";
import styled from "styled-components";

const Container = styled.div`
  background: #0f0f0f;
  padding: 50px 5% 50px 5%;
`;

const Title = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 300;
  font-family: "Poppins", monospace;
`;

const Header = styled.div`
  color: white;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 24px;
  font-family: Verdana, sans-serif;
  font-weight: 300;
  margin-bottom: 50px;
`;

const Projects = () => {
  return (
    <Container>
      <Header>
        <Title>Projects</Title>
        <Paragraph>Projects I have been working on lately</Paragraph>
      </Header>
      <Project
        title="Personal Website"
        description={[
          "HTML, CSS, Javascript, React",
          <br />,
          <br />,
          "My personal website showcases the projects I have done during my course with FreeCodeCamp."
        ]}
      />

      <Project
        title="Games"
        description={[
          "HTML, CSS, Javascript, React",
          <br />,
          <br />,
          "Please enjoy these games I've developed as pratice for my coding skills. I had a lot of fun making these."
        ]}
      />

      <Project
        title="Social Media"
        description="View my social media! I am an active member of Pinterest, Twitter, Instagram, Facebook, and am an Xbox Ambassador!"
      />
    </Container>
  );
};

export default Projects;
