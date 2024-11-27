import MainLayout from "../layouts/MainLayout";
import React from "react";
import { Text, StyleSheet } from "react-native";

function AboutScreen() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={styles.title}>To-Do App</Text>
      <Text style={styles.text}>Developed by: Thong</Text>
      <Text style={styles.text}>Current Date: {currentDate}</Text>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default AboutScreen;
