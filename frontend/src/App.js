import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './Config/routes'


class App extends Component{
  
  render() {
    return(
      <div className="app">
        <Routes />
    </div>

      
    );
  }
}

export default App;
