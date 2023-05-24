import React from 'react';
import '../register/register.css';

const Register = function({ onSubmitSignup, onChangeEmail, onChangePassword, onChangeConfirmPassword, onChangeFirstName, onChangeLastName }) {
    return (
        <div className="wrapper register">
            <span className="icon-close">
                <a href='/'><ion-icon name="close"></ion-icon></a>
            </span>

            <div className="form-box register">
                <h2>Registration</h2>
                <form onSubmit={onSubmitSignup}>
                    <div className="input-box full_name">
                        <div className='first_name'>
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" onChange={onChangeFirstName} required />
                            <label>First Name</label>
                        </div>
                        <div className='last_name'>
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" onChange={onChangeLastName} required />
                            <label>Last Name</label>
                        </div>
                    </div>
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
                        <label>Password <small>(at least 6 characters, including letters and numbers)</small></label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" onChange={onChangeConfirmPassword} required />
                        <label>Confirm Password</label>
                    </div>
                    <div className="agree-condition">
                        <label><input type="checkbox" /> agree to the terms & conditions</label>
                    </div>
                    <button type="submit" className="btn" >Register</button>
                    <div className="login-register">
                        <p>Already have an account? <a href="/login" className="login-link" >Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;