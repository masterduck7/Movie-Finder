import React, { Component } from "react";
import axios from 'axios';
import Movie from '../Components/Movie';
import { Icon, Input } from 'antd';

class FavoriteMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }
    
    componentDidMount(){
        axios.get('https://www.omdbapi.com/?apikey=70df9497')
            .then(res => {
                this.setState({
                    movies: res.data
                })
            }
            )
    }

    onChange(e){
        axios.get(`https://www.omdbapi.com/?apikey=70df9497&t=${e.target.value}`)
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
                <center><Input
                    name="input"
                    placeholder="Favor ingrese nombre de pelicula"
                    className="certain-category-icon"
                    style={{ width: '50%' }}
                    suffix={<Icon type="search"/>}
                    onChange={this.onChange.bind(this)}
                /></center>
                <Movie data={this.state.movies}/>
            </div>
        )
    }
}

export default FavoriteMovies;