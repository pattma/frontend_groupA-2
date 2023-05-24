import { createContext, useContext, useEffect, useState } from 'react';
import * as AuthenAPI from '../api/users'; 
import * as ProfileAPI from '../api/profiles';
import Cookies from 'js-cookie';

export const AuthenContext = createContext();

function AuthenContextProvider({ children }) {

    const defaultProfile = {
        firstName: '',
        lastName: '',
        birthDate: '',
        age: '',
        weight: '',
        height: ''
    };

    const defaultUser = {
        firstName: '',
        lastName: ''
    };

    const [currentProfile, setCurrentProfile] = useState(defaultProfile);
    const [currentUser, setCurrentUser] = useState(defaultUser);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await ProfileAPI.getProfile();
                const fetchedUser = response.data.user;

                // set current user
                if (fetchedUser) {
                    setCurrentProfile(fetchedUser);
                };
             
            } catch (error) {
                console.log(error);
            };
        };

        const fetchUser = async () => {
            try {
                const response = await ProfileAPI.getUser();
                const fetchedUser = response.data.user;

                // set current user
                if (fetchedUser) {
                    setCurrentUser(fetchedUser);
                };

            } catch (error) {
                console.log(error);
            };
        };

        const token = Cookies.get('TOKEN');
        if (token) {
            fetchProfile();
            fetchUser();
        };

    }, []);
    
    // AUTHEN
    const login = async (body) => {

        try {

            const response = await AuthenAPI.login(body);
            const { token, message } = response.data;

            // set current user
            // setCurrentUser(null);

            // set token
            // localStorage.setItem('TOKEN', token);
            Cookies.set('TOKEN', token);
            
            alert(message);
            location.href = '/dashboard'

        } catch (error) {
            console.log(error);
            alert('Login Failed!');
        };
    };


    const logout = async () => {

        // set current user
        // setCurrentUser(null);

        // remove token
        Cookies.remove('TOKEN');

        alert('Logout Success!');
        location.href = '/'
    };


    const signup = async (body) => {

        try {

            const response = await AuthenAPI.signup(body);

            // set current user
            // setCurrentUser(null);

            alert(response.data.message);
            location.href = '/login';

        } catch (error) {
            console.log(error);
            alert('Signup Failed!');
        };
    };

    // PROFILE
    const createProfile = async (body) => {

        try {

            const response = await ProfileAPI.getProfile();
            const fetchedUser = response.data.user;

            if (!fetchedUser) {
                const response = await ProfileAPI.create_profile(body);
                // console.log(response);

                alert(response.data.message);
                location.href = '/dashboard';
            } else {
                const response = await ProfileAPI.update_profile(body);
                // console.log(response);
                
                alert(response.data.message);
                location.href = '/dashboard';
            };
            
        } catch (error) {
            console.log(error);
            alert('Create Profile Failed!');
        };
    };
    
    const handlers = {
        currentProfile,
        currentUser,
        login,
        logout,
        signup,
        createProfile
    };
    
    return (
        <AuthenContext.Provider value={handlers}>
            {children}
        </AuthenContext.Provider>
    );  
};

export default AuthenContextProvider;