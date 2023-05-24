import React from 'react';
import '../login/login.css';

const Login = function({ onSubmitLogin, onChangeEmail, onChangePassword }) {
    return (
        <div className="wrapper login">
            <span className="icon-close">
                <a href='/'><ion-icon name="close"></ion-icon></a>
            </span>

            <div className="form-box login">
                <h2>Login</h2>
                <form onSubmit={onSubmitLogin} >
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" onChange={onChangeEmail} required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" onChange={onChangePassword} required />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn" >Login</button>
                    <div className="login-register">
                        <p>Don't have an account? <a href="/register" className="register-link" >Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
