

//import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Balance from '.';



describe('Balance', () => {
  it('should show Balance', () => {
    const balance = 15
    const component = renderer.create(
      <Balance balance={balance} />,
    );
    expect(component)

  })
});