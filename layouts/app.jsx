'use strict';

import React from 'react';
import Router from 'react-router';
import ReactStateMagicMixin from 'alt/mixins/ReactStateMagicMixin';

import LoginPage from 'pages/login';
import userActions from 'actions/user';
import sessionStore from 'stores/session';
import Recorder from 'components/recorder';

const AppContainer = React.createClass({

  mixins : [ ReactStateMagicMixin ],

  statics : {
    registerStore : sessionStore,
  },

  renderBody() {
    if (! this.state.token) {
      return <LoginPage {...this.props} />;
    } else {
      return <Router.RouteHandler {...this.props} />;
    }
  },

  render() {
    return (
      <div>
        {this.renderBody()}
        <Recorder />
      </div>
    );
  }

});

export default AppContainer;
