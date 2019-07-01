/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WelcomeSceen extends Component {
  constructor(props){
      super(props);
      this.state={
          isShowText:true,
          abc : 'ABC'
      };
  };
  static navigationOptions = {
    title: 'Counter!',
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.isShowText?<Text>{this.state.abc}</Text>:<Text>def</Text>}
        <Text>{'count' + '=' + this.props.count}</Text>
        <Text>{this.props.score}</Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
})