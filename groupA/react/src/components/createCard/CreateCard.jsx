import React from 'react';
import '../createCard/createCard.css';

const CreateCard = function({ onSubmitCreateCard, onChangeActivityName, onChangeDate, onChangeDescription, onChangeStartTime, onChangeFinishTime, onChangeActivityType, onChangeDistance, activityType }) {
    return (
        <div className="wrapper create_card">
            <span className="icon-close">
                <a href='/dashboard'><ion-icon name="close"></ion-icon></a>
            </span>

            <div className="form-box"> {/*container*/}
                <div className="title">CREATE A NEW CARD</div>
                <form onSubmit={onSubmitCreateCard}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Activity Name</span>
                            <input type="text" onChange={onChangeActivityName} placeholder="Enter your activity name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Activity Date</span>
                            <input className="dateTime" onChange={onChangeDate} type="date" placeholder="" required />
                        </div>
                        <div className="input-box message">
                            <span className="details">Description</span>
                            <textarea onChange={onChangeDescription} placeholder="Put your description here!!!" rows="5"></textarea>
                        </div>
                        <div className="input-box">
                            <span className="details">Start-Time</span>
                            <input className="dateTime" type="time" onChange={onChangeStartTime} placeholder="" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Finish-Time</span>
                            <input className="dateTime" type="time" onChange={onChangeFinishTime} placeholder="" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Activity Type</span>
                            <select className="minimal" onChange={onChangeActivityType} placeholder="" required >
                                <option value="" > Please Select One... </option>
                                <option value="Walking" >Walking</option>
                                <option value="Swimming" >Swimmimg</option>
                                <option value="Running" >Running</option>
                                <option value="Biking" >Biking</option>
                                <option value="Badminton" >Badminton</option>
                            </select>
                        </div>
                        {
                            activityType === "Badminton" && 
                            <div className="input-box">
                                <span className="details">Distance (km)</span>
                                <input type="number" step=".01" onChange={onChangeDistance} value={0} disabled required />
                            </div>
                        }
                        {
                            activityType !== "Badminton" && 
                            <div className="input-box">
                                <span className="details">Distance (km)</span>
                                <input type="number" step=".01" onChange={onChangeDistance} placeholder="Enter your distance" required />
                            </div>
                        }
                    </div>
                    <button type="submit" className="btn" >Create Card</button>
                </form>
            </div>
        </div>
    );
};

export default CreateCard;