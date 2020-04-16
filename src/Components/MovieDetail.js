import React, { Component } from "react";
import { Card } from 'antd';


class MovieDetail extends Component {
    render() {
        return  (
            <div>
                <Card title = {this.props.movie.Title}>
                    <Card.Grid>
                        <b>Año: </b> {this.props.movie.Year}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Publicacion: </b> {this.props.movie.Released}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Clasificacion: </b> {this.props.movie.Rated}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Tipo: </b> {this.props.movie.Type}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Director: </b> {this.props.movie.Director}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Pais: </b> {this.props.movie.Country}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Calificacion imdb: </b> {this.props.movie.imdbRating}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Puntuacion: </b> {this.props.movie.Metascore}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Premios: </b> {this.props.movie.Awards}
                    </Card.Grid>
                </Card>
                <Card>
                    <b>Trama: </b> {this.props.movie.Plot}
                </Card>
                <Card>
                    <b>Actores: </b> {this.props.movie.Actors}
                </Card>
                <Card>
                    <b>Produccion: </b> {this.props.movie.Production}
                </Card>
            </div>
        )
    }
}

export default MovieDetail;