import React from 'react';
import {Route,Switch} from 'react-router-dom';
import MovieList from './Containers/MovieListView';
import MovieDetail from './Containers/MovieDetailView';
import FavoriteMovies from './Containers/FavoriteMovies';
import CustomLayout from './Containers/Layout';
import {BrowserRouter as Router} from 'react-router-dom'; 

const BaseRouter = () => (
    <div>
        <Router>
            <CustomLayout />
            <br />
            <Switch>
                <Route exact path='/' component={MovieList} />
                <Route exact path='/favorite-movies' component={FavoriteMovies} />
                <Route exact path='/:movieID' component={MovieDetail} />
            </Switch>
        </Router>
    </div>
);

export default BaseRouter;