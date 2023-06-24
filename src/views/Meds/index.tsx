import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import MyMedsList from "./components/MyMedsList";
// import { MedsList, AddButton } from "./components";

const Meds = () => {
  return (
    <Container>
      <MyMedsList />
      {/* <AddButton onPress={() => console.log("Add a new medication")} /> */}
    </Container>
  );
};

export default Meds;
