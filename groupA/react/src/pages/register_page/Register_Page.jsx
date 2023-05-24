import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import Register from '../../components/register/Register';
import { AuthenContext } from '../../contexts/UserContext';
import Joi from 'joi';

const formSchema = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .label('First name')
        .required(),

    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .label('Last name')
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .label('Email')
        .required(),

    password: Joi.string()
        .pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
        .min(6)
        .max(30)
        .label('Password')
        .required(),

    confirmPassword: Joi.string()
        .pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
        .min(6)
        .max(30)
        .label('Confirm Password')
        .required()
});

const Register_Page = () => {

    const { signup } = useContext(AuthenContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [firstName, setfirstName] = useState();
    const [lastName, setlastName] = useState();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeConfirmPassword = function(event) {
        setConfirmPassword(event.target.value);
    };

    const handleChangeFirstName = function(event) {
        setfirstName(event.target.value);
    };
    
    const handleChangeLastName = function(event) {
        setlastName(event.target.value);
    };

    const submitSignup = async (event) => {
        event.preventDefault(); 

        const { error } = formSchema.validate({ firstName, lastName, email, password, confirmPassword });
        if (error) {
            const message = error.details[0].message;
            console.log(error.details);

            if (message.toLowerCase().includes('first name') || message.toLowerCase().includes('last name')) {
                return alert('First Name or Last Name must have length at least 3 characters');
            }

            if (message.toLowerCase().includes('email')) {
                return alert('Email must be valid');
            }

            if (message.toLowerCase().includes('password')) {
                return alert('Password must have length at least 6 characters, including letters and numbers');
            }
        };

        try {
            const userSignup = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            };
            await signup(userSignup);
            event.target.reset();
        } catch(error) {
            console.log(error);
        };
    };

    return (
        <Layout>
            <Register
                onSubmitSignup={submitSignup}
                onChangeEmail={handleChangeEmail}
                onChangePassword={handleChangePassword}
                onChangeConfirmPassword={handleChangeConfirmPassword}
                onChangeFirstName={handleChangeFirstName}
                onChangeLastName={handleChangeLastName}
            />
        </Layout>
    );
};

export default Register_Page;