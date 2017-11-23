import React, { Component } from 'react';

import classes from './Modal.css';
import AuxHoc from '../../../hoc/AuxHoc/AuxHoc';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.show !== this.props.show) {
      return true;
    }
  }

  componentWillUpdate() {
    console.log('Modal WIll update');
  }

  render() {
    return (
      <AuxHoc>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </AuxHoc>
    );
  };
}

export default Modal;