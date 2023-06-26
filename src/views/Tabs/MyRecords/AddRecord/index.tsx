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

// The data should be an array, please ensure it is correctly formatted

  
interface SelectedSymptom {
  label: string;
  value: number;
}

function AddRecordView(): JSX.Element {
    const [activeSections, setActiveSections] = useState([]); 
    const [modalVisible, setModalVisible] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [label, setLabel] = useState('');
    const [selectedSymptoms, setSelectedSymptoms] = useState<SelectedSymptom[]>([]);
    const [currentSymptom, setCurrentSymptom] = useState<SelectedSymptom>({ label: '', value: 0 });

    

    const handleLabelPress = (label: string) => {
      const existingSymptom = selectedSymptoms.find(symptom => symptom.label === label);

      setCurrentSymptom({ label, value: existingSymptom ? existingSymptom.value : 0 });
     
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
  
    // const handleSave = () => {
    //   const newSymptom: SelectedSymptom = { label, value: sliderValue };
    //   setSelectedSymptoms([...selectedSymptoms, newSymptom]);
    //   setModalVisible(false);
    //   setLabel('');
    //   setSliderValue(0);
    // };
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
      setCurrentSymptom({ label: '', value: 0 });
      setModalVisible(false);
    };

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
        <SubmitButton onPress={handleSave}>
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
        {/* cover the entire screen and close the modal when touched */}
         <View style={styles.centeredView} onStartShouldSetResponder={() => {
            setModalVisible(false);
            return true;
          }}>
          {/* stop propagation of touch events so the modal doesn't close when it or its children are touched */}
          <View style={styles.modalView} onStartShouldSetResponder={() => true}>
            
            <Text style={styles.modalText}>Set the value for {currentSymptom.label}</Text>

            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={100}
              step={1}
              value={currentSymptom.value}
                onSlidingComplete={(value) => {
                  setCurrentSymptom({ ...currentSymptom, value });
                }}
            />

            <Button
              onPress={() => {
                handleSave();
                setModalVisible(!modalVisible);
                console.log(`Saved symptom value: ${sliderValue}`);
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
