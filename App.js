import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Demo} from './src/FlexView/demo1'
import {Demo2} from './src/FlexView/demo2'

export default function App() {
  return (
    <View style={styles.container}>
        <Demo2/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'rgba(67,189,152,0.75)',
        // width:100,
        // height:100,
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
  }
});
