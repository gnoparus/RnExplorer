/**
 * @flow
 */

import React, { Component } from "react";
import { Text, ScrollView, View, Dimensions, StyleSheet } from "react-native";

import Image from "react-native-transformable-image";

let card1 = require("../../images/indonesia01.jpg");

export class TransformableImageDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this._onLayout = this._onLayout.bind(this);
  }
  _onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });

  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          onLayout={this._onLayout}
          source={card1}
          pixels={{ width: 842, height: 595 }}
          style={{flex: 1, width: this.state.width, height: this.state.height}}
        />
      </View>
    );
  }
}

export const TransformableImageDemo2 = () => (
  <View style={{flex: 1, backgroundColor: 'green'}}>
    <Image
      source={require("../../images/indonesia02.jpg")}
      pixels={{ width: 842, height: 595 }}      
      style={{flex: 1}}
    />
  </View>
);

export const TransformableImageDemo3 = () => (
  <View>
    <Image
      source={require("../../images/indonesia03.jpg")}
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
