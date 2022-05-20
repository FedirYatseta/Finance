//import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import React from 'react';
import Home from '.';
import { addItem, getItems } from '../../utils/indexdb'
import { act } from 'react-dom/test-utils'

jest.mock('../../utils/indexdb', () => ({
  addItem: jest.fn(),
  getItems: jest.fn()
}))


describe('Home', () => {
  let sut;
  let props;

  describe("when component is mounted", () => {


    describe("when transaction are returned successfully", () => {
      beforeEach(() => {
        getItems.mockImplementation(() => Promise.resolve([{ value: 1 }]))
      })
      beforeEach(async () => {
        await act(async () => {
          sut = mount(<Home {...props} />)
        });
        sut.update();

      })
      it('it should zero', () => {
        const { balance } = sut.find('Balance').at(0).props();
        expect(balance).toBe(0)
      }
      )

      it("should render transaction with one item", () => {

        const { transactions } = sut.find("Transactions").at(0).props();
        expect(transactions).toEqual([{ value: 1 }])
      })
    })

    describe("when transaction are returned error", () => {
      let consoleSpy;
      beforeEach(() => {
        consoleSpy = jest.spyOn(console, "error")
        getItems.mockImplementation(() => Promise.reject("My Error"))
      })
      beforeEach(async () => {
        await act(async () => {
          sut = mount(<Home {...props} />)
        });
        sut.update();

      })


      it("should render transaction with error", () => {

        const { transactions } = sut.find("Transactions").at(0).props();
        expect(transactions).toEqual([])
      })
      it("should consol error reject message ", () => {

        expect(consoleSpy).toHaveBeenCalledWith('error', "My Error")
      })
    })

    describe("when transaction is added ", () => {
      it('it should increase balance', () => {
        const { onChange } = sut.find("Form").at(0).props();
        onChange({
          value: 1,
          date: '',
          comment: '',
        })
        sut.update();

        const { balance } = sut.find("Balance").at(0).props();
        expect(balance).toBe(1)
      })



    })
  })

})