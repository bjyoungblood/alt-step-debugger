'use strict';

import React from 'react';
import AutoForm from 'react-auto-form';
import ReactStateMagicMixin from 'alt/mixins/ReactStateMagicMixin';
import sessionStore from 'stores/session';

const HomePage = React.createClass({

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

  render() {
    return (
      <div>You are logged in as {this.state.userData.email}</div>
    );
  }
});

export default HomePage;
