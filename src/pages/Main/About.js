import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function About() {
    return(
        <View>
            <Text>Home</Text>
            <Button title="Navigate back"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});