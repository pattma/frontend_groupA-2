import { React, useState, useEffect, useContext } from 'react';
import Layout from "../../components/layout/Layout";
import User_left from "../../components/user/User_left"; 
import User_middle from "../../components/user/User_middle";
import User_right from '../../components/user/User_right';
import Cookies from 'js-cookie';
import { AuthenContext } from '../../contexts/UserContext';
import { ActivityContext } from '../../contexts/ActivityContext';

const Dashboard_Page = () => {

    const token = Cookies.get('TOKEN');

    const { currentUser, currentProfile } = useContext(AuthenContext);
    const { currentCard, deleteCard } = useContext(ActivityContext);

    const [ newCard, setNewCard ] = useState([]);

    useEffect(() => {
        setNewCard(currentCard);
    }, [currentCard]);

    // console.log(newCard);

    const deleteActivityById = (id) => {
        const newActivityCard = newCard.filter((item) => item._id !== id);
        setNewCard(newActivityCard);
    };

    const sumDuration = (duration) => {
        let accumulate = 0;
        for (let i = 0; i < duration.length; i++) {
            const [durationHour, durationMinute, durationSecond] = duration[i].split(':').map(Number);
            
            const durationMs = (durationHour) * 60 + (durationMinute) + (durationSecond);
            
            accumulate = accumulate + durationMs;
        };
        return accumulate;
    };

    const convertDuration = (duration) => {
        // calculate the duration in hours and minutes
        let hours = Math.floor(duration / (60));
        let minutes = Math.floor((duration % (60)));

        if (hours === 0) {
            hours = "00";
        } else if (hours < 10) {
            hours = `0${hours}`;
        };

        if (minutes === 0) {
            minutes = "00"
        } else if (minutes < 10) {
            minutes = `0${minutes}`;
        };

        // display the duration
        const convert_duration = `${hours}:${minutes}:00`;
        return convert_duration;
    };

    // walking
    const walkArray = newCard.filter((item) => item.activityType === "Walking");
    const walkArrayDuration = walkArray.map((item) => item.duration);
    const sumWalkDuration = sumDuration(walkArrayDuration);
    const walkDuration = convertDuration(sumWalkDuration);

    // swimming
    const swimArray = newCard.filter((item) => item.activityType === "Swimming");
    const swimArrayDuration = swimArray.map((item) => item.duration);
    const sumSwimDuration = sumDuration(swimArrayDuration);
    const swimDuration = convertDuration(sumSwimDuration);

    // running
    const runArray = newCard.filter((item) => item.activityType === "Running");
    const runArrayDuration = runArray.map((item) => item.duration);
    const sumRunDuration = sumDuration(runArrayDuration);
    const runDuration = convertDuration(sumRunDuration);

    // biking
    const bikeArray = newCard.filter((item) => item.activityType === "Biking");
    const bikeArrayDuration = bikeArray.map((item) => item.duration);
    const sumBikeDuration = sumDuration(bikeArrayDuration);
    const bikeDuration = convertDuration(sumBikeDuration);

    // badminton
    const badmintonArray = newCard.filter((item) => item.activityType === "Badminton");
    const badmintonArrayDuration = badmintonArray.map((item) => item.duration);
    const sumBadmintonDuration = sumDuration(badmintonArrayDuration);
    const badmintonDuration = convertDuration(sumBadmintonDuration);
    

    const handleDelete = async (id) => {
        
        try {
            if (window.confirm('Are you sure to delete ?')) {
                await deleteCard(id);
            };
            deleteActivityById(id);
        } catch(error) {
            console.log(error);
        };
    };

    return (
        <Layout token={token} >
            <div className="grid-main">
                <User_left 
                    profile={currentProfile} 
                    user={currentUser} 
                    walkDuration={walkDuration}
                    swimDuration={swimDuration}
                    runDuration={runDuration}
                    bikeDuration={bikeDuration} 
                    badmintonDuration={badmintonDuration}
                />
                <User_middle 
                    card={newCard} 
                    onDelete={handleDelete}
                />
                <User_right 
                    sumWalkDuration={sumWalkDuration}
                    sumSwimDuration={sumSwimDuration}
                    sumRunDuration={sumRunDuration}
                    sumBikeDuration={sumBikeDuration}
                    sumBadmintonDuration={sumBadmintonDuration}
                />
            </div>
        </Layout>
    );
};

export default Dashboard_Page;