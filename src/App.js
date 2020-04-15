import React from 'react';
import Movie from './Components/Movie'
import CustomLayout from './Containers/Layout';

function App() {
  return (
    <div className="App">
      <CustomLayout />
      <br />
      <Movie />
    </div>
  );
}

export default App;
