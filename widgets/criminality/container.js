var R = require('react');
var D = R.DOM;
var Results = require('./results');
var ContainerMixin = require('../shared/containerMixin');

var Container = R.createClass({
  displayName: 'criminality-container',
  mixins: [ContainerMixin],

  render: function() {
    return D.div({ className: 'criminality-widget-container' },
      this.makeFormEl(),

      R.createElement(Results, {
        show: this.state.showResults,
        data: this.state.data
      }),

      this.makeErrorEl()
    );
  }
});

module.exports = Container;
