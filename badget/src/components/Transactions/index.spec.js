

//import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Transactions from '.';



describe('Transactions', () => {
  it('should show Transactions', () => {
    const transactions = []
    const component = renderer.create(
      <Transactions transactions={transactions} />,
    );
    expect(component).toMatchSnapshot();

  })
});