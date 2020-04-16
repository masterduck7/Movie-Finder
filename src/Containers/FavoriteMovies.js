import React, { Component } from "react";
import { List, Avatar } from 'antd';

class FavoriteMovies extends Component {
    constructor(state){
        super(state)
        this.state = {
            movies: []
        }
    }
    
    componentDidMount(){
        var values = []
        var keys = Object.keys(localStorage)
        var i = keys.length;
        while ( i-- ) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        if (values) {
            this.setState({movies: values});
        }
    }

    render() {
        return  (
            <div>
                <List
                    style={{ marginLeft:"5%", marginRight:"5%" }}
                    dataSource={this.state.movies}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={<a href={`/${item.imdbID}`}><img width={100} alt="Poster" src={item.Poster}/></a>}
                        >
                        <List.Item.Meta
                            avatar={<a href={`/${item.imdbID}`}><Avatar src={item.Poster} /></a>}
                            title={<a href={`/${item.imdbID}`}>{item.Title}</a>}
                            description={item.Year}
                        />
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default FavoriteMovies;