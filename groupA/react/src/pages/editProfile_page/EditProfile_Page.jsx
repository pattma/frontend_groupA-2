import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import EditProfile from '../../components/editProfile/EditProfile';
import Cookies from 'js-cookie';
import { AuthenContext } from '../../contexts/UserContext';
import Joi from 'joi';

const formSchema = Joi.object({
    birthDate: Joi.date()
        .iso()
        .label('Birthdate')
        .required(),

    gender: Joi.string()
        .valid('Female', 'Male', 'Other', 'Prefer not to Answer')
        .label('Gender')
        .required(),

    height: Joi.number()
        .precision(2)
        .min(1)
        .label('Height')
        .required(),

    weight: Joi.number()
        .precision(2)
        .min(1)
        .label('Weight')
        .required()
});



const EditProfile_Page = function() {

    const token = Cookies.get('TOKEN');

    const { currentUser, currentProfile, createProfile } = useContext(AuthenContext);

    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleChangeBirthDate = (event) => {
        setBirthDate(event.target.value);
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleChangeHeight = function(event) {
        setHeight(event.target.value);
    };

    const handleChangeWeight = function(event) {
        setWeight(event.target.value);
    };

    const submitCreateProfile = async (event) => {
        event.preventDefault(); 

        const { error } = formSchema.validate({ birthDate, gender, height, weight });
        if (error) {
            const message = error.details[0].message;
            console.log(error.details);

            if (message.toLowerCase().includes('birthdate')) {
                return alert('Birthdate must be valid format');
            }

            if (message.toLowerCase().includes('gender')) {
                return alert('Gender must be valid');
            }

            if (message.toLowerCase().includes('height') || message.toLowerCase().includes('weight')) {
                return alert('Height or Weight must be number');
            }
        };

        try {
            const userCreateProfile = {
                birthDate,
                gender,
                height,
                weight
            };
            await createProfile(userCreateProfile);
            event.target.reset();
        } catch(error) {
            console.log(error);
        };
    };
    

    return (
        <Layout token={token} >
            <EditProfile
                onSubmitCreateProfile={submitCreateProfile}
                onChangeBirthDate={handleChangeBirthDate}
                onChangeGender={handleChangeGender}
                onChangeHeight={handleChangeHeight}
                onChangeWeight={handleChangeWeight}
                user={currentUser}
                profile={currentProfile}
            />
        </Layout>
    );
};

export default EditProfile_Page;