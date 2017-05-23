/**
 * @flow
 */

import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Platform } from "react-native";
import { Text, Button } from "react-native-elements";

const ButtonDemo = () => (

  <ScrollView>

    <Button title="BUTTON Normal" buttonStyle={styles.button} />

    <Button raised icon={{ name: "cached" }} title="BUTTON WITH ICON"  buttonStyle={styles.button} />

    <Button
      large
      iconRight
      icon={{ name: "code" }}
      title="LARGE WITH RIGHT ICON"
       buttonStyle={styles.button}
    />

    <Button
      large
      icon={{ name: "envira", type: "font-awesome" }}
      title="LARGE WITH RIGHT ICON"
       buttonStyle={styles.button}
    />

    <Button
      large
      icon={{
        name: "squirrel",
        type: "octicon",
        buttonStyle: { backgroundColor: "red", borderRadius: 10 }
      }}
      title="OCTICON"
       buttonStyle={styles.button}
    />

  </ScrollView>
  
);

const styles = StyleSheet.create({
  
  button: {
    marginTop: 15,
    

  },
 
});

export default ButtonDemo;