import React, {Component} from 'react';
import {loadProjectsDetails} from '../action-creators/agencyActions';
import { connect } from "react-redux"
import DashboardEntry from './DashboardEntry';
    
class Dashboard extends Component
{
    constructor(props)
    {
        //alert(data.projects.length)
        super(props);
        this.state={

        };
    }
    componentDidMount()
    {
        loadProjectsDetails();
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(JSON.stringify(nextProps))
    }
    render()
    {
        let projects=this.props.projects;
        let dashboardEntries=[];
        projects.map((item, index)=>{
            dashboardEntries.push(<DashboardEntry key={index} project={item}/>)
        })
        return (<div><h3>Dashboard</h3>
        <div className="row">
        {dashboardEntries}
        </div></div>)
    }
}
export default connect(state => (
    {
        projects: state.agencyReducer.projects
    }
))(Dashboard);
