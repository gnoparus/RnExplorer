/**
 * @flow
 */

import React, { Component } from "react";
import { Text, Image, ScrollView, View, Dimensions } from "react-native";

import PhotoView from "react-native-photo-view";

const ImageDemo = () => (
  <View>

    <PhotoView
      source={require("../../images/lao01.jpg")}
      minimumZoomScale={0.5}
      maximumZoomScale={3}
      rotate={true}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
      }}
    />

  </View>
);

export default ImageDemo;
