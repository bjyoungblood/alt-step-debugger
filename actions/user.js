'use strict';

import Promise from 'bluebird';
import alt from 'my-alt';

class UserActions {
  constructor() {
    this.generateActions(
      'loginSuccess',
      'userLoaded',
      'logout'
    );
  }

  loadUser() {
    return api({
      path : '/user',
      method : 'GET',
    })
      .then(this.actions.userLoaded);
  }

  login(email, password) {
    this.dispatch({ email, password });

    return Promise.delay(500).then(() => {
      this.actions.loginSuccess({
        email,
        token : 'asdf',
      });
    });
  }

  register(email, password) {
    this.dispatch({ email, password });

    return Promise.delay(500).then(() => {
      this.actions.loginSuccess({
        email,
        token : 'asdf',
      });
    });
  }
}

alt.createActions(UserActions, exports);
