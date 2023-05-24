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

    console.log(newCard);

    const deleteActivityById = (id) => {
        const newActivityCard = newCard.filter((item) => item._id !== id);
        setNewCard(newActivityCard);
    };

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
                />
                <User_middle 
                    card={newCard} 
                    onDelete={handleDelete}
                />
                <User_right />
            </div>
        </Layout>
    );
};

export default Dashboard_Page;