import React from 'react';
import { DropdownButton, MenuItem, SplitButton, Modal, Button } from 'react-bootstrap';
import Comment from './NewComment';
import TextQuestion from './TextQuestion';
import Footer from './Footer';

export default class ContactUs extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            showModal:false,
            questionsRender:[],
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
        let newQn=<TextQuestion question={this.state.newQuestion}/>
            
        let questionsRender=this.state.questionsRender;
        questionsRender.push(newQn);
        this.setState({questionsRender:questionsRender, showModal: false});
    }
    modalBody()
        {
            return(<input type="text"/>)

        }
        render()
    {
    return (<div className="container">
        <h2>Create Project</h2>
        <button onClick={()=>this.setState({newQuestion:"", showModal:true})}>Add</button>
        
        {this.state.questionsRender}

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
        <Footer/>
        </div>)}
}