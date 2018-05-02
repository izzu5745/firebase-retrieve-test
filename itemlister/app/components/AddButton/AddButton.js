import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import { constants as _constants, action, actionText } from "../../style";
const constants = _constants;

export default class AddButton extends Component {
  render() {
    return (
      <View style={action}>
        <TouchableHighlight
            underlayColor="#24ce84"
            onPress={this.props.onPress}
        >
            <Text style={actionText}>{this.props.title}
            {this.props.title}
            </Text>
        </TouchableHighlight>    
      </View>
    );
  }
}


//AppRegistry.registerComponent('AddButton', () => AddButton);
