import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
import api from '../utils/api';

export default class ProfilePage extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.info.name}</Text>
            </View>
        )
    }
}