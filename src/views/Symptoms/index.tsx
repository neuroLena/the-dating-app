import React from "react";
import { Text, Button } from "react-native";
import { Container } from "./styles";
import MySymptomsList from "./components/MySymptomsList";


const Symptoms = () => {
  // const handleAddSymptom = () => {
//     console.log("Add a new symptom");
//   }; 
      // onPress={handleAddSymptom}

  return (
    <Container>

      <Button title="+ Add Symptom" onPress={() => console.log("Add New Symptom")} />
      <MySymptomsList/>

    </Container>
  );
};

export default Symptoms;
