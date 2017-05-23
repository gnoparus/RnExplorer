import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { menu } from "../config/data";

export const DemoMenu = (
    <ScrollView>
        <List>
        {menu.map((menuitem) => (
            <ListItem 
            key={menuitem.route}
            title={menuitem.name}
            subtitle={menuitem.description}
            onPress={this.props.navigation.navigate({menuitem.route}, {})}
        )}
        </List>
    </ScrollView>
);

