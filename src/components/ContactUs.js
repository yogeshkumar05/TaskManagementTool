import React from 'react';
import { DropdownButton, MenuItem, SplitButton, Modal, Button } from 'react-bootstrap';
import Comment from './Comment';
export default class ContactUs extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            showModal:false,
            questions:[],
            newQuestion:"",
            showNewComment:false
        }
        this.newQuestionChangeHandler=this.newQuestionChangeHandler.bind(this);
        this.addQuestion=this.addQuestion.bind(this);
    }

    newQuestionChangeHandler(event)
    {
       // alert(event.target.value)
        this.setState({newQuestion:event.target.value});
        
    }


    addQuestion()
    {
        //alert(this.state.newQuestion)
        let newQn=<div className="question">
            <div>{this.state.newQuestion}</div> 
            <button className="question-actions" on Click={()=>{this.setState({showNewComment:true})}}>Reply</button>
            <button className="question-actions">Edit</button>
            <button className="question-actions">Delete</button>
            <button className="question-actions">Accept</button>
            {this.state.showNewComment==true?<Comment/>:null}</div>;
            
        let questions=this.state.questions;
        questions.push(newQn);
        this.setState({questions:questions, showModal: false});
       // alert(this.state.questions.length)
        

    }
    modalBody()
        {
            return(<input type="text"/>)

        }
        render()
    {
    return (<div>
        <h2>Create Project</h2>
        <button onClick={()=>this.setState({newQuestion:"", showModal:true})}>Add</button>
        <h3>Questions</h3>
        {this.state.questions}

        <Modal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>Add Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={this.state.newQuestion} onChange={this.newQuestionChangeHandler}/>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.addQuestion}>Add</Button>
            <Button onClick={() => { this.setState({ showModal: false }) }}>Cancel</Button>
          </Modal.Footer>
        </Modal>

        </div>)}
}