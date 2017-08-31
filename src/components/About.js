import React, {Component} from 'react';
import {createPage} from '../action-creators/agencyActions';
import {connect} from 'react-redux';

class About extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        };
    }
    componentDidMount()
    {
        createPage("Create a page");
    }
    componentWillReceiveProps(nextProps)
    {
        alert(JSON.stringify(nextProps))
    }
    render()
    {
        return (<h3>About Us</h3>)
    }
}
export default connect((state)=>{
   // alert("About"+state.agencyReducer.testinfo)
   testData:state.agencyReducer.testinfo
})(About);
