import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect }  from 'react-redux';
import Routes from './Config/routes';
import * as actions  from './store/actions/auth';


class App extends Component{

  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  
  render() {
    return(
      <div className="app">
        <Routes {...this.props} />
    </div>

      
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
