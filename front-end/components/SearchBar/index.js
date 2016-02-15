import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    render() {

        return <div className="input-group input-group-lg col-md-8 center-block">
            <span className="input-group-addon" id="sizing-addon1">Поисковик</span>
            <input type="text"
                   className="form-control"
                   placeholder="Введите название видео."
                   aria-describedby="sizing-addon1"
            />
        </div>
    }

}

export default SearchBar;