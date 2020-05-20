import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';


const BaseRouter = () => (
    <div className="router-container" style={{width :'100%'}}>
        <Router>
            <Switch>
                <Route path="/adminPane/activites" />
                <Route path="/adminPane/courses"  />
                <Route path="/adminPane/statistics" />
            </Switch>
        </Router>
    </div>
    );

    
export default BaseRouter;