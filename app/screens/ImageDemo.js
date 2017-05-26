/**
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  Image,
  ScrollView,
  View,
  Dimensions,
  StyleSheet
} from "react-native";

import PhotoView from "react-native-photo-view";

const ImageDemo = () => (
  <View>

    <PhotoView
      source={require("../../images/lao01.jpg")}
      minimumZoomScale={0.9}
      maximumZoomScale={3}
      androidScaleType="center"
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

export default ImageDemo;
