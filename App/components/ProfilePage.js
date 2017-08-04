import React from 'react';
import { Dimensions, View, Image, Text, StyleSheet, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
import api from '../utils/api';

export default class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.goToNotes = this.goToNotes.bind(this);
    }
    goToProfile = () => {
        console.log('profile')
    }

    goToRepos() {
        console.log('repos');
    }

    goToNotes() {
        console.log('notes');
    }

    btnStyle(num) {
        obj = {
            padding: 20,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
        if (num == 0) {
            obj.backgroundColor = '#1232fd';
        } else if (num == 1) {
            obj.backgroundColor = '#fd3212';
        } else if (num == 2) {
            obj.backgroundColor = '#12fd32';
        }
        return obj;
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: this.props.info.avatar_url }}
                    style={styles.image}
                />
                <TouchableHighlight underlayColor="gray" style={this.btnStyle(0)} onPress={this.goToProfile}>
                    <Text style={{ color: 'white' }}>Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="gray" style={this.btnStyle(1)} onPress={this.goToRepos.bind(this)}>
                    <Text style={{ color: 'white' }}>Repos</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="gray" style={this.btnStyle(2)} onPress={this.goToNotes}>
                    <Text style={{ color: 'white' }}>Note</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        backgroundColor: '#f32',
        flex: 1
    },
    image: {
        height: 300,
    },
})