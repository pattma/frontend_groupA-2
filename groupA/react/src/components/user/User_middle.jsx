import React from "react";
import "../user/User_main.css";
import ActivityCard from "../../components/activityCard/ActivityCard";

const User_middle = function ({ card, onDelete }) {
  return (
    <div className="grid-middle">
        <div className="activity_btn">
            <button className='create_btn'><a href='/create_card'>Create Card</a></button>
        </div>
        <div className="activity_card">
            <ActivityCard 
              card={card} 
              onDelete={onDelete}
            />
        </div>
    </div>
  );
};

export default User_middle;