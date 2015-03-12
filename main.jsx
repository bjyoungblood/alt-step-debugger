/* global document */
'use strict';

import React from 'react';
import router from './router';

window.React = React;

// Do this to ensure the store inits its token from local storage
// before rendering any views
require('./stores/session');

// Initializing touch events
React.initializeTouchEvents(true);

document.addEventListener('DOMContentLoaded', function() {
  router.run(function startApplication(Handler, state) {
    React.render(
      <Handler params={state.params} query={state.query} />,
      document.getElementById('app-container')
    );
  });
});
