import  React, {Component} from 'react';
import {CardColumns} from 'react-bootstrap';
import Activity from "./Activity"
import styled from 'styled-components';


const Styles = styled.div`
.boardctivity-container{
  width: 100%
}

`;  

class BoardActivity extends Component{

    render(){

        const activitiesList = this.props.activities.map(element =>(
      
            <Activity key={element.id} activity={element} option = {this.props.option} link={this.props.link}/>
     
            
        ));


        return(
        <Styles>
        <div className="boardctivity-container">
            <h1>{this.props.title}</h1>
            <hr></hr>
            <br />
            <br />
            <div className="activities-container">
            <CardColumns>
                      {activitiesList}
            </CardColumns>
            </div>
        </div>
        </Styles>

        )
    }
}

export default BoardActivity;