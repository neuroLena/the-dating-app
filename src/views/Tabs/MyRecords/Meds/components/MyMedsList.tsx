import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Container, MedicationLabel, MedicationIcon, MedicationItem } from "../styles";

const MyMedicationsList = () => {
    const mymedications = [
      { id: 1, name: "Pentalgin", icon: "md-happy" },
      { id: 2, name: "Venlaphaxine", icon: "md-battery-charging" },
      { id: 3, name: "Mirtazapin", icon: "md-headset" },
      { id: 5, name: "Strattera" },
        { id: 6, name: "Suprastin" },
    
      // Add more symptom objects as needed
    ];
  
    const renderMedicationItem = ({ item }) => (
      <TouchableOpacity>
        <Ionicons name={item.icon} size={16} color="black" />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (

    <Container>
      <FlatList
        data={mymedications}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <MedicationItem>
            <MedicationIcon />
            <MedicationLabel>{item.name}</MedicationLabel>
          </MedicationItem>
        )}
      />
    </Container>
    );
  };
  
  export default MyMedicationsList;