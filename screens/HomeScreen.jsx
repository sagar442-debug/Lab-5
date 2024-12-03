import { View, Text, Button } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

export default HomeScreen;
