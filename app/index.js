import React from "react";
import { View, StyleSheet } from "react-native";
import App from "../src/App";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <App />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    width: "100%",
  },
});
