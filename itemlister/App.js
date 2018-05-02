import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ListView,
  TouchableHighlight
} from 'react-native';

import styles from "./app/style";

import Toolbar from './app/components/Toolbar/Toolbar';

import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB_ZFCM-XiTw-hRw4BflWz1gAYewCDhMCE",
    authDomain: "awesomeproject-53a9a.firebaseapp.com",
    databaseURL: "https://awesomeproject-53a9a.firebaseio.com",
    projectId: "awesomeproject-53a9a",
    storageBucket: "awesomeproject-53a9a.appspot.com",  
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      itemDataSource: ds
    }

    this.itemsRef = this.getRef().child('items');

    this.renderRow = this.renderRow.bind(this);
    this.renderRow = this.pressRow.bind(this);
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentWillMount(){
    this.getItems(this.itemsRef);
  }

  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef){
    //let items = [{title:'Item One'},{title:'Item Two'}];
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }

  pressRow(item){
    console.log(item);
  }

  renderRow(item){
    return (
      <TouchableHighlight onPress={() => {
        this.pressRow(item);
      }}>
      <View style={style.li}>
        <Text style={styles.liText}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
          
          <Toolbar title="ItemLister"/>

          <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
          />

        <Text>
          Welcome to React Native!
        </Text>
        
        
      </View>
    );
  }
}

