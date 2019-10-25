import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from "./withAuthRedirect";
import { compose } from 'redux';
import ReactDOM from 'react-dom';
import ModalComponent from './ModalComponent';

const AnyPage = (props) => {
    return ReactDOM.createPortal(
        <div style ={styles.modal} onClick={props.close}>
          <ModalComponent {...props} close={props.close}/>
      </div>,
        document.querySelector('#modal')

    )
}
const styles ={
    modal:{
      position: "fixed",
      // top: "20%",
      display:"grid",
      top:"0",
      bottom:"0",
      left:"0",
      right:"0",
      justifyContent:"center",
      backgroundColor: "rgba(0,0,0,0.5)",
      paddingTop:"10%",
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth
    }
}

export default compose(
    connect(mapStateToProps,null),
    withAuthRedirect
)(AnyPage)