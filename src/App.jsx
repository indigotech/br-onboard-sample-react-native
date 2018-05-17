import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthenticationHttpDataSource as dataSource } from './data/http';
import { CenteredView, Input, Box } from './components';

export default class App extends React.Component {
  render() {
    dataSource.login('admin@taqtile.com', '1111', false)
              .then(data => console.log(data));
    return (
      <CenteredView>
        <Box>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Input placeholder='Name' />
        </Box>
      </CenteredView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
