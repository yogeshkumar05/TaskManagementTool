import React, {Component} from 'react';
import {fetchStreamingData} from '../action-creators/agencyActions';
import { connect } from "react-redux"
import data from '../common/mockData.json';
import DashboardEntry from './DashboardEntry';

class About extends Component
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
        fetchStreamingData();
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(JSON.stringify(nextProps))
    }
    render()
    {
        let projects=data.projects;
        let dashboardEntries=[];
        projects.map((item, index)=>{
            dashboardEntries.push(<DashboardEntry key={index} project={item}/>)
        })
        return (<div><h3>Dashboard</h3>
        {dashboardEntries}</div>)
    }
}
export default connect(state => (
    {
        tweets: state.agencyReducer.tweets,
        count: state.agencyReducer.count
    }
))(About);
