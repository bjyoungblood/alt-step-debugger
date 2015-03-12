'use strict';

import _ from 'lodash';
import React from 'react';
import Symbol from 'es-symbol';
import alt from 'my-alt';
import DispatcherRecorder from 'alt/utils/DispatcherRecorder';

const recorder = new DispatcherRecorder(alt);

const Recorder = React.createClass({

  getInitialState() {
    return {
      recording : false,
      snapshot : null,
      events : [],
    };
  },

  startRecording() {
    this.setState({
      recording : true,
      snapshot : alt.takeSnapshot(),
      events : [],
    });

    recorder.record();
  },

  stopRecording() {
    recorder.stop();

    let events = _.cloneDeep(recorder.events);
    events = _.map(events, function(event) {
      console.log(Symbol.keyFor(event.action));
      return {
        action : Symbol.keyFor(event.action),
        data : event.data,
      };
    });

    this.setState({
      recording : false,
      events : events,
    });
  },

  replay() {
    let data = JSON.parse(this.refs.replay.getDOMNode().value);

    recorder.events = _.map(data.events, function(event) {
      console.log(alt);
      return {
        action : Symbol.for(event.action),
        data : event.data,
      };
    });

    recorder.replay();
  },

  renderReplay() {
    if (this.state.events.length) {
      let data = JSON.stringify({
        snapshot : this.state.snapshot,
        events : this.state.events
      });

      return <input value={data} />;
    } else {
      return <input ref="replay" />;
    }
  },

  renderControls() {
    if (this.state.recording === true) {
      return (
        <div><button onClick={this.stopRecording}>Stop</button></div>
      );
    } else {
      return (
        <div>
          <button onClick={this.startRecording}>Record</button>
        </div>
      );
    }
  },

  render() {
    console.log(this.state.events);
    return (
      <div style={{position : 'fixed', bottom : 0, left : 0}}>
        {this.renderControls()}
        {this.renderReplay()}
        <button onClick={this.replay}>Replay!</button>
      </div>
    );
  }

});

export default Recorder;
