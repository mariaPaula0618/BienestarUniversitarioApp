import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BaseRouter from './Config/routes'


class App extends Component{
  
  render() {
    return(
      <div className="app">
        <BaseRouter />
    </div>

      
    );
  }
}

export default App;
