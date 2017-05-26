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


export const LaoTabs = TabNavigator( {
  BlankForm: {
    screen: PinchZoomViewDemo, 
    navigationOptions: {
      tabBarLabel: 'Original',
    },
  }, 
  TranslatedForm: {
    screen: PinchZoomViewDemo2, 
    navigationOptions: {
      tabBarLabel: 'Translated',
    },
  }, 
  ExampledForm: {
    screen: PinchZoomViewDemo3, 
    navigationOptions: {
      tabBarLabel: 'Example',
    },

  },
});

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
  PinchZoomViewDemo0: {
    screen: LaoTabs,
    navigationOptions: {
      title: "ลาว"
    }
  },
  PinchZoomViewDemo1: {
    screen: LaoTabs,
    navigationOptions: {
      title: "พม่า"
    }
  },
  PinchZoomViewDemo2: {
    screen: LaoTabs,
    navigationOptions: {
      title: "อเมริกา"
    }
  },
  PinchZoomViewDemo3: {
    screen: LaoTabs,
    navigationOptions: {
      title: "แคนดา"
    }
  },
  PinchZoomViewDemo4: {
    screen: LaoTabs,
    navigationOptions: {
      title: "จีน"
    }
  },
  PinchZoomViewDemo5: {
    screen: LaoTabs,
    navigationOptions: {
      title: "ญี่ปุ่น"
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


