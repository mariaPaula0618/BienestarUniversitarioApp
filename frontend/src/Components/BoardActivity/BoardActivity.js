import  React, {Component} from 'react';
import Activity from "./Activity"
class BoardActivity extends Component{

    render(){
        const activitiesList = this.props.activities.map(element =>(
            <Activity activity={element} option = {this.props.option}/>
        ));
        return(<div className="boardctivity-container">
            <h1>{this.props.title}</h1>
            {activitiesList}
        </div>

        )
    }
}

export default BoardActivity;