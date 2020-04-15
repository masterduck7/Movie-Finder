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
        axios.get(`https://www.omdbapi.com/?apikey=70df9497&i=${movieID}`)
            .then(res => {
                this.setState({
                    movie: res.data
                })
            }
            )
    }

    onChange = event => {
        this.setState({favorite: !this.state.favorite})
        if (this.state.favorite === false) {
            console.log(":D")
            localStorage.setItem(this.state.movie.imdbID,this.state.movie.Title)
        }
        else{
            console.log(":(")
            localStorage.removeItem(this.state.movie.imdbID)
        }
    };

    render() {
        return  (
            <div>
                <Button type="danger" onClick={this.onChange}>
                    Favorito
                </Button>
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