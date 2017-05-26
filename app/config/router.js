/**
 * @flow
 */

import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

import DemoMenu from "../screens/DemoMenu";
import ButtonDemo from "../screens/ButtonDemo";
import DatePickerDemo from "../screens/DatePickerDemo";
import DropdownDemo from "../screens/DropdownDemo";
import SliderDemo from "../screens/SliderDemo";
import TextFieldDemo from "../screens/TextFieldDemo";
import ImageDemo from "../screens/ImageDemo";
import { PinchZoomViewDemo, PinchZoomViewDemo2, PinchZoomViewDemo3 } from "../screens/PinchZoomViewDemo";

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
  PinchZoomViewDemo: {
    screen: LaoTabs,
    navigationOptions: {
      title: "PinchZoomView Demo"
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

export const LaoTabs = TabNavigator( {
  BlankForm: {
    screen: PinchZoomViewDemo, 
    navigationOptions: {
      tabBarLabel: 'Original',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  }, 
  TranslatedForm: {
    screen: PinchZoomViewDemo2, 
    navigationOptions: {
      tabBarLabel: 'Translated',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  }, 
  ExampledForm: {
    screen: PinchZoomViewDemo3, 
    navigationOptions: {
      tabBarLabel: 'Example',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },

  },
});
