/**
 * 
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./app/index";

export default class RnExplorer extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent("RnExplorer", () => RnExplorer);
