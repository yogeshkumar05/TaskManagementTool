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
        
        this.project={name:"",
    questions:[]};
        this.state={
            showModal:false,
            questionsRender:[],
            newQuestion:"",
            showNewComment:false
        }
        this.newQuestionChangeHandler=this.newQuestionChangeHandler.bind(this);
        this.addQuestion=this.addQuestion.bind(this);
    }

    componentWillMount()
    {
        let arr=window.location.href.split("/");
        let projId=arr[arr.length-1];
        if(projId==="create")
        {
            this.pageTitle="Create Project";
        }
        else
        {
            this.pageTitle="View Project";
        }
    }

    newQuestionChangeHandler(event)
    {
        this.setState({newQuestion:event.target.value});
        
    }


    addQuestion()
    {
        this.project.name="Test Proj";
        this.project.questions.push({name:this.state.newQuestion, status:"pending"});
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
    return (<div id="container">
        <h3>{this.pageTitle}</h3>
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
        <Footer project={this.project}/>
        </div>)}
}