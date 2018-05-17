import React from 'react';

import { Component } from 'react';
import { Input as NachoInput } from 'nachos-ui';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      status: undefined,
    };
  }

  render() {
    const { onChangeText, value, validate, required, ...props } = this.props;
    return (
      <NachoInput
        {...props}
        style={style}
        status={this.state.status}
        value={this.state.value}
        onChangeText={this.handleTextChanged}
      />
    );
  }

  handleTextChanged = value => {

    this.setState({ value });

    this.updateStatus(value);

    if (this.props.onChangeText) {
      this.props.onChangeText(value);
    }
  }

  updateStatus(value) {
    if (this.props.required || this.props.validate) {
      if (this.props.required && (!value || value.length <= 0)) {
        this.setState({ status: 'warn' });
      } else if (!this.props.validate || this.props.validate(value)) {
        this.setState({ status: 'valid' });
      } else {
        this.setState({ status: 'error' });
      }
    }
  }
}

const style = {
  marginVertical: 20,
}
