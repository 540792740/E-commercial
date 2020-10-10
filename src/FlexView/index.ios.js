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

class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     // flex:1,
     backgroundColor:'red',
     width:300,
     height:100,
     // 改变主轴的方向 ---> 默认是竖向
     flexDirection: 'row'
  },
  innerViewStyle:{
    backgroundColor:'green',
    width:100
  },
  innerViewStyle2:{
    backgroundColor:'yellow',
    width:100
  }
});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
