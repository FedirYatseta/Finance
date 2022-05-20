

//import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import About from '.';



describe('About', () => {
  it('should show About', () => {
    const component = renderer.create(
      <About />,
    );
    expect(component).toMatchSnapshot();

  })
});