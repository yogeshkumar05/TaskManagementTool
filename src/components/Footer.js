import React, {Component} from 'react';
import {createProject} from '../action-creators/agencyActions';

export default class Footer extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }

        this.saveProject=this.saveProject.bind(this);
        this.resetForm=this.resetForm.bind(this);
    }
    saveProject()
    {
       // alert(JSON.stringify(this.props.project));
        createProject(this.props.project);
    }

    resetForm()
    {

    }
    render()
    {
        return(<div className="container">
            <button onClick={this.saveProject}>Save</button>
            <button onClick={this.resetForm}>Cancel</button>
            </div>)
    }
}