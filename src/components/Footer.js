import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© Nguyen Gia Thong</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
});

export default Footer;
