import React from 'react';
import { View, Text, AlertIOS, StyleSheet, TouchableHighlight, ActivityIndicator, TextInput } from 'react-native';
import { api } from '../utils/api';
import ProfilePage from './ProfilePage';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.state = {
            loading: false,
            username: '',
            error: false
        }
    }

    onChangeText(text) {
        this.setState({
            username: text.nativeEvent.text
        })
    }

    handleSearch() {
        this.setState({
            loading: true,
        })
        api.getBio(this.state.username).then(res => {
            if (res.message === 'Not Found') {
                this.setState({
                    loading: false
                })
                AlertIOS.alert(
                    'User Not Found',
                    'Please write the correct username.'
                );
            } else {
                this.setState({
                    loading: false,
                    username: ''
                })
                this.props.navigator.push({
                    title: res.name || 'unknown',
                    component: ProfilePage,
                    passProps: { info: res },
                })
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loading && <ActivityIndicator
                        animating={true}
                        color= '#ddd'
                        size="large"
                    />
                }
                <Text style={{ color: 'white' }}>Search for user on Github</Text>
                <TextInput style={styles.input}
                    onChange={(this.onChangeText)}
                    placeholder="Type here to search!" />
                <TouchableHighlight
                    style={styles.searchBtn}
                    onPress={this.handleSearch.bind(this)}
                    underlayColor="blue">
                    <Text>Search</Text>
                </TouchableHighlight>
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

export default Main;
