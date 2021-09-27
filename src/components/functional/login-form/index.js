import React from 'react';
import './index.css';

const LoginForm = (props) => {
    const { labels,
            loginValidate } = props;

    return (
        <div className="loginForm">
            <label className="form-label" htmlFor="userName">{labels.usernameLabel}</label>
            <br/>
            <input className="form-control" name="userName" id="userName" type="text" required />
            <br/><br/>
            <label className="form-label" htmlFor="userPassword">{labels.passwordLabel}</label>
            <br/>
            <input className="form-control" name="userPassword" id="userPassword" type="password" required />
            <br/><br/>
            <a href="#" className="align-right">{labels.forgotPasswordLabel}</a>
            <br/><br/>
            <button className="full-width" onClick={() => loginValidate()}>{labels.loginLabel}</button>
            <br/><br/>
            <div class="row">
                <a href="#" className="align-center">{labels.createAccountLabel}</a>    
            </div>
        </div>
    )
}

export default LoginForm;