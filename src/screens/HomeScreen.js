import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";
import { Button } from "react-native";
import { View } from "react-native-web";

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </MainLayout>
  );
}

export default HomeScreen;
