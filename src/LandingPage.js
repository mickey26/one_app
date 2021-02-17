import React, {useEffect, useState} from 'react';
// import {ProfilePic} from './constants/statics';

import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
const taskList = [
  'Uthna',
  'brush krna',
  'chai peena',
  'early morning nap',
  'lunch',
  'afternoon nap',
  'chai peena',
  'chai peena',
  'chai peena',
  'chai peena',
  'chai peena',
  'evening nap',
  'dinner',
  'good-night nap',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'chai peena',
  'chai peena',
  'chai peena',
  'chai peena',
  'evening nap',
  'dinner',
  'good-night nap',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
  'dinner',
];

function LandingPage() {
  const [aler, setAler] = useState('');
  const [task, setTask] = useState([...taskList]);

  const addTask = (temp) => {
    console.log(temp);
    setAler(temp);
  };

  const addTOList = () => {
    if (aler != '') {
      setTask([...task, aler]);
    }
    setAler('');
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textCss}>TODO APP</Text>
        <TextInput
          placeholder="add task"
          value={aler}
          onChangeText={(temp) => addTask(temp)}
        />
      </View>
      <Button title="add task" onPress={() => addTOList()} />
      <View style={styles.taskView}>
        {task &&
          task.map((data, index) => (
            <Text style={styles.tableText} key={index}>
              {data}
            </Text>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    backgroundColor: 'pink',
    // marginTop: 300,
  },
  textCss: {
    fontSize: 30,
  },
  tableText: {
    fontSize: 30,
    color: 'green',
  },
  taskView: {
    // flex: 1,
    marginBottom: 200,
  },
});

export default LandingPage;
