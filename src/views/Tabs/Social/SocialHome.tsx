import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Container, Title } from "./styles";
import Logo from "../../../assets/images/Logo.svg"


const SocialHomeView = () => {
  
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo width={100} height={100} />
      
      <Title style={{ color: "green" }}> SocialHomeView! </Title>

 </Container>
  );
};

export default SocialHomeView;
