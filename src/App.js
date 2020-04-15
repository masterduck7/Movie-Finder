import React, { Component } from 'react';
import MovieList from './Containers/MovieList';
import CustomLayout from './Containers/Layout';

class App extends Component {  
  render(){
    return (
      <div className="App">
        <CustomLayout />
        <br />
        <MovieList />
      </div>
    );
  }
}

export default App;
