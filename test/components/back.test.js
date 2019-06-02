import React from 'react';
import { configure, shallow } from 'enzyme';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import Back from '../../src/components/back/back.js';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());

describe('Back Component', function() {

  it('Back renders image', () => {
    const wrapper = shallow(<Back />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });

  it('Back renders image with alt text equal to "back button"', () => {
    const wrapper = shallow(<Back />);
    expect(wrapper.find('img')).to.have.attr('alt', 'back button');
  });

  it('Back renders text "Back"', () => {
    const wrapper = shallow(<Back />);
    expect(wrapper.find('p')).to.have.text('Back');
  });

  it('should invoke callback when clicked', () => {
    const stubFunction = sinon.spy();
    const wrapper = shallow(<Back goBack={stubFunction} />);
    wrapper.find('a').simulate('click');
    expect(stubFunction.called).to.equal(true);
  });
})
