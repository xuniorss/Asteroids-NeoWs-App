import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.nasa.gov/'
})

export { api }

//https://api.nasa.gov/