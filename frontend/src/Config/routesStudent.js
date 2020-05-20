import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import StudentActivities from '../Components/Student/views/StudentActivities'
import BienestarActivities from '../Components/Student/views/BienestarAcitivities'
import StudentAssistance from '../Components/Student/views/StudentAssistance'

const BaseRouter = () => (
    <div className="router-container" style={{width :'100%'}}>
        <Router>
            <Switch>
                <Route path="/studentPane/activities" component={BienestarActivities} />
                <Route path="/studentPane/myActivities" component={StudentActivities} />
                <Route path="/studentPane/assistance/:id_activity" component={StudentAssistance} />
            </Switch>
        </Router>
    </div>
    );

    
export default BaseRouter;