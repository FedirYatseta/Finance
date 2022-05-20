

//import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';



describe('App', () => {
  it('should show App', () => {
    const component = renderer.create(
      <App />,
    );
    expect(component).toMatchSnapshot();

  })
});