/*global describe*/
/*global it*/

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/js/components/Foo';


describe("Foo Suite Testing Shallow Rendering", function() {
  it("component should have defined className", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it("verify component returns class entry", function() {
    expect(shallow(<Foo />).is('.foo')).to.equal(true);
  });

  it("confirms that component has been created with a single class", function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });
});