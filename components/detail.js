import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionic from 'react-native-vector-icons/Ionicons'
import {Ionicons} from '@expo/vector-icons'




export default function DetailComponent( { navigation, route } ) {
const { todo, handleDelete, index } = route.params



useEffect(() => {
navigation.setOptions({
headerTitle: todo.task
});
}, [route])




  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeadline}>Description:</Text>

        <Text style={styles.textDescription}> {todo.task2}</Text>

        <TouchableOpacity
          style={styles.buttonwrapper}
          onPress={() => {
            navigation.navigate("Todos");
          }}
        >
          <Text style={styles.button}>Klar</Text>
        </TouchableOpacity>

        {/* <Text>item ID: {todo.task}</Text> */}
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.date}>Datum</Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons onPress={() => handleDelete(index)}  name="trash" size={35} style={{ color: "red" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};





const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#caea85",
    padding: 8,
    marginTop: 15,
    width: 340,
    alignSelf: "center",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#3d8403",
    color: "white",
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    width: 100,
  },
  buttonwrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  textHeadline: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
  textDescription: {
    fontSize: 20,
    marginTop: 30,
    textAlign: "center",
  },
  wrapperContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  date: {
    paddingBottom: 40,
    paddingLeft: 40,
    paddingTop: 30,
    fontSize: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#caea85",
  },
  deleteButton: {
    paddingBottom: 40,
  paddingRight: 40,
    paddingTop: 30,
    fontSize: 20,
  },
});