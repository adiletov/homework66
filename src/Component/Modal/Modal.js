import React, {Component} from 'react';

class Modal extends Component {
    render(props) {
        return (
           <Modal>
               {props.children}
           </Modal>
        );
    }
}

export default Modal;