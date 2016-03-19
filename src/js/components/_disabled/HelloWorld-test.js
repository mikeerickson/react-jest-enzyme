// __tests__/CheckboxWithLabel-test.js

'use strict';

jest.unmock('../HelloWorld');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../HelloWorld';

describe('HelloWorld', () => {

  it('changes the text after click', () => {
    // Render a checkbox with label in the document
    const el = TestUtils.renderIntoDocument(
      <HelloWorld name="Mike" />
    );

    const helloWorldNode = ReactDOM.findDOMNode(el);

    // Verify that it's Off by default
    expect(helloWorldNode.textContent).toEqual('Mike');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(el, 'div')
    );
    expect(helloWorldNode.textContent).toEqual('Mike');
  });

});