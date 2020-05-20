import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import StudentActivities from '../Components/Student/views/StudentActivities'
import BienestarActivities from '../Components/Student/views/BienestarAcitivities'
import StudentAssistance from '../Components/Student/views/StudentAssistance'

const BaseRouter = () => (

    <Router>
        <Switch>
            <Route path="/studentPane/activities" component={StudentActivities} />
            <Route path="/studentPane/myActivities" component={BienestarActivities} />
            <Route path="/studentPane/assistance" component={StudentAssistance} />
        </Switch>
    </Router>
    );
    
    
    export default BaseRouter;