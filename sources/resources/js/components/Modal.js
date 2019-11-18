import ReactModal from 'react-modal';
import React, { PureComponent } from 'react';

ReactModal.setAppElement('#app');

const Modal = ({style, children, header, ...props}) => (<ReactModal style={Object.assign({}, {
    overlay: {
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    content: {
        position: 'relative',
        top: 'unset',
        left: 'unset',
        right: 'unset',
        bottom: 'unset'
    }
}, style || {})} {...props} >

    {header && <div className='react-modal-header'>
        {header}
        {props.onRequestClose && <div className='close' onClick={props.onRequestClose}><i className='fa fa-times'/></div>}
    </div>}
    {children}
</ReactModal>);
export default Modal;
