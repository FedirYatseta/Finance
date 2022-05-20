

//import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Transaction from '.';



describe('Transaction', () => {
  it('should show Transaction', () => {
    let comment = "test";
    let date = "2022-21-21";
    let value = 312.20;
    let transaction = { transaction: { comment, date, value } }
    const component = renderer.create(
      <Transaction transaction={transaction} />
    );
    expect(component).toMatchSnapshot();

  })
});