import React from "react";
import { View, StyleSheet } from "react-native";
import MainNavigation from "./src/navigations/MainNavigation"

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
});

export default App;
