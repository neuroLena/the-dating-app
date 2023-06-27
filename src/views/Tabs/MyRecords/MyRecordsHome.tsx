import React, { useEffect,useState } from "react";
import { ScrollView, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Container, Title } from "./styles";
import Logo from "../../../assets/images/Logo.svg"
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers'; // Update the path according to your project structure
import { useDispatch } from 'react-redux';
import { fetchSymptomsRequest } from '~store/reducers/symptoms'; // Update the import path according to your file structure
import * as FileSystem from 'expo-file-system';
import RecordCard from './components/RecordCard';
import { width } from "~constants";



const MyRecordsHomeView = () => {
  // const dispatch = useDispatch();
  const [records, setRecords] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchSymptomsRequest.request());
  // }, [dispatch]);
  useEffect(() => {
    const fetchRecords = async () => {
      const fileUri = FileSystem.documentDirectory + 'records.json';
      const fileContent = await FileSystem.readAsStringAsync(fileUri);
      
      if (!fileContent) {
        console.log('No content found in the file.');
        return;
      }
      
      const fetchedRecords = setRecords(JSON.parse(fileContent));
      
    }

    fetchRecords();
  }, []);

  // get data from  Redux store
  // const symptomsRecords = useSelector((state: RootState) => state.symptoms.data);
  // console.log('Fetched data:',symptomsRecords); 
  // sort records in reverse order 
  // const sortedRecords = symptomsRecords.slice().sort((a, b) => b.id - a.id);
  // console.log('Stored data:' ,sortedRecords); 
      // {/* <Text>{record.name}</Text>
      // <Text>{record.value}</Text>
      // <Text> {record.parent}</Text> */}
      // {/* <Text>{record.label}: {record.value}</Text> */}

  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo width={100} height={100} />
      
      <Title style={{ color: "white" }}> Hello, love! </Title>
      <Text style={{ color: "black", fontWeight:'bold' }}> Your records: </Text>


      <View style={{ flex:3, width: "90%", overflow: "scroll" }}>
      <ScrollView indicatorStyle="black" showsVerticalScrollIndicator={true}>
        {records.map((record, index) => (
            <View key={index}>
          <RecordCard key={index} record={record} />
          
        </View>
        ))}
       
      </ScrollView>
      </View>

 </Container>
  );
};




export default MyRecordsHomeView;



