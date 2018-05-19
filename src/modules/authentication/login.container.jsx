import { Component } from 'react';

import { AuthenticationHttpDataSource as DataSource } from '../../data/http';

export class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      executing: false,
      done: false,
      result: undefined,
      login: this.login,
    }
  }

  render() {
    return this.props.children(this.state);
  }

  login = (email, password) => {
    this.setState({ executing: true });

    DataSource
      .login(email, password, false)
      .then(response => {
        this.setState({
          executing: false,
          done: true,
          result: response,
        });
      });
  }
}
