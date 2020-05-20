import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import Register from '../Components/Register/Register';
import Student from '../Components/Student/Student';
import Login from '../Components/login'



const BaseRouter = (props) => (

<Router>
    <Switch>
        <Route exact path="/" component={Login} {...props}/>
        <Route path="/userRegister" component={Register} />
        <Route path="/studentPane" component={Student} />
    </Switch>
</Router>
);


export default BaseRouter;