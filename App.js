/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PartOne from './app/components/PartOne'



type Props = {};
export default class App extends Component<Props> {
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
    }, error => console.log(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <PartOne onGetLocation={this.getUserLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
