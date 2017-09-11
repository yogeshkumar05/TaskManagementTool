import React from 'react';
import { DropdownButton, MenuItem, SplitButton, Modal, Button } from 'react-bootstrap';
import {updateLogin} from '../action-creators/agencyActions';

export default class LoginModal extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      username:"",
      password:""
    }
    this.usernameHandler=this.usernameHandler.bind(this);
    this.passwordHandler=this.passwordHandler.bind(this);
    this.validateLogin=this.validateLogin.bind(this);
  }
  usernameHandler(event)
  {
    this.setState({username:event.target.value})
  }
  passwordHandler(event)
  {
    this.setState({password:event.target.value})
  }
  validateLogin()
  {
 
    if(this.state.username=="client" && this.state.password=="password")
      {
        updateLogin(this.state.username);
      }
    else if (this.state.username=="agency" && this.state.password=="password")
      {
        updateLogin(this.state.username);
      }
  }
  render()
  {
    return (<Modal className="login-modal" show={this.props.showModal} onHide={() => {this.props.closeModal}}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row username">
              
              
              <div className="col-md-3 col-sm-3 col-lg-3">
                Username:
              </div>
              <div className="col-md-9 col-sm-9 col-lg-9">
                <input type="text" value={this.state.username} onChange={this.usernameHandler}/>
              </div>
            </div>
            <div className="row password">
              
              <div className="col-md-3 col-sm-3 col-lg-3">
                Password:
              </div>
              <div className="col-md-9 col-sm-9 col-lg-9">
                <input type="password" value={this.state.password} onChange={this.passwordHandler}/>
              </div>
              
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.validateLogin}>Login</Button>
            <Button>Cancel</Button>
          </Modal.Footer>
        </Modal>)
  }
}