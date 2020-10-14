import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Demo3() {
    return (
        <View style={styles.container}>
            <Text style={{
                backgroundColor: 'red',
                flex:1,
                height:60}}>Show Text</Text>
            <Text style={{
                backgroundColor: 'blue',
                flex:2, height:70}}>Show Text</Text>
            <Text style={{
                backgroundColor: 'yellow',
                alignSelf:'flex-start',
                height:50,
                flex:2}}>Show Text</Text>
            <Text style={{
                backgroundColor: 'rgb(75,128,36)',
                height:80,
                flex:1}}>Show Text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(67,189,152,0.75)',
        justifyContent: 'flex-start',
        marginTop:30,
        flexDirection: 'row',
        alignItems : 'center',
        flexWrap: 'wrap-reverse',
  }
});
