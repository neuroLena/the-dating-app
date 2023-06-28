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
          <Icon name="edit" size={15} color= '#6e7f8d' />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eef3fa",//'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#a4b1c6',
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
    width: 300, // Add your desired width here
  },
  text: {
    color: 'black',
    fontSize: 10,
    marginBottom: 5, // Reduced marginBottom to create smaller intervals
  },
});


export default RecordCard;
