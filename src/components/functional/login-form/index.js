import React from 'react';
import './index.css';

const LoginForm = (props) => {
    const { usernameLabel,
            passwordLabel,
            forgotPasswordLabel,
            forgotPasswordLink,
            loginValidate,
            loginLabel,
            createAccountLink,
            createAccountLabel } = props;
    return (
        <div className="loginForm">
            <label className="form-label" htmlFor="userName">{usernameLabel}</label>
            <br/>
            <input className="form-control" name="userName" id="userName" type="text" required />
            <br/>
            <label className="form-label" htmlFor="userPassword">{passwordLabel}</label>
            <br/>
            <input className="form-control" name="userPassword" id="userPassword" type="password" required />
            <br/>
            <a href={forgotPasswordLink} className="align-right">{forgotPasswordLabel}</a>
            <br/>
            <button onClick={() => loginValidate()}>{loginLabel}</button>
            <br/>
            <a href={createAccountLink} className="align-right">{createAccountLabel}</a>
        </div>
    )
}

export default LoginForm;