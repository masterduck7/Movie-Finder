import React, { Component } from "react";
import axios from 'axios';
import { Card, Button } from 'antd';


class MovieDetail extends Component {
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
                <Button disabled={this.state.favorite} href="/favorite-movies" type="primary" onClick={this.onChangeAddFavorite}>
                    Añadir a favoritas
                </Button> 
                <Button disabled={!this.state.favorite} href="/favorite-movies" type="danger" onClick={this.onChangeRemoveFavorite}>
                    Quitar de favoritas
                </Button>   
                <Card title = {this.state.movie.Title}>
                    <Card.Grid>
                        <b>Año: </b> {this.state.movie.Year}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Publicacion: </b> {this.state.movie.Released}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Clasificacion: </b> {this.state.movie.Rated}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Tipo: </b> {this.state.movie.Type}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Director: </b> {this.state.movie.Director}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Pais: </b> {this.state.movie.Country}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Calificacion imdb: </b> {this.state.movie.imdbRating}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Puntuacion: </b> {this.state.movie.Metascore}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Premios: </b> {this.state.movie.Awards}
                    </Card.Grid>
                </Card>
                <Card>
                    <b>Trama: </b> {this.state.movie.Plot}
                </Card>
                <Card>
                    <b>Actores: </b> {this.state.movie.Actors}
                </Card>
                <Card>
                    <b>Produccion: </b> {this.state.movie.Production}
                </Card>
            </div>
        )
    }
}

export default MovieDetail;