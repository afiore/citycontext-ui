var R = require('react');
var D = R.DOM;

var Errors = R.createClass({
  propTypes: {
    show: R.PropTypes.bool,
    text: R.PropTypes.string
  },

  render: function() {
    var style = this.props.show ? {} : { display: 'none' };

    if (this.props.text) {
      console.error(this.props.text);
    }

    return D.section(null,
      D.p({ className: 'error', style: style }, this.props.text)
    );
  }
});

module.exports = Errors;
