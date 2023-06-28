import React from 'react';
import {
  SafeAreaView,
  // ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  // Pressable,
  Button,
  Modal,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';
import SubmitButton from "../../../../components/Button/index"
import Slider from '@react-native-community/slider';
import { throttle } from 'lodash';
import mydata from '../../../../../mydata.json';
import { SceneName } from '~src/@types/SceneName';
import type { PropsWithChildren } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import RNFS from 'react-native-fs';import * as FileSystem from 'expo-file-system';
import NeuView from '../../../../themes/NeuView';
import NeuText from '../../../../themes/NeuText';
import NeuButton from '../../../../themes/NeuButton';
import NeuInput from '../../../../themes/NeuInput';
import NeuCard from '../../../../themes/NeuCard';
import NeuSpace from '../../../../themes/NeuSpace';


import NeuSlider from '../../../../themes/NeuSlider';

// The data should be an array, please ensure it is correctly formatted

const datapath = `${FileSystem.documentDirectory}data/`;
console.log(datapath);
interface SelectedSymptom {
  label: string;
  value: number;
  parent: string
}

function AddRecordView(): JSX.Element {
    const [activeSections, setActiveSections] = useState([]); 
    const [modalVisible, setModalVisible] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [label, setLabel] = useState('');
    const [selectedSymptoms, setSelectedSymptoms] = useState<SelectedSymptom[]>([]);
    const [currentSymptom, setCurrentSymptom] = useState<SelectedSymptom>({ label: '', value: 0, parent:'' });

    

    const handleLabelPress = (label: string,  parent: string) => {
      const existingSymptom = selectedSymptoms.find(symptom => symptom.label === label);

      setCurrentSymptom({ label, 
                          value: existingSymptom ? existingSymptom.value : 0,
                        parent });
     
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
  

    const handleSave = () => {
      setSelectedSymptoms(prevSymptoms => {
        const existingIndex = prevSymptoms.findIndex(symptom => symptom.label === currentSymptom.label);
        if (existingIndex >= 0) {
          const newSymptoms = [...prevSymptoms];
          newSymptoms[existingIndex] = currentSymptom;
          return newSymptoms;
        }
        return [...prevSymptoms, currentSymptom];
      });
      setCurrentSymptom({ label: '', value: 0, parent:'' });
      setModalVisible(false);
      console.log(selectedSymptoms);
    };


    const handleSubmit = () => {
      handleSave(); // make sure the symptoms are saved before submitting the form
      // Wait for the symptoms to be saved before creating the record
      setTimeout(() => {
      
        // Create a record object
      let record = {
        id: Math.random().toString(), // generate a unique id, replace this with a better id generation logic if available
        date: new Date().toISOString(),
        symptoms: selectedSymptoms
      };

      // Read the existing records from the file
      FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'records.json')
        .then(result => {
          let records = JSON.parse(result); // parse the existing records
          records.push(record); // push the new record into the existing records array
          // Save the updated records array back into the file
          FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'records.json', JSON.stringify(records))
            .then(() => {
              console.log('Record saved!');
              // Clear selectedSymptoms
              setSelectedSymptoms([]);
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch(error => {
          // If error occurs while reading the file, write directly the new record into the file
          console.error(error);
          FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'records.json', JSON.stringify([record]))
            .then(() => {
              console.log('Record saved!');
              // Clear selectedSymptoms
              setSelectedSymptoms([]);
            })
            .catch((err) => {
              console.log(err.message);
            });
        });
      }, 1000); // wait for 1 second to allow the symptoms to be saved

        };

    const _renderHeader = section => {
      return (
        <View style={{ borderBottomWidth: 1, 
                    borderBottomColor: 'rgba(195, 209, 227, 0.3)', 
                    padding: 10,
                    backgroundColor: '#eef3fa' }}>
      
          <NeuText>{section.title}</NeuText>
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
       
          <TouchableOpacity key={index} style={styles.item} onPress={() => handleLabelPress(label, section.title)}>
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
        <NeuView>
        <View
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
       

        <NeuButton  onPress={handleSubmit} >
        <NeuText>Submit!</NeuText>
        </NeuButton>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
      >
        {/* cover the entire screen and close the modal when touched */}
         <View style={styles.centeredView} onStartShouldSetResponder={() => {
            setModalVisible(false);
            return true;
          }}>
          {/* stop propagation of touch events so the modal doesn't close when it or its children are touched */}
          <View style={styles.modalView} onStartShouldSetResponder={() => true}>
            
            <Text style={styles.modalText}>Set the value for {currentSymptom.label}</Text>

            {/* <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={100}
              step={1}
              value={currentSymptom.value}
                onSlidingComplete={(value) => {
                  setCurrentSymptom({ ...currentSymptom, value });
                }}
            /> */}
            <NeuSlider/>
            {/* <Button
              onPress={() => {
                handleSave();
                setModalVisible(!modalVisible);
                // console.log(`Saved symptom value: ${sliderValue}`);
              }}
              title="Save"
              color="#841584"
            /> */}
            <NeuButton  onPress={handleSubmit} >
              <NeuText>Save!</NeuText>
          </NeuButton>
          </View>
        </View>
      </Modal>

      </NeuView>
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
      paddingBottom: 1,
      backgroundColor: '#fff',
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
      padding: 12,
      backgroundColor: '#fef3fa',
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
      // backgroundColor: "white",
      backgroundColor: '#eef3fa',
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#a4b1c6",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 1,
      shadowRadius: 40,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "#eff2f9"
    }
  });

export default AddRecordView;
