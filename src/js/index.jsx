
var React      = require('react');
var ReactDOM   = require('react-dom');
var HelloWorld = require('./components/HelloWorld');
var Family     = require('./components/Family');
var Checkbox   = require('./components/CheckboxWithLabel');

  var familyMembers = [
      {id: 0, fname: 'Mike',    lname: 'Erickson', dob: '10/15/72', email: 'mike.erickson@mac.com'},
      {id: 1, fname: 'Kira',    lname: 'Erickson', dob: '5/2/76',   email: 'kiraerickson@mac.com'},
      {id: 2, fname: 'Joelle',  lname: 'Asoau',    dob: '7/12/93',  email: 'joelle.erickson@mac.com'},
      {id: 3, fname: 'Brayden', lname: 'Erickson', dob: '2/28/95',  email: 'brady.erickson@mac.com'},
      {id: 4, fname: 'Bailey',  lname: 'Erickson', dob: '3/19/96',  email: 'bailey.erickson@mac.com'},
      {id: 5, fname: 'Trevor',  lname: 'Erickson', dob: '4/7/97',   email: 'trevor.erickson1997@gmail.com'},
      {id: 6, fname: 'Nate',    lname: 'Asoau',    dob: '11/21/74', email: 'nate.asoau@mac.com'},
      {id: 7, fname: 'Alaya',   lname: 'Asoau',    dob: '11/21/13', email: ''}
    ];

var familyObj = {
  surname: 'Erickson',
  members: familyMembers
}

var App = React.createClass({
  getInitialState : function() {
    return {
      surname: 'Erickson',
      isChecked: true,
      members:  familyMembers
    };
  },
  render : function() {
    return (
      <div>
        <h1>Hello World From App</h1>
        <HelloWorld name="Mike"/>
        <hr />
        <Family surname={this.state.surname} members={this.state.members}/>

      </div>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#app'));

