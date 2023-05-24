import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import Login from '../../components/login/Login';
import { AuthenContext } from '../../contexts/UserContext';
import Joi from 'joi';

const formSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .label('Email')
        .required(),
  
    password: Joi.string()
        .label('Password')
        .required()
});

const Login_Page = function() {

    const { login } = useContext(AuthenContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const submitLogin = async (event) => {
        event.preventDefault(); 

        const { error } = formSchema.validate({ email, password });
        if (error) {
            const message = error.details[0].message;
            console.log(error.details);

            if (message.toLowerCase().includes('email')) {
                return alert('Email must be valid');
            }

        };

        try {
            const userLogin = {
            email,
            password,
            };
            await login(userLogin);
            event.target.reset();
        } catch (error) {
            console.log(error);
        };
    };
    
    return (
        <Layout>
            <Login 
                onSubmitLogin={submitLogin} 
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
            />
        </Layout>
    );
};

export default Login_Page;