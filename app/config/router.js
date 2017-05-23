import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Settings from '../screens/Settings';


export const Root = StackNavigator({
  Menu: {
    screen: DemoMenu,
  },
  ButtonDemo: {
    screen: ButtonDemo,
  },
  DatePickerDemo: {
    screen: DatePickerDemo,
  },
  DropdownDemo: {
    screen: DropdownDemo,
  },
});
