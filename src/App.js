import React, { Component } from 'react';
import CustomLayout from './Containers/Layout';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom'; 

class App extends Component {  
  render(){
    return (
      <div className="App">
        <Router>
          <CustomLayout />
          <br />
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
