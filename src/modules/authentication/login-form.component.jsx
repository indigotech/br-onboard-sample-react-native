import React from 'react';

import { View } from 'react-native';
import { Component } from 'react';
import { Checkbox } from 'nachos-ui';
import { Button, Input, Validator } from '../../components';

export class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Input
          placeholder="Email"
          required={true}
          value="admin@taqtile.com"
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.handleEmailChanged}
          validate={Validator.email}
        />
        <Input
          placeholder="Password"
          required={true}
          value="1111"
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={this.handlePasswordChanged}
          validate={Validator.password}
        />
        <Button disabled={this.props.loading} onPress={this.handleSubmit}>
          Login
        </Button>
      </View>
    );
  }

  handleEmailChanged = email => {
    this.email = email;
  }

  handlePasswordChanged = password => {
    this.password = password;
  }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.email, this.password);
    }
  }
}
