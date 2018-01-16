import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'code';
import { PizzaList } from '../src/components/PizzaList';

const props = { pizzas: ['Name 1', 'Name 2', 'Name 3']};

xdescribe('PizzaList', () => {
    let list;

    beforeEach(() => {
        list = shallow(<PizzaList />);
    });

    it('renders the pizza list', () => {
        expect(PizzaList.find('pizza').length).to.only.include(props.pizzas.length);
    });
});
