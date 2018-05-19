import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CenteredView, Box } from '../../components';
import { LoginForm } from './login-form.component';
import { LoginContainer } from './login.container';

export class LoginPage extends React.Component {
  render() {
    return (
      <CenteredView>
        <Box>
          <LoginContainer>
            { state => <LoginForm loading={state.executing} onSubmit={state.login}/> }
          </LoginContainer>
        </Box>
      </CenteredView>
    );
  }
}
