import React from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import Main from './App/components/Main'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: 'Github notetaker',
          backButtonTitle: 'back'
        }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  }
});
