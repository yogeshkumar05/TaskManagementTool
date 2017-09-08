import React, {Component} from 'react';
import {createPage} from '../action-creators/agencyActions';
import {connect} from 'react-redux';
import data from '../common/mockData.json';

class DashboardEntry extends Component
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
       // createPage("Create a page");
    }
    componentWillReceiveProps(nextProps)
    {
        //alert(JSON.stringify(nextProps))
    }
    render()
    {
        let pending=0;
        let completed=0;
        let inProgress=0;
        let status=0;
        let total=this.props.project.questions.length;
        this.props.project.questions.map((item)=>{
            switch(item.status)
            {
                case "completed":
                    {
                        completed++;
                        break;
                    }
                case "pending":
                {
                    pending++;
                    break;
                }
                case "progress":
                {
                    inProgress++;
                    break;
                }

            }

        });
        status=(completed/total)*100;
        //alert(JSON.stringify(this.props.project));
        return (<div className="dashboard-entry">
            <div>Total Questions:{total}</div>
            <div>In Progress Questions:{inProgress}</div>
            <div>Pending Questions:{pending}</div>
            <div>completed Question:{completed}</div>
            <div>Status:{status}%</div>
        </div>)
    }
}
export default connect((state)=>{
   // alert("About"+state.agencyReducer.testinfo)
   testData:state.agencyReducer.testinfo
})(DashboardEntry);