import  React, {Component} from 'react';
import Activity from "./Activity"
class BoardActivity extends Component{

    render(){
        const activitiesList = this.props.activities.map(element =>(
            <Activity activity={element} />
        ));
        return(<div className="boardctivity-container">
            {activitiesList}
        </div>

        )
    }
}

export default BoardActivity;