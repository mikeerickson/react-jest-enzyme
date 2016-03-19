import React from 'react'

var Member = React.createClass({
  render: function() {
    return (
      <div key={this.props.member.id}>
        <h5>{this.props.member.lname}, {this.props.member.fname} </h5>
        <p>{this.props.member.dob}</p>
      </div>
    )
  }
})

module.exports = Member