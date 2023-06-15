
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Button, useLay, Modal} from 'react-native';
import { useState, useEffect, createContext   } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import React from 'react';
import DetailComponent from './components/detail';
import Task from "./components/task";



const Stack = createNativeStackNavigator();


function Home({navigation }) {
   const [task, setTask] = useState();
      const [task2, setTask2] = useState();
   const [taskItems, setTaskItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

     React.useLayoutEffect(() => {
       navigation.setOptions({
         headerRight: () => (
           <Button title="Add +" onPress={() => setModalOpen(true)} />
         ),
       });
     }, [navigation]);
   
   const handleAddTask = () => {
     setTaskItems([...taskItems, {task, task2}]);
     setTask(null);
        setTask2(null);
     setModalOpen(false);
     // const todo = { text, text2 };
     // //setText2(null);
     // console.log("todo before send", todo);
   };

//  const handleDelete = (index) => {
//    setTaskItems(taskItems.filter((todo) => {
//     if (todo.index !== index) return true;
 
//    }));

//  };

const handleDelete = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}

   return (
     <View style={styles.container}>
       <Modal visible={modalOpen} animationType="slide" >
         <View style={styles.modal}>
           <KeyboardAvoidingView
             behavior={Platform.OS === "ios" ? "padding" : "height"}
           >
             <View style={styles.inputContainer}>
               <TextInput
                 style={styles.input}
                 placeholder={"Write a title"}
                 value={task}
                 onChangeText={(text) => setTask(text)}
               />

                 
               <TextInput
                 style={styles.input2}
                 placeholder={"Description"}
                 value={task2}
                 onChangeText={(text2) => setTask2(text2)}
               />
               <TouchableOpacity onPress={() => handleAddTask()}>
                 <View style={styles.addwrapper}>
                   <Text style={styles.addButton}>Done</Text>
                 </View>
               </TouchableOpacity>
             </View>
           </KeyboardAvoidingView>
         </View>
       </Modal>

       <View>
         <Text style={styles.firstline}>Today´s tasks</Text>
         <View>
           {taskItems.map((item, index) => {
             return <Task key={index} todo={item} handleDelete={handleDelete} index={index}/>;
           })}
         </View>
       </View>
     </View>
   );
}

// function Details({navigation}) {
  


//    return (
//      <View style={styles.container}>
//       <Text>Detail page</Text>
//      </View>
//    );
// }



// function Details({ route, navigation}) {




//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <DetailComponent />

//     </View>
//   );
// }


















export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#caea85" },
          headerTintColor: "black",
        }}
      >
        <Stack.Screen name="Todos" component={Home} />
        <Stack.Screen
          name="Details"
          component={DetailComponent}
     
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  firstline: {
    paddingTop: 40,
    alignSelf: "center",
    fontSize: 40,
  },
  addButton: {},
  addwrapper: {
    width: 70,
    height: 60,
    backgroundColor: "#c2f751",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 350,
    fontSize: 20,
    marginTop: 30,
    paddingLeft: 30,
    alignSelf: "center",
    borderRadius: 10,
  },
  input2: {
    backgroundColor: "#ffffff",
    height: 200,
    width: 350,
    fontSize: 20,
    marginTop: 30,
    paddingLeft: 30,
    alignSelf: "center",
  borderRadius: 10,
  },
  modal: {
    paddingTop: 60,
  },
  inputContainer: {
    backgroundColor: "#000000",
    height: 800,
  },
});


