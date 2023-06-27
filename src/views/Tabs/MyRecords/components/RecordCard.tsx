import React, { useEffect }  from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const RecordCard = ({ record }) => {
    // Log the record to the console whenever the component is rendered
    useEffect(() => {
      console.log(record);
    }, [record]);
  
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Date: {record.date}</Text>
      <Text style={styles.text}>Symptoms:</Text>
      {record.symptoms && record.symptoms.map((symptom, index) => (
        <Text key={index} style={styles.text}>{symptom.label}: {symptom.value}</Text>
      ))}
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Icon name="edit" size={30} color="#000" />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 300, // Add your desired width here
  },
  text: {
    color: 'black',
    fontSize: 10,
    marginBottom: 5, // Reduced marginBottom to create smaller intervals
  },
});


export default RecordCard;
