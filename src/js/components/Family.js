import React from 'react'
import Member from './Member'

const Family = React.createClass({
  render: function() {
    const memberNodes = this.props.members.map(function(member) {
      return (
        <Member key={member.id} member={member} />
      );
    });
    return (
      <div className="memberList">
        <h3>{this.props.surname} Family:</h3>
        {memberNodes}
      </div>
    );
  }
});

module.exports = Family;