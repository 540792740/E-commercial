import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Demo2() {
    return (
        <View style={styles.text}>
            <Text style={{backgroundColor: 'red', height:30}}>Show Text</Text>
            <Text style={{backgroundColor: 'blue',height:40}}>Show Text</Text>
            <Text style={{backgroundColor: 'yellow',height:50}}>Show Text</Text>
            <Text style={{backgroundColor: 'rgb(75,128,36)', height:60}}>Show Text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        backgroundColor: 'rgba(67,189,152,0.75)',
        justifyContent: 'space-between',
        marginTop:30,
        flexDirection: 'row',
        alignItems : 'center'
  }
});
