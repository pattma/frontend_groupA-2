import axios from "axios";
import Cookies from 'js-cookie';

const SERVER = import.meta.env.VITE_BACKEND_URL;

const token = Cookies.get('TOKEN');
const headers = {
    'Authorization' : token
};

export const create_profile = async (body) => await axios.post(`${SERVER}/profile/create_profile`, body, { headers });
export const update_profile = async (body) => await axios.patch(`${SERVER}/profile/update_profile`, body, { headers });
export const getProfile = async () => await axios.get(`${SERVER}/profile/getProfile`, { headers });
export const getUser = async () => await axios.get(`${SERVER}/profile/getUser`, { headers });
