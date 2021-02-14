import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 300;
  font-family: "Poppins", monospace;
`;

const Paragraph = styled.p`
  font-size: 24px;
  font-family: Verdana, sans-serif;
  font-weight: 300;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Container = styled.div`
  background-color: black;
  text-align: center;
  color: white;
  padding: 50px 20% 50px 20%;
`;
export default function About() {
  return (
    <Container>
      <Title>About Me</Title>
      <Paragraph>
        I am a front-end web developer who used to work in the entretainment
        industry producing scenery for live events, television/film, and
        theater. The technology I'm most familiar with is{" "}
        <Bold>HTML, CSS, SASS, Javascript, React and Redux</Bold>. I'm
        continuing to grow my stable of technology to use in future in webdev
        projects!
      </Paragraph>
    </Container>
  );
}
