import React from 'react';
import { string } from 'prop-types';

Pizza.propTypes = {
    pizza: string
};

function Pizza({pizza}) {
    return (<a className="list-group-item">{pizza}</a>)
}

export default Pizza;
