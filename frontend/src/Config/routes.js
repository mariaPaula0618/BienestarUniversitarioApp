import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from '../Components/Home';
import Register from '../Components/Register/Register'
import Student from '../Components/Student/Student';
import Admin from '../Components/Admin/Admin'



const BaseRouter = () => (
<div className="router-container" style={{width :'100%'}}>
<Router>
    <Switch>
        <Route path="/userRegister" component={Register} />
        <Route path="/studentPane" component={Student} />
        <Route path="/adminPane" component={Admin} />
        <Route exact path="/" component={Home} />
    </Switch>
</Router>
</div>
);



export default BaseRouter;