import React, { Component } from "react";
import axios from 'axios';
import { Card } from 'antd';

class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie: []
        }
    }
    
    componentDidMount(){
        const movieID = this.props.match.params.movieID;
        console.log(movieID)
        console.log(`https://www.omdbapi.com/?apikey=70df9497&i=${movieID}`)
        axios.get(`https://www.omdbapi.com/?apikey=70df9497&i=${movieID}`)
            .then(res => {
                this.setState({
                    movie: res.data
                })
            }
            )
    }

    render() {
        return  (
            <div>
                <Card title = {this.state.movie.Title}>
                    <Card.Grid>
                        <b>Year: </b> {this.state.movie.Year}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Released: </b> {this.state.movie.Released}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Rated: </b> {this.state.movie.Rated}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Type: </b> {this.state.movie.Type}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Director: </b> {this.state.movie.Director}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Country: </b> {this.state.movie.Country}
                    </Card.Grid>
                    <Card.Grid>
                        <b>imdbRating: </b> {this.state.movie.imdbRating}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Metascore: </b> {this.state.movie.Metascore}
                    </Card.Grid>
                    <Card.Grid>
                        <b>Awards: </b> {this.state.movie.Awards}
                    </Card.Grid>
                </Card>
                <Card>
                    <b>Plot: </b> {this.state.movie.Plot}
                </Card>
                <Card>
                    <b>Actors: </b> {this.state.movie.Actors}
                </Card>
                <Card>
                    <b>Production: </b> {this.state.movie.Production}
                </Card>
            </div>
        )
    }
}

export default MovieDetail;