import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
import api from '../utils/api';

export default class ProfilePage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.info.name}</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f32',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBtn: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10
    },
    input: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white'
    }
})