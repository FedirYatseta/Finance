

//import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Statistics from '.';



describe('Statistics', () => {
  it('should show Statistics', () => {
    const component = renderer.create(
      <Statistics />,
    );
    expect(component).toMatchSnapshot();

  })
});