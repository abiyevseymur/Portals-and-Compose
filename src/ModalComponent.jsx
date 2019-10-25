import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { withAuthRedirect } from "./withAuthRedirect";
import { connect } from 'react-redux';
import { compose } from 'redux';


const ModalComponent = (props) => {
  return (
    <Modal.Dialog onClick={(e)=>e.stopPropagation()}>
      <Modal.Header closeButton onClick={() => props.close()}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.close()} >Close</Button>
        <Button variant="primary" onClick={() => props.history.push('/auth')}>Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth
  }
}

export default compose(
  connect(mapStateToProps, null),
  withAuthRedirect
)(ModalComponent)