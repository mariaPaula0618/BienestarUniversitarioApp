import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import ActivityList from "../Components/Admin/views/ActivityList"
import Statistics from "../Components/Admin/views/Statistics/Statistics"
import CoursesList from "../Components/Admin//views/CoursesList"
import AttendancePercentage from "../Components/Admin/views/Statistics/views/AttendancePercentage"
import ProgressionGraph from "../Components/Admin/views/Statistics/views/ProgressionGraph"


const BaseRouter = () => (
    <div className="router-container" style={{width :'100%'}}>
        <Router>
            <Switch>
                <Route path="/adminPane/activites" component = {ActivityList} />
                <Route path="/adminPane/courses" component = {CoursesList} />
                <Route path="/adminPane/statistics" component = {Statistics} />
                <Route path="/adminPane/attendacePercentage" component = {AttendancePercentage} />
                <Route path="/adminPane/progressionGraph" component = {ProgressionGraph} />
            </Switch>
        </Router>
    </div>
    );

    
export default BaseRouter;