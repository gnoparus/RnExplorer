/**
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Dimensions,
  StyleSheet
} from "react-native";

import Image from "react-native-transformable-image";

export const PinchZoomViewDemo = () => // <PinchZoomView>

(
  <View>
    <Image
      source={require("../../images/lao01.jpg")}
      pixels={{ width: 842, height: 595 }}
      style={styles.photo}
    />
  </View>
);

export const PinchZoomViewDemo2 = () => // <PinchZoomView>

(
  <View>
    <Image
      source={require("../../images/lao02.jpg")}
      pixels={{ width: 842, height: 595 }}
      style={styles.photo}
    />
  </View>
);

export const PinchZoomViewDemo3 = () => // <PinchZoomView>

(
  <View>
    <Image
      source={require("../../images/lao03.jpg")}
      pixels={{ width: 842, height: 595 }}
      style={styles.photo}
    />
  </View>
);

const styles = StyleSheet.create({
  photo: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
