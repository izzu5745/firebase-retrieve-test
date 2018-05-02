import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import styles from "../../style";

export default class Toolbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor="coral"
            barStyle="light-content"
        />
        <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>
            {this.props.title}
        </Text>
        </View>
      
      </View>
    );
  }
}


//AppRegistry.registerComponent('Toolbar', () => Toolbar);
