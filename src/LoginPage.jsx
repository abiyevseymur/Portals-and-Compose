import React from "react";
import { Button, Form } from 'react-bootstrap';
import {SignIn} from './action';
import {connect} from 'react-redux';

class LoginPage extends React.Component {
    state={
        login:null,
        password:null,
        auth:false
    }
    handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
         this.props.SignIn(this.state)
        return this.props.history.push('/')
    };
    render(){
        return (
            <Form  onSubmit={this.handleSubmit} className="form" >
                    <Form.Label>Login</Form.Label>
                    <Form.Control name="login" type="login" placeholder="Enter login"
                     onKeyPress={e=>this.setState({login:e.target.value})}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" 
                     onKeyPress={e=>this.setState({password:e.target.value,auth:true})}/>
                <Button  type="submit">
                    Submit
            </Button>
            </Form>
        )
    }
 
}

export default connect(null,{SignIn})(LoginPage);