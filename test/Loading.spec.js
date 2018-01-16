import React from 'react';
import { mount } from 'enzyme';
import {expect} from 'code';
import Loading from '../src/components/Loading';

describe('Loading Button', () => {
    let loading = mount(<Loading />);

    it('renders the loading text', () => {
        expect(loading.find('h1').text()).to.only.include('Loading');
    })
});
