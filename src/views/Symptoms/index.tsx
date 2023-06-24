import React from "react";
import { Text, Button, View } from "react-native";
import { Container } from "./styles";
import MySymptomsList from "./components/MySymptomsList";


import AddButton from "../../components/AddButton/index"

const Symptoms = () => {
  // const handleAddSymptom = () => {
//     console.log("Add a new symptom");
//   }; 
      // onPress={handleAddSymptom}

  return (
    <Container >
       <View style={{ flex: 9 }}>
       <MySymptomsList/>
       </View>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddButton>+ Add Symptom</AddButton>
      {/* <Button title="+ Add Symptom" color="#EE61A1" onPress={() => console.log("Add New Symptom")} /> */}
      </View>
     

    </Container>
  );
};

export default Symptoms;
