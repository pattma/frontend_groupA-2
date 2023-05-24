import React from "react";
import "../user/User_main.css";
// import manImage from '../../assets/icon/man.png';
import walkImage from '../../assets/icon/walk.png';
import swimImage from '../../assets/icon/swim.png';
import runImage from '../../assets/icon/run.png';
import bikeImage from '../../assets/icon/bike.png';
import badmintonImage from '../../assets/icon/badminton.png';
import { useState, useEffect } from "react";
import EditProfile from "../editProfile/EditProfile";
import '@fortawesome/fontawesome-free/css/all.min.css';
import userDefaultimage from '../../assets/icon/user-default.png';

const User_left = function ({ profile, user }) {

  // add useState
  // const [profilePic, setProfilePic] = useState("./src/assets/icon/man.png");
  const [profilePic, setProfilePic] = useState(userDefaultimage);

  // add handleProfilePicChange
  const handleProfilePicChange = (event) => {
    setProfilePic(URL.createObjectURL(event.target.files[0]));
  };


  return (
    <div className="grid-left">
      <div className="profile_pic">
        <a href="#">
          <img src={profilePic} alt="pic_man" />
          <label htmlFor="profile_pic_upload" title="Upload Image">
            <i className="fas fa-upload"></i>
          </label>
        </a>
        <input
          type="file"
          id="profile_pic_upload"
          accept="image/*"
          onChange={handleProfilePicChange}
          style={{ display: "none" }}
        />
      </div>

      <p className="name_user">{user.firstName} {user.lastName}</p>
      <p className="info_user">Age: {profile.age} gender: {profile.gender} Weight: {profile.weight} kg Height: {profile.height} cm</p>
      <div className="EditUserBTN">
        <button>
          <a href="/edit_profile">Edit</a>
        </button>
      </div>
      <p className="stat_user">Goals & Stats</p>
      <div className="goals_user">
        <div className="activity_icons">
          <img src={walkImage} />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src={swimImage} />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src={runImage} />
          <p>Distance : 10 km</p>
        </div>
        <div className="activity_icons">
          <img src={bikeImage} />
          <p>Distance : 25 km</p>
        </div>
        <div className="activity_icons">
          <img src={badmintonImage} />
          <p>Duration : 1.30 hours</p>
        </div>
      </div>
    </div>
  );
};

export default User_left;

