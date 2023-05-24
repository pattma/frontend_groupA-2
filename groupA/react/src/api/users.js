import axios from "axios";

const SERVER = import.meta.env.VITE_BACKEND_URL;

export const signup = async (body) => await axios.post(`${SERVER}/authen/register`, body);

export const login = async (body) => await axios.post(`${SERVER}/authen/login`, body,);
