import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import Register from '../Components/Register/Register';
import Student from '../Components/Student/Student';
import Login from '../Components/login';
import Teacher from '../Components/Teacher/Teacher';
import Admin from '../Components/Admin/Admin';


const BaseRouter = (props) => (
<div className="router-container" style={{width :'100%'}}>
<Router>
    <Switch>
        <Route path="/userRegister" component={Register} />
        <Route path="/studentPane" component={Student} />
        <Route path="/teacherPane" component={Teacher} />
        <Route path="/adminPane" component={Admin} />
        <Route exact path="/" component={Login} {...props}/>
    </Switch>
</Router>
</div>
);



export default BaseRouter;