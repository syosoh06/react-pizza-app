import React from 'react';
import { mount } from 'enzyme';
import {expect} from 'code';
import Pizza from '../src/components/Pizza';

const props = { pizza: 'chicken pizza'};

describe('Pizza', () => {
   let pizza = mount(<Pizza {...props}/>);

    it('renders the pizza text', () => {
        expect(pizza.find('a').text()).to.only.include(props.pizza);
    })
});
