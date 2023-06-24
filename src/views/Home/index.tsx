import React from "react";
import { View, Text, Button } from "react-native";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container >
     
      <Text>Welcome!</Text>

      <Button title="My Symptoms" onPress={() => console.log("Navigate to My Symptoms")} />
      <Button title="My Meds" onPress={() => console.log("Navigate to My Meds")} />
      <Button title="My Reports" onPress={() => console.log("Navigate to My Reports")} />
      </Container>
  );
};

export default Home;
