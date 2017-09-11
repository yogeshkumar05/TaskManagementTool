import React from 'react';
import { DropdownButton, MenuItem, SplitButton, Modal, Button } from 'react-bootstrap';
import {updateLogin} from '../action-creators/agencyActions';

export default class LogoutModal extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
    }
  }
  
  validateLogout()
  {
        updateLogin("logout");
  }
  render()
  {
    return (<Modal className="login-modal" show={true} onHide={() => {this.props.closeModal}}>
          <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Are you sure you want to Logout?</div>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.validateLogout}>OK</Button>
            <Button>Cancel</Button>
          </Modal.Footer>
        </Modal>)
  }
}