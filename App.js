/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Config from 'react-native-config'
import Crashes from 'appcenter-crashes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  generateJsCrash() {
    throw new Error('This is a test javascript crash!');
  }

  generateTestCrash() {
    Crashes.generateTestCrash();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>APP_NAME: {Config.APP_NAME}</Text>
        <Text>RN_APP_NAME: {Config.RN_APP_NAME}</Text>
        <TouchableOpacity onPress={this.generateJsCrash}>
          <Text>Click here to generate a JavaScript crash</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.generateTestCrash}>
          <Text>Click here to generate a Test crash</Text>
        </TouchableOpacity>
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
