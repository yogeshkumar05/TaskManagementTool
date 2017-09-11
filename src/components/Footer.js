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
        createProject();
    }

    resetForm()
    {

    }
    render()
    {
        return(<div className="container">
            <button onCLick={this.saveProject}>Save</button>
            <button onCLick={this.resetForm}>Cancel</button>
            </div>)
    }
}