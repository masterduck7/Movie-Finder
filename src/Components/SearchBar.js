import React, { Component } from 'react';
import { Icon, Input } from 'antd';

class SearchBar extends Component {
    render() {
        return(
            <div>
                <center><Input
                    name="input"
                    placeholder="Favor ingrese nombre de pelicula"
                    className="certain-category-icon"
                    style={{ width: '50%' }}
                    suffix={<Icon type="search"/>}
                /></center>
            </div>
        )
    }
};

export default SearchBar;