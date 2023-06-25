import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Container, Title } from "./styles";
import Logo from "../../assets/images/Logo.svg"
// import AddButton from "../../components/AddButton/index"
import MyButton from "../../components/Button/index"
import { useNavigation } from "@react-navigation/native";
// import handleAddRecord from "../AddRecord/index"
import { SceneName } from '~src/@types/SceneName';

const Home = () => {
  const navigation = useNavigation();
  const handleAddRecord=  () => { 
    navigation.navigate(SceneName.AddRecord);
  };
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo width={100} height={100} />
      
      <Title style={{ color: "white" }}> Welcome! </Title>


      <View style={{ height: 50 }} />
      {/* <AddButton/> */}
      {/* <Text style={{fontSize: 20, color: '#EE61A1'}}>Add Record</Text> */}
      <MyButton onPress={handleAddRecord}>
        + Add Record
      </MyButton>
       </Container>
  );
};

export default Home;
