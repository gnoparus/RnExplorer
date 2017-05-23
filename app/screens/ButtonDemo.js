/**
 * @flow
 */

import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Platform } from "react-native";
import { Text, Button } from "react-native-elements";

const ButtonDemo = () => (
  <ScrollView>
    <View>

      <Button title="BUTTON Normal" buttonStyle={styles.button} />

      <Button
        raised
        icon={{ name: "cached" }}
        title="COLOR BUTTON WITH ICON"
        color="yellow"
        backgroundColor="red"
        buttonStyle={styles.button}
      />

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
        title="LARGE WITH LEFT ICON"
        buttonStyle={styles.button}
      />

      <Button
        large
        icon={{
          name: "squirrel",
          type: "octicon",
        }}
        title="OCTICON" 
        buttonStyle={ {marginTop: 15, backgroundColor: "green", borderRadius: 10}}
      />
    </View>

  </ScrollView>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 15
  }
});

export default ButtonDemo;
