import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Dimensions } from 'react-native';

export function Demo4() {
    return (
        <View style={styles.container}>
            <Text>Width: {Dimensions.get('window').width}</Text>
            <Text>height: {Dimensions.get('window').height}</Text>
            <Text>scale: {Dimensions.get('window').scale}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(67,189,152,0.75)',
        justifyContent: 'center' ,
        // marginTop:30,
        // flexDirection: 'row',
        flex:1,
        alignItems : 'center',
        // flexWrap: 'wrap-reverse',
  }
});
