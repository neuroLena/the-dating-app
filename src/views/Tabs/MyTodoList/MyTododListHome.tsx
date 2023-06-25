import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Container, Title } from "./styles";
import Logo from "../../../assets/images/Logo.svg"


const MyTodolistHomeView = () => {
  
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo width={100} height={100} />
      
      <Title style={{ color: "red" }}> MyTodolistHomeView! </Title>

 </Container>
  );
};

export default MyTodolistHomeView;
