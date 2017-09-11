import React, {Component} from 'react';

export default class ActionBar extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
            <button className="question-actions" onClick={()=>{alert("click");this.state.showNewComment=true;this.setState({showNewComment:true})}}>Reply</button>
            <button className="question-actions">Edit</button>
            <button className="question-actions">Accept</button>
            </div>
        )
    }
}
