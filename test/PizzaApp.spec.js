import {expect} from 'code';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PizzaApp from '../src/components/PizzaApp';

describe('Main Pizza Index App', () => {
    let pizzaApp;
    let mockPizzas = {
        "pizzas": [
            "Sausage",
            "Cheese",
            "Pepperoni",
            "Hawaiian",
            "vegetable",
            "3 cheeSe",
            "macaroni",
            "Chicken",
            "Sausage and Pepperoni"
        ]
    };

    beforeEach(() => {
    });

    it('should render all child components', () => {
        const promise = Promise.resolve(mockPizzas);
        sinon.stub(global, 'fetch', () => promise);
        pizzaApp = shallow(<PizzaApp />);

        return promise.then(() => { }).then(() => {
            expect(pizzaApp.find('h1').text()).to.equal('Pizzas');
        });
    });
});
