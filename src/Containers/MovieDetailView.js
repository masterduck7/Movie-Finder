import React, { Component } from "react";
import axios from 'axios';
import { Button } from 'antd';
import MovieDetail from '../Components/MovieDetail'


class MovieDetailView extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie: [],
            favorite: false
        }
    }
    
    componentDidMount(){
        const movieID = this.props.match.params.movieID;
        const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
        const API_URL = process.env.REACT_APP_IMDB_URL;
        axios.get(`${API_URL}?apikey=${API_KEY}&i=${movieID}`)
            .then(res => {
                this.setState({
                    movie: res.data
                })
                const data = localStorage.getItem(this.state.movie.imdbID)
                if (data === null) {
                    this.setState({
                        favorite: false
                    })
                }
                else{
                    this.setState({
                        favorite: true
                    })
                }
            })
    }

    onChangeAddFavorite = event => {
        const data = JSON.stringify(this.state.movie);
        localStorage.setItem(this.state.movie.imdbID,data)
        alert("Película agregada a favoritos");
    };

    onChangeRemoveFavorite = event => {
        localStorage.removeItem(this.state.movie.imdbID)
        alert("Película eliminada a favoritos");
    };

    render() {
        return  (
            <div>
                <Button disabled={this.state.favorite} href="/Movie-Finder/#/favorite-movies" type="primary" onClick={this.onChangeAddFavorite}>
                    Añadir a favoritas
                </Button> 
                <Button disabled={!this.state.favorite} href="/Movie-Finder/#/favorite-movies" type="danger" onClick={this.onChangeRemoveFavorite}>
                    Quitar de favoritas
                </Button>   
                <MovieDetail movie={this.state.movie} />
            </div>
        )
    }
}

export default MovieDetailView;