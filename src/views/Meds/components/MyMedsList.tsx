import React from "react";
import { View, Text, FlatList } from "react-native";
// import { styles } from "./styles";

const MyMedsList = () => {
  const mymedications = [
    { id: 1, name: "Aspirin" },
    { id: 2, name: "Ibuprofen" },
    { id: 3, name: "Antihistamine" },
    // Add more medication objects as needed
  ];

  return (
    <View >
      <FlatList
        data={mymedications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View >
            <Text >{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyMedsList;
