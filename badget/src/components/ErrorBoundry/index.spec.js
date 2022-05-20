
import { configure, shallow, mount } from 'enzyme';
//import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from '.';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ErrorBoundary ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorBoundary hasError={true} />); // Here it's not necessary to mock the clickSquare function.
  });

  it('should render the status Error', () => {
    wrapper.setProps({ hasError: true });

    expect(wrapper.state("hasError")).toEqual(false);
  })
}
)
