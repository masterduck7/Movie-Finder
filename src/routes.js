import React from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Containers/MovieList';
import MovieDetail from './Containers/MovieDetail';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/:movieID' component={MovieDetail} />
    </div>
);

export default BaseRouter;