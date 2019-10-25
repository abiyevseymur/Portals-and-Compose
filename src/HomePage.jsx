import React, { useState } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuthRedirect } from './withAuthRedirect';
import {compose} from 'redux';
import { Button } from 'react-bootstrap';
import AnyPage from './AnyPage';
const HomePage = (props) => {
    const [modal,setModal] = useState(false)
    
    return (
        <div className="App">

            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/auth" style={styles.btn}>Sign up</Link>
                <Button onClick={()=>setModal(true)}>React Portal</Button>
            </header>
            {modal?<AnyPage {...props}  close={()=>setModal(false)}/>:null}
        </div>
    )
}
const styles = {
    btn: {
        height: '50px',
        width: '150px',
        backgroundColor: 'gray',
        textDecoration: 'none',
        color: 'white',
        margin: '10px',
      
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth
    }
}

export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect)(HomePage)