import React from "react";
import axios from 'axios';
import Movie from '../Components/Movie';

class MovieList extends React.Component {

    state = {
        movies: []
    }

    componentDidMount(){
        axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=70df9497')
            .then(res => {
                this.setState({
                    movies: res.data
                })
            }
            )
    }

    render() {
        return  (
            <div>
                <Movie data={this.state.movies}/>
            </div>
        )
    }
}

export default MovieList;