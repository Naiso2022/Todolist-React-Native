import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';



const Task = (props) => {

const navigation = useNavigation();
const route = useRoute();

  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{props.todo.task}</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", {todo: props.todo, handleDelete: props.handleDelete, index: props.index});
        }}
      >
        <View style={styles.addwrapper}>
          <Text style={styles.addButton}>Details</Text>
        
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default Task;





// function Detail({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Add"
//         onPress={() => {
//           navigation.navigate("New todo");
//         }}
//       />
//     </View>
//   );
// }


















const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    paddingLeft: 20,
  },
  textContainer: {
    backgroundColor: "#caea85",
    padding: 8,
    marginTop: 15,
    width: 340,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  addwrapper: {
    width: 60,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

 
  },
});