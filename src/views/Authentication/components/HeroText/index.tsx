import React from "react";
import {
  Container,
  RotatedRectangle,
  Title,
  Line,
  UnderlineContainer,
} from "./styles";

export const Underline = ({ children }) => (
  <UnderlineContainer>
    <Line />
    {children}
  </UnderlineContainer>
);

export const RectangleHighLight = ({ children }) => (
  <UnderlineContainer>
    <RotatedRectangle />
    {children}
  </UnderlineContainer>
);

const HeroText: React.FC = () => {
  return (
    <Container>
       <Title style={{fontSize:16}}> Track your mental health with </Title>
     
      <RectangleHighLight>
        <Title style={{ color: "white" }}>Mental Friend</Title>
      </RectangleHighLight>

    </Container>
  );
};

export default HeroText;
