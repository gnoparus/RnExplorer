/**
 * @flow
 */

import React from "react";
import { StackNavigator } from "react-navigation";

import DemoMenu from "../screens/DemoMenu";
import ButtonDemo from "../screens/ButtonDemo";
import DatePickerDemo from "../screens/DatePickerDemo";
import DropdownDemo from "../screens/DropdownDemo";
import SliderDemo from "../screens/SliderDemo";
import TextFieldDemo from "../screens/TextFieldDemo";
import ImageDemo from "../screens/ImageDemo";

export const Root = StackNavigator({
  DemoMenu: {
    screen: DemoMenu,
    navigationOptions: {
      title: "React Native UI Explorer"
    }
  },
  ImageDemo: {
    screen: ImageDemo,
    navigationOptions: {
      title: "Image Demo"
    }
  },
  ButtonDemo: {
    screen: ButtonDemo,
    navigationOptions: {
      title: "Button Demo"
    }
  },
  DatePickerDemo: {
    screen: DatePickerDemo,
    navigationOptions: {
      title: "Date Picker Demo"
    }
  },
  DropdownDemo: {
    screen: DropdownDemo,
    navigationOptions: {
      title: "Drop Down Demo"
    }
  },
  SliderDemo: {
    screen: SliderDemo,
    navigationOptions: {
      title: "Slider Demo"
    }
  },
  TextFieldDemo: {
    screen: TextFieldDemo,
    navigationOptions: {
      title: "TextField Demo"
    }
  }
});
