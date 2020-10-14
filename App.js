import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Demo} from './src/FlexView/demo1'
import {Demo2} from './src/FlexView/demo2'
import {Demo3} from './src/FlexView/demo3'
import {Demo4} from './src/FlexView/demo4'
import {ButtonStyle} from "./src/基本组件/ButtonStyle";

export default function App() {
  return (
    <View style={styles.container}>
        <ButtonStyle/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
  }
});
