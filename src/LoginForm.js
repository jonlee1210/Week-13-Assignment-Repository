import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-form">
        <h3 className="login-heading">Log In</h3>
        <div className="form-group">
    <label>Username: </label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Password: </label>
        <input type="password" />
      </div>
    </div>
  );
};

export default LoginForm;