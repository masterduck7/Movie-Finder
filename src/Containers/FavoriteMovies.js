import React, { Component } from "react";
import MovieList from "../Components/MovieList";

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
                <MovieList data={this.state.movies} />
            </div>
        )
    }
}

export default FavoriteMovies;