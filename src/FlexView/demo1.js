import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Demo() {
    return (
        <Text style={styles.text}>Show Text</Text>
    );
}

const styles = StyleSheet.create({
  text:{
    backgroundColor:'rgb(156,42,101)',
    height:100,
    width:100
  }
});
