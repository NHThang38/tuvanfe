import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:5000/",
    headers: { "Content-Type": "application/json" },

    // 'https://reqres.in/api/'
});
export default request;
