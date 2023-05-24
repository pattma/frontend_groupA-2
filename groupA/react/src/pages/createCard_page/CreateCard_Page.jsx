import React, { useState, useEffect, useContext } from 'react';
import Layout from "../../components/layout/Layout";
import CreateCard from '../../components/createCard/CreateCard';
import Cookies from 'js-cookie';
import { ActivityContext } from '../../contexts/ActivityContext';
import Joi from 'joi';

const formSchema = Joi.object({
    activityName: Joi.string()
        .min(3)
        .max(30)
        .label('Activity Name')
        .required(),

    date: Joi.date()
        .iso()
        .label('Date')
        .required(),

    description: Joi.string()
        .label('Description')
        .optional(),

    startTime: Joi.string()
        .label('Start Time')
        .required(),

    finishTime: Joi.string()
        .label('Finish Time')
        .required(),

    activityType: Joi.string()
        .valid('Running', 'Walking', 'Biking', 'Swimming', 'Badminton')
        .label('Activity Type')
        .required(),
    
    distance: Joi.number()
        .precision(2)
        .label('Distance')
        .required()
});

const CreateCard_Page = function() {

    const token = Cookies.get('TOKEN');

    const { createCard } = useContext(ActivityContext);

    const [activityName, setActivityName] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [startTime, setStartTime] = useState();
    const [finishTime, setFinishTime] = useState();
    const [activityType, setActivityType] = useState();
    const [distance, setDistance] = useState(0);

    const handleChangeActivityName = (event) => {
        setActivityName(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleChangeStartTime = (event) => {
        setStartTime(event.target.value);
    };

    const handleChangeFinishTime = (event) => {
        setFinishTime(event.target.value);
    };

    const handleChangeActivityType = (event) => {  
        setActivityType(event.target.value);
    };

    const handleChangeDistance = (event) => {
        setDistance(event.target.value);
    };

    useEffect(() => {
        if (activityType === "Badminton") {
            setDistance(0);
        };
    }, [activityType]);

    const submitCreateCard = async (event) => {
        event.preventDefault(); 

        const { error } = formSchema.validate({ activityName, date, description, startTime, finishTime, activityType, distance });
        if (error) {
            const message = error.details[0].message;
            console.log(error.details);

            if (message.toLowerCase().includes('activity name')) {
                return alert('Activity Name must have length at least 3 characters');
            }

            if (message.toLowerCase().includes('date')) {
                return alert('Date must be valid format');
            }

            if (message.toLowerCase().includes('start time') || message.toLowerCase().includes('finish time')) {
                return alert('Start Time or Finish Time is required');
            }

            if (message.toLowerCase().includes('activity type')) {
                return alert('Activity Type must be valid');
            }

            if (message.toLowerCase().includes('distance')) {
                return alert('Distance must be number');
            }
        };

        try {
            const userCreateCard = {
                activityName,
                date,
                description,
                startTime,
                finishTime,
                activityType,
                distance,
            };
            await createCard(userCreateCard);
            event.target.reset();
        } catch(error) {
            console.log(error);
        };
    };

    // console.log(activityType);
    // console.log(distance);

    return (
        <Layout token={token} >
            <CreateCard 
                onSubmitCreateCard={submitCreateCard}
                onChangeActivityName={handleChangeActivityName}
                onChangeDate={handleChangeDate}
                onChangeDescription={handleChangeDescription}
                onChangeStartTime={handleChangeStartTime}
                onChangeFinishTime={handleChangeFinishTime}
                onChangeActivityType={handleChangeActivityType}
                onChangeDistance={handleChangeDistance}
                activityType={activityType}
            />
        </Layout>
    );
};

export default CreateCard_Page;