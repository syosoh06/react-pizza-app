import React from 'react';
import { func } from 'prop-types';

FilterAndSortForm.propTypes = {
    updateSearch: func.isRequired,
    applySortOrder: func.isRequired
};

function FilterAndSortForm({ updateSearch, applySortOrder}) {

    return (<div className="input-group">
        <input type="text"
               className="form-control"
               placeholder="Find a pizza"
               onChange={event => updateSearch(event.target.value)}
               />
            <span className="input-group-addon"
                  onClick={applySortOrder}>Sort</span>
    </div>)
}

export default FilterAndSortForm;
