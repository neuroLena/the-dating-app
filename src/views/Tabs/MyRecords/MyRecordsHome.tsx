import React, { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { Container, Title } from "./styles";
import Logo from "../../../assets/images/Logo.svg"
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers'; // Update the path according to your project structure
import { useDispatch } from 'react-redux';
import { fetchSymptomsRequest } from '~store/reducers/symptoms'; // Update the import path according to your file structure


const MyRecordsHomeView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSymptomsRequest.request());
  }, [dispatch]);

  // get data from  Redux store
  const symptomsRecords = useSelector((state: RootState) => state.symptoms.data);
  console.log('Fetched data:',symptomsRecords); 
  // sort records in reverse order 
  const sortedRecords = symptomsRecords.slice().sort((a, b) => b.id - a.id);
  // console.log('Stored data:' ,sortedRecords); 

  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo width={100} height={100} />
      
      <Title style={{ color: "white" }}> MyRecordsHomeView! </Title>

      {sortedRecords.map((record) => (
        <View key={record.id}>
          <Text>{record.name}</Text>
          <Text>{record.value}</Text>
          <Text> {record.parent}</Text>
        </View>
      ))}

 </Container>
  );
};

export default MyRecordsHomeView;
