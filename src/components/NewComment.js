import React from 'react';
export default class NewComment extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            comment:""
        }

        this.commentHandler=this.commentHandler.bind(this);
        this.submitComment=this.submitComment.bind(this);
    }
    commentHandler(event)
    {
        this.setState({comment:event.target.value})
    }
    submitComment()
    {
        this.props.submitComment(this.state.comment);
    }
    render()
    {
    return (<div><input type="textarea" value={this.state.comment} onChange={this.commentHandler}/>
    <button onClick={this.submitComment}>Submit</button>
    </div>)
    }
}