import axios from "axios";
import Cookies from 'js-cookie';

const SERVER = import.meta.env.VITE_BACKEND_URL;

const token = Cookies.get('TOKEN');
const headers = {
    'Authorization' : token
};

export const create_card = async (body) => await axios.post(`${SERVER}/activity/create_card`, body, { headers });
export const edit_card = async (activityID, body) => await axios.patch(`${SERVER}/activity/${activityID}`, body, { headers });
export const delete_card = async (activityID) => await axios.delete(`${SERVER}/activity/${activityID}`, { headers });
export const getCard = async () => await axios.get(`${SERVER}/activity/getCard`, { headers });