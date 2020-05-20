import  React, {Component} from 'react';
import Activity from "./Activity"
class BoardActivity extends Component{

    render(){
        const activitiesList = this.props.activities.map(element =>(
            <Activity key={element.id} activity={element} option = {this.props.option} link={this.props.link}/>
        ));
        return(<div className="boardctivity-container">
            <h1>{this.props.title}</h1>
            {activitiesList}
        </div>

        )
    }
}

export default BoardActivity;