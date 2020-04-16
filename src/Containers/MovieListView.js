import React, { Component } from "react";
import axios from 'axios';
import MovieList from '../Components/MovieList';
import { Icon, Input } from 'antd';

class MovieListView extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }
    
    componentDidMount(){
        const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
        const API_URL = process.env.REACT_APP_IMDB_URL;
        axios.get(`${API_URL}?apikey=${API_KEY}`)
            .then(res => {
                if (!res.data["Error"]) {
                    this.setState({
                        movies: [res.data]
                    })    
                }else{
                    this.setState({
                        movies: []
                    }) 
                }
            })
    }

    onChange(e){
        const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
        const API_URL = process.env.REACT_APP_IMDB_URL;
        axios.get(`${API_URL}?apikey=${API_KEY}&t=${e.target.value}`)
            .then(res => {
                if (!res.data["Error"]) {
                    this.setState({
                        movies: [res.data]
                    })    
                }else{
                    this.setState({
                        movies: []
                    }) 
                }
            })
    }

    render() {
        return  (
            <div>
                <center><Input
                    name="input"
                    placeholder="Favor ingrese nombre de pelicula"
                    className="certain-category-icon"
                    style={{ width: '50%' }}
                    suffix={<Icon type="search"/>}
                    onChange={this.onChange.bind(this)}
                /></center>
                <MovieList data={this.state.movies}/>
            </div>
        )
    }
}

export default MovieListView;