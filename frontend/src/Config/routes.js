import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from '../Components/Home';
import Register from '../Components/Register/Register'
import Student from '../Components/Student/Student';



const BaseRouter = () => (

<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/userRegister" component={Register} />
        <Route path="/studentPane" component={Student} />
    </Switch>
</Router>
);


export default BaseRouter;