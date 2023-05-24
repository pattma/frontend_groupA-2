import { React} from 'react';
import '../editProfile/editProfile.css';

const EditProfile = function({ onSubmitCreateProfile, onChangeBirthDate, onChangeGender, onChangeHeight, onChangeWeight, user, profile }) {

    const {
        birthDate,
        gender,
        height,
        weight
    } = profile;

    return (
        <div className="wrapper profile">
            <span className="icon-close">
                <a href='/dashboard'><ion-icon name="close"></ion-icon></a>
            </span>

            <div className="form-box profile">
                <h2>Edit Profile</h2>
                <form onSubmit={onSubmitCreateProfile}>
                    <div className='profile-details'>
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" value={user.firstName} placeholder="Enter your first name" disabled />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" value={user.lastName} placeholder="Enter your last name" disabled />
                        </div>
                        <div className="input-box">
                            <span className="details">{`Birth Date ${birthDate.split('T')[0] && `: ${birthDate.split('T')[0]}` || "" }`}</span>
                            <input className="dateTime" type="date" onChange={onChangeBirthDate} placeholder="" required />
                        </div>
                        <div className="input-box">
                            <span className="details">{`Gender ${gender && `: ${gender}` || "" }`}</span>
                            <select className="minimal" onChange={onChangeGender} placeholder="" required >
                                <option value="" > Please Select One... </option>
                                <option value="Female" >Female</option>
                                <option value="Male" >Male</option>
                                <option value="Other" >Other</option>
                                <option value="Prefer not to Answer" >Prefer not to Answer</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <span className="details">{`Height (kg) ${height && `: ${height}`}`}</span>
                            <input type="number" step=".01" onChange={onChangeHeight} placeholder="Enter your height" required />
                        </div>
                        <div className="input-box">
                            <span className="details">{`Weight (kg) ${weight && `: ${weight}`}`}</span>
                            <input type="number" step=".01" onChange={onChangeWeight} placeholder="Enter your weight" required />
                        </div>
                    </div>
                    <button type="submit" className="btn" >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;