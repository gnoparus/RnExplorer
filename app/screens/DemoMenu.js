/**
 * @flow
 */

import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Tile, List, ListItem, Button } from "react-native-elements";
import menu from "../config/menu";

const DemoMenu = ({ navigation }) => (
  <ScrollView>
    <List>
      {menu.map(menuitem => (
        <ListItem
          key={menuitem.route}
          title={menuitem.name}
          subtitle={menuitem.description}
          onPress={() => navigation.navigate(menuitem.route, {image: menuitem.image})}
          
        />
      ))}
    </List>
  </ScrollView>
);

export default DemoMenu;
