
import React from 'react';
import { Redirect } from 'react-router-dom'
export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        console.log(props.isAuth.auth)
        if(!props.isAuth.auth ) return <Redirect to='/auth'/> 
        return <Component {...props} />
    }
    return RedirectComponent;
} 