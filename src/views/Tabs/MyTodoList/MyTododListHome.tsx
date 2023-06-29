import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
// import NeuView from '../../../themes/NeuView';
// import NeuText from '../../../themes/NeuText';
// import NeuButton from '../../../themes/NeuButton';
// import NeuInput from '../../../themes/NeuInput';
// import NeuCard from '../../../themes/NeuCard';
// import NeuSpace from '../../../themes/NeuSpace';
import {NeuView,
        NeuText,
        NeuButton,
        NeuCard,
        NeuSpace,
        NeuInput
        }from '../../../themes/NeuElemets';



const TodoListView = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleAddTask = () => {
    if (currentTask !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask('');
    }
  };

  return (
    <NeuView >
      {/* <NeuText >Todo List</NeuText> */}

      <NeuView>
        <NeuInput
          value={currentTask}
          onChangeText={setCurrentTask}
          placeholder="New task..."
        />
        <NeuSpace height={20}/>
        <NeuButton  onPress={handleAddTask} >
        <NeuText>Add new task!</NeuText>
          </NeuButton>
      </NeuView>

      <ScrollView>
        {tasks.map((task, index) => (
          <NeuView key={index}>
            <NeuCard><NeuText>{task}</NeuText></NeuCard>
          </NeuView>
        ))}
      </ScrollView>
    </NeuView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   form: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//   },
//   tasksContainer: {
//     flex: 1,
//   },
//   task: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
// });

export default TodoListView;
