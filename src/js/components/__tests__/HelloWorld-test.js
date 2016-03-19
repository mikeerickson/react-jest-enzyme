
/*global jest*/
/*global describe*/
/*global it*/

jest.unmock('../HelloWorld'); // unmock to use the actual implementation of sum

import React      from 'react'
import ReactDOM   from 'react-dom'
import TestUtils  from 'react-addons-test-utils'
import HelloWorld from '../HelloWorld';

describe('HelloWorld `jest` testing', () => {

  it('adds should pass', () => {
    expect(true).toBe(true);
  });

  it('confirms HelloWorld component is mounted', () => {
    const hello = TestUtils.renderIntoDocument(
      <HelloWorld name="Mike" />
    );

    const helloNode = ReactDOM.findDOMNode(hello);

    console.log(helloNode.textContent);
    expect(helloNode.textContent).toEqual('Hello Mike From Component');
  });


});