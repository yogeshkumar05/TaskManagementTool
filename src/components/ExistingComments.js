import React, {Component} from 'react';

export default class ExistingComments extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            comments:[]
        }
    }

    render()
    {
        let renderComments=[];
        if(this.props.comments!=undefined)
        this.props.comments.map(item=>
        {
            renderComments.push(<div>{item}</div>)
        })
        return(
            <div>
                <div>Comment1</div>
                <div>Comment2</div>
                {renderComments}
                
            </div>
        )
    }
}
