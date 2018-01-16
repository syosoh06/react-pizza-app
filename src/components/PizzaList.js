import React from 'react';
import Pizza from './Pizza';
import { array } from 'prop-types';

PizzaList.propTypes = {
    pizzas: array.isRequired
};

function PizzaList({pizzas}) {
    const PizzaNode = pizzas.map((pizza, index) => {
        return (<Pizza pizza={pizza} key = {"pizza-" + index}/>)
    });

    return (<div className="list-group" style={{marginTop:'30px'}}>{PizzaNode}</div>);

}

export default PizzaList;
