import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Demo2() {
    return (
        <View style={styles.text}>
            <Text style={{backgroundColor: 'red'}}>Show Text</Text>
            <Text style={{backgroundColor: 'blue'}}>Show Text</Text>
            <Text style={{backgroundColor: 'yellow'}}>Show Text</Text>
            <Text style={{backgroundColor: 'rgb(75,128,36)'}}>Show Text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        backgroundColor: 'rgba(67,189,152,0.75)',
        justifyContent: 'space-between',
        marginTop:30,
        flexDirection: 'row',
  }
});
