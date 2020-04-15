import React from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Containers/MovieList';
import MovieDetail from './Containers/MovieDetail';
import FavoriteMovies from './Containers/FavoriteMovies';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/favorite-movies' component={FavoriteMovies} />
        <Route exact path='/:movieID' component={MovieDetail} />
    </div>
);

export default BaseRouter;