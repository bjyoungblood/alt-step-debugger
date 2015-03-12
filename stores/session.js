'use strict';

import alt from 'my-alt';

import userActions from 'actions/user';

class SessionStore {
  constructor() {
    this.bindActions(userActions);
    this.userData = null;
    this.token = null;
    this.error = null;
  }

  onUserLoaded(userData) {
    this.userData = userData;
  }

  onLoginSuccess(userData) {
    this.userData = userData;
    this.token = userData.token;
    this.error = null;
  }

  onLogout() {
    this.token = null;
    this.userData = null;
  }
}

export default alt.createStore(SessionStore, 'SessionStore');
