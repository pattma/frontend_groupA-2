import React, { useState } from 'react';
import '../activityCard/activityCard.css';
import walkImage from '../../assets/icon/walk.png';
import swimImage from '../../assets/icon/swim.png';
import runImage from '../../assets/icon/run.png';
import bikeImage from '../../assets/icon/bike.png';
import badmintonImage from '../../assets/icon/badminton.png';
 
const ActivityCard = ({ card, onDelete }) => {
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        return `${day}/${month}/${year}`;
    };

    return (
        <div className='activities_card'>
            {card.map(({ _id, firstName, lastName, activityName, description, activityType, date, duration, distance }) => {
                let activityImage;
        
                if (activityType === "Running") {
                    activityImage = runImage;
                } else if (activityType === "Walking") {
                    activityImage = walkImage;
                } else if (activityType === "Biking") {
                    activityImage = bikeImage;
                } else if (activityType === "Swimming") {
                    activityImage = swimImage;
                } else {
                    activityImage = badmintonImage;
                }
        
                return (
                    <div className='activity-card' key={_id}>
                        <div className='header'>
                            <h2 className='activity-name'>{firstName} {lastName}</h2>
                            <span className="icon">
                                <a href={`/edit_card/${_id}`}><ion-icon color="primary" size="large" name="create-outline"></ion-icon></a>
                                <button onClick={() => onDelete(_id)}><ion-icon color="danger" size="large" name="trash-outline"></ion-icon></button>
                            </span>
                        </div>
            
                        <div className='activity-card-detail'>
                            <p className='name'>{activityName}</p>
                            <hr /><br />
                            <label className='description'>{description}</label>
            
                            <div className='activity-tab'>
                                <div className='activity-left-tab'>
                                    <img className='activity-image' src={activityImage} alt={activityType} />
                                    <p className='activity-type'>{activityType}</p>
                                </div>
                                <div className='activity-right-tab detail'>
                                    <p>Date</p>
                                    {/* <span>{item.date.split('T')[0]}</span> */}
                                    <span>{formatDate(date)}</span>
                                </div>
                                <div className='activity-right-tab detail'>
                                    <p>Duration</p>
                                    <span>{duration}</span>
                                </div>
                                <div className='activity-right-tab detail'>
                                    <p>Distance</p>
                                    <span>{distance} km.</span>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                );
            })};
        </div>
    );
};

export default ActivityCard;