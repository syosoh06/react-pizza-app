import React from 'react';
import { mount } from 'enzyme';
import {expect} from 'code';
import FilterAndSortForm from '../src/components/FilterAndSortForm';
import sinon from 'sinon';

const updateSearchMock = sinon.stub();
const applySortOrderMock = sinon.stub();
const sortOrderMock = true;
const searchTextMock = 'abc';

describe('Pizza Form', () => {
    let pizzaForm;

    beforeEach(() => {
        pizzaForm = mount(<FilterAndSortForm updateSearch = {updateSearchMock}
                                     applySortOrder = {applySortOrderMock} />);
    });

    it('renders the pizza filter bar and sort button', () => {
        expect(pizzaForm.find('input')).to.exist();
        expect(pizzaForm.find('span').text()).to.equal('Sort');
    });

    it('should call applySortOrder function when sort button is clicked', () => {
        pizzaForm.find('span').simulate('click');
        sinon.assert.calledOnce(applySortOrderMock);
    });

    it('should call updateSearch function when a text is types into filterbar', () => {
        pizzaForm.find('input').simulate('change', {
            target: { value: searchTextMock }
        });
        expect(updateSearchMock.calledWith(searchTextMock)).to.equal(true);
    });
});
