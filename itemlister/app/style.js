import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const constants = {
    actionColor:'#3cb371'
}

const welcome = {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
const instructions = {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }

export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  liText2: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  toolbar: {
    backgroundColor: '#fff',
    height: 22,
  }
});