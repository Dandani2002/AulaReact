import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 280,
        borderBottomColor: '#9370db',
        borderBottomWidth: 5,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,

        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        borderTopWidth: 5,
        borderTopColor: '#007AFF',
 
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#1a42a7',
        paddingTop: 50,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
    },
});

export default styles;