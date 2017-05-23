/**
 * @flow
 */

import React, { Component } from "react";
import { Text, Image, ScrollView, View } from "react-native";

import PhotoView from "react-native-photo-view";

const ImageDemo = () => (
  <ScrollView>

    <PhotoView
      source={require("../../images/lao01.jpg")}
      minimumZoomScale={0.5}
      maximumZoomScale={3}
      style={{width: 300, height: 300}}
    />

  </ScrollView>
);

export default ImageDemo;
