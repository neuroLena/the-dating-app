import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Button,
  Modal,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';
import SubmitButton from "../../../../components/AddButton/index"
import Slider from '@react-native-community/slider';
import { throttle } from 'lodash';

// import mydata from './mydata.json'; // import your json data

import mydata from '../../../../../mydata.json';
// import Collapsible from 'react-native-collapsible';
import { SceneName } from '~src/@types/SceneName';
import type { PropsWithChildren } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

// The data should be an array, please ensure it is correctly formatted

  
function AddRecordView(): JSX.Element {
    const [ activeSections, setActiveSections ] = useState([]); 
    const [modalVisible, setModalVisible] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [label, setLabel] = useState('');

    const handleLabelPress = (label) => {
      setModalVisible(true);
      setLabel(label);
    };

    const symptomsList = mydata.MySymptomsList.map(item => item.name); // extract the names
    const sections = [
      {
        title: 'Emotional',
        content: symptomsList, 
      },
      {
        title: 'Physical',
        content: symptomsList,
      },
      {
        title: 'Cognitive',
        content:  symptomsList,
          
      },

      {
        title: 'Social',
        content:  symptomsList,
      },

      {
        title: 'Psuchological',
        content:  symptomsList,
      },

      {
        title: 'Specific',
        content: symptomsList,
      },

    ];
  
  

  const _renderHeader = section => {
    return (
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', padding: 10 }}>
    
        <Text>{section.title}</Text>
      </View>
    );
  };

  const _renderContent = section => {
    return (

      <FlatList
      data={section.content}
      renderItem={({ item: label, index }) => (
        // <Pressable style={styles.item} onPress={() => console.log(label)}>
        //   <Text>{label}</Text>
        // </Pressable>
        <TouchableOpacity key={index} style={styles.item} onPress={() => handleLabelPress(label)}>
        <Text>{label}</Text>
      </TouchableOpacity>
      
      )}
      keyExtractor={item => item}
      numColumns={3}
    />

    );
  };

    return (
      <SafeAreaView style={styles.container}>
        <View
          // contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
            <Accordion
              align="bottom"
              sections={sections}
              activeSections={activeSections}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
      
              onChange={(sections) => setActiveSections(sections)}
              sectionContainerStyle={styles.accordContainer}
            />
        </View>
        <SubmitButton >
          Submit 
        </SubmitButton>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Set the value for {label}</Text>

            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={100}
              step={1}
              onValueChange={throttle(value => setSliderValue(value), 200)}
              value={sliderValue}
            />

            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log(`Saved value: ${sliderValue}`);
              }}
              title="Save"
              color="#841584"
            />
          </View>
        </View>
      </Modal>

      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      maxWidth: '30%',
    },
    accordContainer: {
      paddingBottom: 4
    },
    accordHeader: {
      padding: 12,
      backgroundColor: '#666',
      color: '#eee',
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    accordTitle: {
      fontSize: 20,
    },
    accordBody: {
      padding: 12
    },
    textSmall: {
      fontSize: 16
    },
    seperator: {
      height: 12
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default AddRecordView;
