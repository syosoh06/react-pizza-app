import fetch from 'isomorphic-fetch';

// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors

import React from 'react';
import { render } from 'react-dom';

import PizzaList from '../components/PizzaList';
import FilterAndSortForm from '../components/FilterAndSortForm';
import Loading from '../components/Loading';

class PizzaApp extends React.Component{
    state = {
        pizzas: [],
        filter: '',
        sortOrder: true
    };

    componentDidMount() {
        fetch('http://localhost:8080/pizza.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState(() => ({pizzas: data.pizzas}));
                // passing a function to setState
            })
    }

    updateSearch = (value) => {
        this.setState(() => ({
            filter: value
        }));
    };

    filterPizzas (pizzas) {
        if (!this.state.filter) {
            return pizzas
        }

        return pizzas.filter((pizza) => pizza.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0)
    }

    applySortOrder = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({ sortOrder: !prevState.sortOrder }), this.sortPizzas());
    };

    sortPizzas() {
        let pizzas = this.state.pizzas;
        let sortedPizzas;

        sortedPizzas = (this.state.sortOrder) ?
            PizzaApp.sortAlphabetically(pizzas) : PizzaApp.sortReverseAlphabetically(pizzas);
        this.setState(() => ({ pizzas: sortedPizzas }));
    }

    static sortAlphabetically(pizzas) {
        return pizzas.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
    }

    static sortReverseAlphabetically(pizzas) {
        return pizzas.sort(function (a, b) {
            if (a > b) return -1;
            else if (a < b) return 1;
            return 0;
        });
    }

    render() {
        return (
            <div>
                <h1>Pizzas</h1>
                {(!this.state.pizzas) ? (<Loading />) : null}
                <FilterAndSortForm updateSearch = {this.updateSearch}
                                   applySortOrder = {this.applySortOrder} />
                <PizzaList pizzas={this.filterPizzas(this.state.pizzas)}/>
            </div>
        )
    }
}

export default PizzaApp;
