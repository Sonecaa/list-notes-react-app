import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ConfirmModal extends Component {

    render() {
        return (
          <Modal isOpen={this.props.state.modal} toggle={() => this.props.handlerModal()}>
            <ModalHeader toggle={() => this.props.handlerModal()} close={<div></div>}>Are sure?</ModalHeader>
            <ModalBody>
                You can't undo this action.
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={() => this.props.handlerRemove(this.props.state.modalId)}>Confirm Delete</Button>{' '}
              <Button color="secondary" onClick={() => this.props.handlerModal()}>Cancel</Button>
            </ModalFooter>
          </Modal>
        )
    }
}

export default ConfirmModal;