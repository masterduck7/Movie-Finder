import React from 'react';
import SearchBar from './Components/SearchBar'
import MovieList from './Containers/MovieList'
import CustomLayout from './Containers/Layout';

function App() {
  return (
    <div className="App">
      <CustomLayout />
      <br />
      <SearchBar />
      <br />
      <MovieList />
    </div>
  );
}

export default App;
