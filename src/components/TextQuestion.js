import React, {Component} from 'react';
import NewComment from './NewComment';
import ActionBar from './ActionBar';
import ExistingComments from './ExistingComments';

export default class TextQuestion extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            comments:[]
        }
        this.submitComment=this.submitComment.bind(this);
    }
    submitComment(data)
    {
        let comments=this.state.comments;
        comments.push(data);
        this.setState({comments})
    }

    render()
    {
        return(
            <div>
                <div className="question">
            <div>{this.props.question}</div> 
            <ActionBar/>
            <NewComment submitComment={this.submitComment}/>
            <ExistingComments comments={this.state.comments}/>
            </div>
            </div>
        )
    }
}
