import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import TeacherActivities from '../Components/Teacher/views/TeacherActivities'
import StudentList from '../Components/Teacher/views/StudentList'


const BaseRouter = () => (
    <div className="router-container" style={{width :'100%'}}>
        <Router>
            <Switch>
                <Route path="/teacherPane/activities" component={TeacherActivities} />
                <Route path="/teacherPane/studentList" component={StudentList} />
            </Switch>
        </Router>
    </div>
    );

    
export default BaseRouter;