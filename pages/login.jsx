'use strict';

import React from 'react';
import AutoForm from 'react-auto-form';
import ReactStateMagicMixin from 'alt/mixins/ReactStateMagicMixin';

import userActions from 'actions/user';
import sessionStore from 'stores/session';

const LoginPage = React.createClass({

  mixins : [ ReactStateMagicMixin ],

  statics : {
    registerStore : sessionStore,
  },

  getInitialState() {
    return {
      email : null,
      password : null,
    };
  },

  onChange(event, name, value, change) {
    this.setState(change);
  },

  onLogin(event) {
    event.preventDefault();
    userActions.login(this.state.email, this.state.password);
  },

  onRegister(event) {
    event.preventDefault();
    userActions.register(this.state.email, this.state.password);
  },

  renderError() {
    if (this.state.error) {
      return <div>Error!</div>
    }
  },

  render() {
    return (
      <AutoForm onChange={this.onChange} onSubmit={this.onLogin}>
        {this.renderError()}
        <input type="text"
               name="email"
               placeholder="user@example.com" />
        <input type="password"
               name="password"
               placeholder="Password" />
        <button type="submit">Sign In</button>
        <button type="submit" onClick={this.onRegister}>Register</button>
      </AutoForm>
    );

  },
});

export default LoginPage;
