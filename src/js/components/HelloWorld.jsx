var React = require('react');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Hello {this.props.name} From Component</h3>
      </div>
    )
  }
});

module.exports = HelloWorld;