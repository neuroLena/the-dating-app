import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Container, SymptomItem, SymptomIcon, SymptomLabel } from "../styles";

const MySymptomsList = () => {
    const mysymptoms = [
      { id: 1, name: "Mood", icon: "md-happy" },
      { id: 2, name: "Fatigue", icon: "md-battery-charging" },
      { id: 3, name: "Head Ache", icon: "md-headset" },
      { id: 5, name: "Appetite" },
        { id: 6, name: "Anxiety" },
        { id: 7, name: "Ruminations" },
        { id: 8, name: "Anger" },
        { id: 9, name: "Irritability" },
        { id: 10, name: "Brain Fog" },
        { id: 11, name: "Concentration" },
      // Add more symptom objects as needed
    ];
  
    const renderSymptomItem = ({ item }) => (
      <TouchableOpacity>
        <Ionicons name={item.icon} size={32} color="black" />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (

    <Container>
      <FlatList
        data={mysymptoms}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <SymptomItem>
            <SymptomIcon />
            <SymptomLabel>{item.name}</SymptomLabel>
          </SymptomItem>
        )}
      />
    </Container>
    );
  };
  
  export default MySymptomsList;